import { Body, Controller, Post } from '@nestjs/common';
import {
  CompletenessCheckResponse,
  CompletenessService
} from './completeness.service';
import { CheckCompletenessDto } from './dto/check-completeness.dto';

@Controller('completeness')
export class CompletenessController {
  constructor(private readonly completenessService: CompletenessService) {}

  @Post('check')
  check(@Body() dto: CheckCompletenessDto): CompletenessCheckResponse {
    return this.completenessService.check(dto);
  }
}
