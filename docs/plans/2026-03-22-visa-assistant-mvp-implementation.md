# Visa Assistant MVP (Hybrid) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an MVP that lets users select destination + visa type, generate personalized checklist, upload documents, auto-check completeness, and route to human review before submission.

**Architecture:** Start with a TypeScript monorepo and modular backend (single deployable API). Deliver two surfaces in MVP: WeChat Mini Program (user-facing) and Ops Web (review-facing). Keep rule management, checklist evaluation, document metadata, and review decisions as explicit bounded modules.

**Tech Stack:** pnpm workspace, Turborepo, Node.js + NestJS, PostgreSQL + Prisma, MinIO (S3-compatible) for files, Taro + React (Mini Program), Next.js (Ops Web), Vitest + Supertest + Playwright.

---

## Preconditions

- Working directory: `/Users/liucaining/works/VisaApplicationMaster`
- Node.js 20+
- pnpm 9+
- Docker (for PostgreSQL + MinIO locally)

## Proposed Repository Layout

- `apps/api`
- `apps/miniapp`
- `apps/ops-web`
- `packages/shared-domain`
- `packages/shared-config`
- `infra/docker-compose.yml`

---

### Task 1: Monorepo Bootstrap + Local Infra

**Files:**
- Create: `package.json`
- Create: `pnpm-workspace.yaml`
- Create: `turbo.json`
- Create: `infra/docker-compose.yml`
- Create: `.env.example`
- Create: `apps/api/package.json`
- Create: `apps/api/src/main.ts`
- Test: `apps/api/test/health.e2e-spec.ts`

**Step 1: Write the failing test**

```ts
// apps/api/test/health.e2e-spec.ts
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('Health', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('GET /health returns ok', async () => {
    const res = await request(app.getHttpServer()).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/api test:e2e`
Expected: FAIL with module/app bootstrap missing errors.

**Step 3: Write minimal implementation**

```ts
// apps/api/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/api test:e2e`
Expected: PASS with 1 passing spec.

**Step 5: Commit**

```bash
git add package.json pnpm-workspace.yaml turbo.json infra/docker-compose.yml .env.example apps/api
git commit -m "chore: bootstrap monorepo and api health check"
```

---

### Task 2: Visa Requirement Catalog (Versioned Rules)

**Files:**
- Create: `apps/api/prisma/schema.prisma`
- Create: `apps/api/src/modules/rules/rules.module.ts`
- Create: `apps/api/src/modules/rules/rules.controller.ts`
- Create: `apps/api/src/modules/rules/rules.service.ts`
- Test: `apps/api/test/rules.e2e-spec.ts`

**Step 1: Write the failing test**

```ts
// apps/api/test/rules.e2e-spec.ts
it('POST /rules publishes a versioned rule', async () => {
  const payload = {
    destinationCode: 'JP',
    visaType: 'tourist',
    version: '2026.03.1',
    sourceUrl: 'https://example-embassy.jp',
    requiredDocuments: ['passport', 'photo', 'bank_statement']
  };
  const res = await request(app.getHttpServer()).post('/rules').send(payload);
  expect(res.status).toBe(201);
  expect(res.body.destinationCode).toBe('JP');
  expect(res.body.version).toBe('2026.03.1');
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/api test:e2e -- rules.e2e-spec.ts`
Expected: FAIL (route not found / 404).

**Step 3: Write minimal implementation**

```ts
// apps/api/src/modules/rules/rules.controller.ts
@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  create(@Body() dto: CreateRuleDto) {
    return this.rulesService.create(dto);
  }
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/api test:e2e -- rules.e2e-spec.ts`
Expected: PASS (201 created with persisted rule).

**Step 5: Commit**

```bash
git add apps/api/prisma/schema.prisma apps/api/src/modules/rules apps/api/test/rules.e2e-spec.ts
git commit -m "feat: add versioned visa rules module"
```

---

### Task 3: Applicant Profile + Case Intake

**Files:**
- Create: `apps/api/src/modules/intake/intake.module.ts`
- Create: `apps/api/src/modules/intake/intake.controller.ts`
- Create: `apps/api/src/modules/intake/intake.service.ts`
- Create: `apps/api/src/modules/intake/dto/create-case.dto.ts`
- Test: `apps/api/test/intake.e2e-spec.ts`

**Step 1: Write the failing test**

