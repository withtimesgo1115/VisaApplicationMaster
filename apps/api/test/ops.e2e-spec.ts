import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Ops Dashboard', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET / renders the Chinese destination selection page', async () => {
    const res = await request(app.getHttpServer()).get('/');
    const scriptRes = await request(app.getHttpServer()).get('/app/app.js');

    expect(res.status).toBe(200);
    expect(res.text).toContain('先选国家，再看真正该准备什么');
    expect(res.text).toContain('选择目的地');
    expect(res.text).toContain('/app/app.js');
    expect(scriptRes.status).toBe(200);
    expect(scriptRes.text).toContain('日本');
    expect(scriptRes.text).toContain('France-Visas');
  });

  it('GET /visa/japan renders the checklist page', async () => {
    const res = await request(app.getHttpServer()).get('/visa/japan');
    const scriptRes = await request(app.getHttpServer()).get('/app/checklist.js');

    expect(res.status).toBe(200);
    expect(res.text).toContain('我的材料清单');
    expect(res.text).toContain('检查我的完整性');
    expect(res.text).toContain('/app/checklist.js');
    expect(scriptRes.status).toBe(200);
    expect(scriptRes.text).toContain('passport');
    expect(scriptRes.text).toContain('bank_statement');
  });
});
