import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Rules', () => {
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
    expect(res.body.id).toBeDefined();
  });
});
