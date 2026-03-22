const dashboardCss = `
:root {
  --bg: #f4efe6;
  --panel: rgba(255, 252, 246, 0.88);
  --panel-strong: #fffaf2;
  --ink: #1f1a17;
  --muted: #6d655f;
  --line: rgba(60, 43, 28, 0.14);
  --accent: #8b3d2f;
  --accent-soft: #c97b55;
  --accent-deep: #5f231a;
  --ok: #2d6a4f;
  --shadow: 0 24px 60px rgba(69, 38, 19, 0.12);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at top left, rgba(214, 153, 102, 0.32), transparent 32%),
    radial-gradient(circle at top right, rgba(140, 61, 47, 0.18), transparent 28%),
    linear-gradient(180deg, #f9f3ea 0%, var(--bg) 52%, #efe2d2 100%);
  color: var(--ink);
  font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
}

body {
  padding: 32px 20px 64px;
}

.page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 36px;
  border: 1px solid rgba(139, 61, 47, 0.1);
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(255, 250, 242, 0.96), rgba(245, 232, 215, 0.92));
  box-shadow: var(--shadow);
}

.hero::after {
  content: "";
  position: absolute;
  inset: auto -80px -120px auto;
  width: 240px;
  height: 240px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(201, 123, 85, 0.35), transparent 70%);
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  max-width: 10ch;
  font-size: clamp(42px, 7vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.hero p {
  max-width: 760px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.chip {
  padding: 10px 14px;
  border: 1px solid rgba(95, 35, 26, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  color: var(--accent-deep);
  font-size: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.panel {
  grid-column: span 4;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--panel);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

.panel.wide {
  grid-column: span 8;
}

.panel.full {
  grid-column: 1 / -1;
}

.panel h2 {
  margin: 0 0 8px;
  font-size: 28px;
  line-height: 1.1;
}

.panel p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.6;
}

.stack {
  display: grid;
  gap: 14px;
}

.split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

label {
  display: grid;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-deep);
}

input, textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid rgba(95, 35, 26, 0.14);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.86);
  color: var(--ink);
  font: inherit;
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: rgba(139, 61, 47, 0.5);
  box-shadow: 0 0 0 4px rgba(201, 123, 85, 0.16);
  transform: translateY(-1px);
}

textarea {
  min-height: 110px;
  resize: vertical;
}

button {
  appearance: none;
  border: 0;
  border-radius: 16px;
  padding: 14px 18px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #fff7f0;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
  box-shadow: 0 16px 32px rgba(139, 61, 47, 0.22);
}

button:hover {
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.7;
  cursor: progress;
}

.secondary {
  background: linear-gradient(135deg, #d8b991 0%, #c97b55 100%);
}

.result {
  min-height: 240px;
  padding: 18px;
  border: 1px solid rgba(95, 35, 26, 0.12);
  border-radius: 20px;
  background: var(--panel-strong);
  color: #2b2521;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow: auto;
}

.status {
  margin-top: 14px;
  min-height: 24px;
  color: var(--ok);
  font-weight: 700;
}

.tips {
  display: grid;
  gap: 12px;
}

.tip {
  padding: 16px;
  border-left: 4px solid var(--accent-soft);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.68);
}

.tip strong {
  display: block;
  margin-bottom: 6px;
}

@media (max-width: 1024px) {
  .panel,
  .panel.wide {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  body {
    padding: 18px 14px 40px;
  }

  .hero {
    padding: 24px;
    border-radius: 24px;
  }

  .grid {
    gap: 16px;
  }

  .panel,
  .panel.wide,
  .panel.full {
    grid-column: 1 / -1;
  }

  .split {
    grid-template-columns: 1fr;
  }
}
`;

const dashboardJs = `
const endpoints = {
  publishRule: '/rules',
  createCase: '/cases',
  checkCompleteness: '/completeness/check'
};

const resultEl = document.getElementById('result');
const statusEl = document.getElementById('status');

function pretty(value) {
  return JSON.stringify(value, null, 2);
}

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? '#9d2a1a' : '#2d6a4f';
}

async function requestJson(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(pretty(body));
  }

  return body;
}

function parseCsv(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

async function onSubmit(form, buildPayload, successLabel) {
  const submitButton = form.querySelector('button');
  submitButton.disabled = true;
  setStatus('Working...');

  try {
    const payload = buildPayload();
    const data = await requestJson(form.dataset.endpoint, payload);
    resultEl.textContent = pretty(data);
    setStatus(successLabel);
  } catch (error) {
    resultEl.textContent = error.message;
    setStatus('Request failed. See result panel for details.', true);
  } finally {
    submitButton.disabled = false;
  }
}

document.getElementById('rule-form').dataset.endpoint = endpoints.publishRule;
document.getElementById('case-form').dataset.endpoint = endpoints.createCase;
document.getElementById('completeness-form').dataset.endpoint = endpoints.checkCompleteness;

document.getElementById('rule-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  await onSubmit(event.currentTarget, () => ({
    destinationCode: document.getElementById('rule-destination').value.trim().toUpperCase(),
    visaType: document.getElementById('rule-visa-type').value.trim(),
    version: document.getElementById('rule-version').value.trim(),
    sourceUrl: document.getElementById('rule-source-url').value.trim(),
    requiredDocuments: parseCsv(document.getElementById('rule-documents').value)
  }), 'Rule published.');
});

document.getElementById('case-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  await onSubmit(event.currentTarget, () => ({
    destinationCode: document.getElementById('case-destination').value.trim().toUpperCase(),
    visaType: document.getElementById('case-visa-type').value.trim(),
    applicantProfile: {
      occupation: document.getElementById('case-occupation').value.trim(),
      annualIncomeCny: Number(document.getElementById('case-income').value),
      hasProperty: document.getElementById('case-property').value.trim().toLowerCase() === 'true'
    }
  }), 'Case created.');
});

document.getElementById('completeness-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  await onSubmit(event.currentTarget, () => ({
    destinationCode: document.getElementById('check-destination').value.trim().toUpperCase(),
    visaType: document.getElementById('check-visa-type').value.trim(),
    uploadedDocuments: parseCsv(document.getElementById('check-documents').value)
  }), 'Completeness checked.');
});

document.getElementById('seed-demo').addEventListener('click', async () => {
  const demoRule = {
    destinationCode: 'JP',
    visaType: 'tourist',
    version: '2026.03.1',
    sourceUrl: 'https://example-embassy.jp',
    requiredDocuments: ['passport', 'photo', 'bank_statement']
  };

  try {
    const data = await requestJson(endpoints.publishRule, demoRule);
    resultEl.textContent = pretty(data);
    setStatus('Demo rule seeded. You can now test completeness immediately.');
  } catch (error) {
    resultEl.textContent = error.message;
    setStatus('Demo seed failed. See result panel for details.', true);
  }
});
`;

const dashboardHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Visa Ops Console</title>
    <link rel="stylesheet" href="/ops/styles.css" />
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <p class="eyebrow">Ops Web MVP</p>
        <h1>Visa workflow, now with a control room.</h1>
        <p>
          This is a thin operator surface on top of the current Nest API. You can
          publish rules, create applicant cases, and run document completeness checks
          without touching curl.
        </p>
        <div class="hero-meta">
          <div class="chip">Current API surface: rules, cases, completeness</div>
          <div class="chip">Same-origin calls to your local Nest service</div>
          <div class="chip">Good for MVP validation before a full Next.js app</div>
        </div>
      </section>

      <section class="grid">
        <article class="panel">
          <h2>Publish Rule</h2>
          <p>Seed or revise a visa rule version so downstream checks have a source of truth.</p>
          <form id="rule-form" class="stack">
            <div class="split">
              <label>Destination Code
                <input id="rule-destination" value="JP" required />
              </label>
              <label>Visa Type
                <input id="rule-visa-type" value="tourist" required />
              </label>
            </div>
            <div class="split">
              <label>Rule Version
                <input id="rule-version" value="2026.03.1" required />
              </label>
              <label>Source URL
                <input id="rule-source-url" value="https://example-embassy.jp" required />
              </label>
            </div>
            <label>Required Documents
              <textarea id="rule-documents" required>passport, photo, bank_statement</textarea>
            </label>
            <button type="submit">Publish rule</button>
          </form>
        </article>

        <article class="panel">
          <h2>Create Case</h2>
          <p>Create an applicant snapshot and confirm the case captures the active rule version.</p>
          <form id="case-form" class="stack">
            <div class="split">
              <label>Destination Code
                <input id="case-destination" value="JP" required />
              </label>
              <label>Visa Type
                <input id="case-visa-type" value="tourist" required />
              </label>
            </div>
            <label>Occupation
              <input id="case-occupation" value="engineer" required />
            </label>
            <div class="split">
              <label>Annual Income CNY
                <input id="case-income" type="number" value="350000" required />
              </label>
              <label>Has Property
                <input id="case-property" value="true" required />
              </label>
            </div>
            <button type="submit" class="secondary">Create case</button>
          </form>
        </article>

        <article class="panel wide">
          <h2>Check Completeness</h2>
          <p>Run the deterministic missing-document check and inspect the exact missing reasons.</p>
          <form id="completeness-form" class="stack">
            <div class="split">
              <label>Destination Code
                <input id="check-destination" value="JP" required />
              </label>
              <label>Visa Type
                <input id="check-visa-type" value="tourist" required />
              </label>
            </div>
            <label>Uploaded Documents
              <textarea id="check-documents" required>passport</textarea>
            </label>
            <div class="split">
              <button type="submit">Run completeness check</button>
              <button type="button" id="seed-demo" class="secondary">Seed demo rule</button>
            </div>
          </form>
        </article>

        <article class="panel full">
          <h2>Result Console</h2>
          <p>The last API response lands here. This gives us a usable operator page before we formalize a full front-end app.</p>
          <div id="result" class="result">Use one of the forms above to call the API.</div>
          <div id="status" class="status"></div>
        </article>

        <article class="panel full">
          <h2>Suggested Walkthrough</h2>
          <div class="tips">
            <div class="tip">
              <strong>1. Publish a rule</strong>
              Seed a destination and visa type pair so case creation and completeness checks share the same rule version.
            </div>
            <div class="tip">
              <strong>2. Create a case</strong>
              Confirm the applicant profile snapshot and <code>ruleVersionSnapshot</code> are aligned.
            </div>
            <div class="tip">
              <strong>3. Run completeness</strong>
              Start with only <code>passport</code>, then add <code>photo</code> and <code>bank_statement</code> to watch the result turn complete.
            </div>
          </div>
        </article>
      </section>
    </main>
    <script src="/ops/app.js"></script>
  </body>
</html>
`;

export function getOpsDashboardHtml(): string {
  return dashboardHtml;
}

export function getOpsDashboardCss(): string {
  return dashboardCss;
}

export function getOpsDashboardJs(): string {
  return dashboardJs;
}
