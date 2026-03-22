import { Injectable } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';

export interface RuleRecord extends CreateRuleDto {
  id: string;
  createdAt: string;
}

@Injectable()
export class RulesService {
  private readonly rules: RuleRecord[] = [];

  create(dto: CreateRuleDto): RuleRecord {
    const record: RuleRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...dto
    };
    this.rules.push(record);
    return record;
  }

  list(): RuleRecord[] {
    return this.rules;
  }

  findLatestForSelection(
    destinationCode: string,
    visaType: string
  ): RuleRecord | undefined {
    return this.rules
      .filter(
        (rule) =>
          rule.destinationCode === destinationCode && rule.visaType === visaType
      )
      .at(-1);
  }
}
