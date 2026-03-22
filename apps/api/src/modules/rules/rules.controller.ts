import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { RuleRecord, RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  create(@Body() dto: CreateRuleDto): RuleRecord {
    return this.rulesService.create(dto);
  }

  @Get()
  list(): RuleRecord[] {
    return this.rulesService.list();
  }
}
