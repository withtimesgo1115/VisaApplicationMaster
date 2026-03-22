import { Injectable } from '@nestjs/common';
import { RulesService } from '../rules/rules.service';
import { CreateCaseDto } from './dto/create-case.dto';

export interface CaseRecord extends CreateCaseDto {
  id: string;
  status: 'Draft';
  ruleVersionSnapshot: string;
  createdAt: string;
}

@Injectable()
export class IntakeService {
  private readonly cases: CaseRecord[] = [];

  constructor(private readonly rulesService: RulesService) {}

  create(dto: CreateCaseDto): CaseRecord {
    const latestRule = this.rulesService.findLatestForSelection(
      dto.destinationCode,
      dto.visaType
    );

    const record: CaseRecord = {
      id: crypto.randomUUID(),
      ...dto,
      status: 'Draft',
      ruleVersionSnapshot: latestRule?.version ?? 'UNSPECIFIED',
      createdAt: new Date().toISOString()
    };

    this.cases.push(record);
    return record;
  }
}
