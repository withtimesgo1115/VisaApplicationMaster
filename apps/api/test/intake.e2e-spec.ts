import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Intake', () => {
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
    expect(res.body.ruleVersionSnapshot).toBe('2026.03.1');
    expect(res.body.id).toBeDefined();
  });
});