```ts
it('POST /cases creates case snapshot with applicant profile', async () => {
  const payload = {
    destinationCode: 'JP',
    visaType: 'tourist',
    applicantProfile: {
      occupation: 'engineer',
      annualIncomeCny: 350000,
      hasProperty: true
    }
  };

  const res = await request(app.getHttpServer()).post('/cases').send(payload);
  expect(res.status).toBe(201);
  expect(res.body.status).toBe('Draft');
  expect(res.body.ruleVersionSnapshot).toBeDefined();
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/api test:e2e -- intake.e2e-spec.ts`
Expected: FAIL (404 /cases).

**Step 3: Write minimal implementation**

```ts
// apps/api/src/modules/intake/intake.service.ts
create(dto: CreateCaseDto) {
  return {
    id: crypto.randomUUID(),
    ...dto,
    status: 'Draft',
    ruleVersionSnapshot: '2026.03.1'
  };
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/api test:e2e -- intake.e2e-spec.ts`
Expected: PASS.

**Step 5: Commit**

```bash
git add apps/api/src/modules/intake apps/api/test/intake.e2e-spec.ts
git commit -m "feat: add applicant intake and case creation"
```

---

### Task 4: Completeness Engine (Deterministic Rules)

**Files:**
- Create: `apps/api/src/modules/completeness/completeness.module.ts`
- Create: `apps/api/src/modules/completeness/completeness.service.ts`
- Create: `apps/api/src/modules/completeness/completeness.controller.ts`
- Create: `packages/shared-domain/src/completeness.ts`
- Test: `apps/api/test/completeness.e2e-spec.ts`
- Test: `packages/shared-domain/src/completeness.spec.ts`

**Step 1: Write the failing test**

```ts
// packages/shared-domain/src/completeness.spec.ts
import { evaluateCompleteness } from './completeness';

it('returns missing items with reasons', () => {
  const result = evaluateCompleteness(
    ['passport', 'photo', 'bank_statement'],
    ['passport']
  );
  expect(result.isComplete).toBe(false);
  expect(result.missing).toEqual([
    { code: 'photo', reason: 'required_by_rule' },
    { code: 'bank_statement', reason: 'required_by_rule' }
  ]);
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/shared-domain test`
Expected: FAIL (function not found).

**Step 3: Write minimal implementation**

```ts
// packages/shared-domain/src/completeness.ts
export function evaluateCompleteness(required: string[], uploaded: string[]) {
  const missing = required
    .filter((item) => !uploaded.includes(item))
    .map((code) => ({ code, reason: 'required_by_rule' as const }));
  return { isComplete: missing.length === 0, missing };
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/shared-domain test`
Expected: PASS.

**Step 5: Commit**

```bash
git add packages/shared-domain apps/api/src/modules/completeness apps/api/test/completeness.e2e-spec.ts
git commit -m "feat: add deterministic completeness engine"
```

---

### Task 5: Document Upload Metadata + Human Review Queue

**Files:**
- Create: `apps/api/src/modules/documents/documents.module.ts`
- Create: `apps/api/src/modules/documents/documents.controller.ts`
- Create: `apps/api/src/modules/review/review.module.ts`
- Create: `apps/api/src/modules/review/review.controller.ts`
- Create: `apps/api/src/modules/review/review.service.ts`
- Test: `apps/api/test/review.e2e-spec.ts`

**Step 1: Write the failing test**

```ts
it('POST /reviews/:caseId/decision marks case ReadyToSubmit', async () => {
  const res = await request(app.getHttpServer())
    .post('/reviews/case-1/decision')
    .send({ decision: 'approve', reviewerNote: 'all required documents verified' });

  expect(res.status).toBe(201);
  expect(res.body.status).toBe('ReadyToSubmit');
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/api test:e2e -- review.e2e-spec.ts`
Expected: FAIL (404 route missing).

**Step 3: Write minimal implementation**

```ts
// apps/api/src/modules/review/review.service.ts
decide(caseId: string, decision: 'approve' | 'reject', reviewerNote: string) {
  return {
    caseId,
    decision,
    reviewerNote,
    status: decision === 'approve' ? 'ReadyToSubmit' : 'CollectingDocs'
  };
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/api test:e2e -- review.e2e-spec.ts`
Expected: PASS.

**Step 5: Commit**

```bash
git add apps/api/src/modules/documents apps/api/src/modules/review apps/api/test/review.e2e-spec.ts
git commit -m "feat: add document metadata and human review decision flow"
```

---

### Task 6: Mini Program Core Flow (Destination → Checklist → Upload Status)

**Files:**
- Create: `apps/miniapp/package.json`
- Create: `apps/miniapp/src/pages/index/index.tsx`
- Create: `apps/miniapp/src/pages/checklist/index.tsx`
- Create: `apps/miniapp/src/services/api.ts`
- Test: `apps/miniapp/src/pages/checklist/checklist.spec.tsx`

