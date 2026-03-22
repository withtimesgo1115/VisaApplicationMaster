import { Body, Controller, Post } from '@nestjs/common';
import { CreateCaseDto } from './dto/create-case.dto';
import { CaseRecord, IntakeService } from './intake.service';

@Controller('cases')
export class IntakeController {
  constructor(private readonly intakeService: IntakeService) {}

  @Post()
  create(@Body() dto: CreateCaseDto): CaseRecord {
    return this.intakeService.create(dto);
  }
}
