import { Injectable, NotFoundException } from '@nestjs/common';
import { evaluateCompleteness } from '../../../../../packages/shared-domain/src';
import { RulesService } from '../rules/rules.service';
import { CheckCompletenessDto } from './dto/check-completeness.dto';

export interface CompletenessCheckResponse {
  destinationCode: string;
  visaType: string;
  ruleVersion: string;
  requiredDocuments: string[];
  uploadedDocuments: string[];
  isComplete: boolean;
  missing: Array<{
    code: string;
    reason: 'required_by_rule';
  }>;
}

@Injectable()
export class CompletenessService {
  constructor(private readonly rulesService: RulesService) {}

  check(dto: CheckCompletenessDto): CompletenessCheckResponse {
    const rule = this.rulesService.findLatestForSelection(
      dto.destinationCode,
      dto.visaType
    );

    if (!rule) {
      throw new NotFoundException(
        `No rule found for ${dto.destinationCode}/${dto.visaType}`
      );
    }

    const result = evaluateCompleteness(rule.requiredDocuments, dto.uploadedDocuments);

    return {
      destinationCode: dto.destinationCode,
      visaType: dto.visaType,
      ruleVersion: rule.version,
      requiredDocuments: rule.requiredDocuments,
      uploadedDocuments: dto.uploadedDocuments,
      ...result
    };
  }
}
