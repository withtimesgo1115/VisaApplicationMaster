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

  it('GET /ops renders the operator dashboard page', async () => {
    const res = await request(app.getHttpServer()).get('/ops');

    expect(res.status).toBe(200);
    expect(res.text).toContain('Visa Ops Console');
    expect(res.text).toContain('Check Completeness');
    expect(res.text).toContain('Result Console');
  });
});