**Step 1: Write the failing test**

```tsx
// apps/miniapp/src/pages/checklist/checklist.spec.tsx
import { render, screen } from '@testing-library/react';
import ChecklistPage from './index';

it('renders missing item hint', () => {
  render(<ChecklistPage />);
  expect(screen.getByText('缺少材料')).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/miniapp test`
Expected: FAIL (page/component not found).

**Step 3: Write minimal implementation**

```tsx
// apps/miniapp/src/pages/checklist/index.tsx
export default function ChecklistPage() {
  return (
    <view>
      <text>缺少材料</text>
    </view>
  );
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/miniapp test`
Expected: PASS.

**Step 5: Commit**

```bash
git add apps/miniapp
git commit -m "feat: scaffold miniapp checklist user flow"
```

---

### Task 7: Ops Web Review Console (Queue + Decision Action)

**Files:**
- Create: `apps/ops-web/package.json`
- Create: `apps/ops-web/src/app/review/page.tsx`
- Create: `apps/ops-web/src/lib/api.ts`
- Test: `apps/ops-web/src/app/review/page.spec.tsx`

**Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react';
import ReviewPage from './page';

it('renders review queue title', () => {
  render(<ReviewPage />);
  expect(screen.getByText('Case Review Queue')).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/ops-web test`
Expected: FAIL (component not found).

**Step 3: Write minimal implementation**

```tsx
// apps/ops-web/src/app/review/page.tsx
export default function ReviewPage() {
  return <h1>Case Review Queue</h1>;
}
```

**Step 4: Run test to verify it passes**

Run: `pnpm --filter @visa/ops-web test`
Expected: PASS.

**Step 5: Commit**

```bash
git add apps/ops-web
git commit -m "feat: add ops review queue skeleton"
```

---

### Task 8: End-to-End MVP Happy Path + CI Gate

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `apps/api/test/happy-path.e2e-spec.ts`
- Create: `docs/adr/0001-mvp-hybrid-architecture.md`
- Modify: `README.md`

**Step 1: Write the failing test**

```ts
// apps/api/test/happy-path.e2e-spec.ts
it('happy path: create case -> evaluate complete -> approve', async () => {
  const caseRes = await request(app.getHttpServer()).post('/cases').send({
    destinationCode: 'JP',
    visaType: 'tourist',
    applicantProfile: { occupation: 'engineer', annualIncomeCny: 350000, hasProperty: true }
  });
  const caseId = caseRes.body.id;

  const evalRes = await request(app.getHttpServer()).post(`/cases/${caseId}/completeness`).send({
    uploaded: ['passport', 'photo', 'bank_statement']
  });
  expect(evalRes.body.isComplete).toBe(true);

  const reviewRes = await request(app.getHttpServer())
    .post(`/reviews/${caseId}/decision`)
    .send({ decision: 'approve', reviewerNote: 'ok' });
  expect(reviewRes.body.status).toBe('ReadyToSubmit');
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm --filter @visa/api test:e2e -- happy-path.e2e-spec.ts`
Expected: FAIL due to missing route wiring.

**Step 3: Write minimal implementation**

```ts
// Wire modules in apps/api/src/app.module.ts
imports: [RulesModule, IntakeModule, CompletenessModule, DocumentsModule, ReviewModule]
```

**Step 4: Run full verification**

Run: `pnpm lint && pnpm test && pnpm --filter @visa/api test:e2e`
Expected: PASS, CI green locally.

**Step 5: Commit**

```bash
git add .github/workflows/ci.yml apps/api/test/happy-path.e2e-spec.ts apps/api/src/app.module.ts docs/adr/0001-mvp-hybrid-architecture.md README.md
git commit -m "test: add mvp happy-path and CI quality gate"
```

---

## Definition of Done (MVP Build Track)

- User can complete destination + profile intake in miniapp.
- System generates checklist from versioned rules.
- Upload metadata recorded and completeness outcome is explainable.
- Incomplete cases show missing items and guidance.
- Complete cases enter ops review queue; reviewer can approve/reject with note.
- Approved cases transition to `ReadyToSubmit`.
- CI enforces lint + unit + e2e tests.

## Verification Checklist Per Task

1. `pnpm lint`
2. `pnpm test`
3. `pnpm --filter @visa/api test:e2e`
4. Manual smoke:
   - Miniapp checklist page renders missing hints
   - Ops review page renders queue and decision action

## Implementation Notes

- Keep all modules in one API deployable until clear bottleneck appears.
- Keep completeness engine deterministic in MVP; no AI hard dependency.
- Keep legal/compliance wording in docs as engineering guidance only.
