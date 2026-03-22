import { Module } from '@nestjs/common';
import { RulesModule } from '../rules/rules.module';
import { CompletenessController } from './completeness.controller';
import { CompletenessService } from './completeness.service';

@Module({
  imports: [RulesModule],
  controllers: [CompletenessController],
  providers: [CompletenessService]
})
export class CompletenessModule {}
