import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Completeness', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    await request(app.getHttpServer()).post('/rules').send({
      destinationCode: 'JP',
      visaType: 'tourist',
      version: '2026.03.1',
      sourceUrl: 'https://example-embassy.jp',
      requiredDocuments: ['passport', 'photo', 'bank_statement']
    });
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /completeness/check returns missing items with reasons', async () => {
    const res = await request(app.getHttpServer()).post('/completeness/check').send({
      destinationCode: 'JP',
      visaType: 'tourist',
      uploadedDocuments: ['passport']
    });

    expect(res.status).toBe(201);
    expect(res.body.ruleVersion).toBe('2026.03.1');
    expect(res.body.isComplete).toBe(false);
    expect(res.body.missing).toEqual([
      { code: 'photo', reason: 'required_by_rule' },
      { code: 'bank_statement', reason: 'required_by_rule' }
    ]);
  });

  it('returns 404 when no matching rule exists', async () => {
    const res = await request(app.getHttpServer()).post('/completeness/check').send({
      destinationCode: 'US',
      visaType: 'tourist',
      uploadedDocuments: ['passport']
    });

    expect(res.status).toBe(404);
    expect(res.body.message).toContain('No rule found');
  });
});
