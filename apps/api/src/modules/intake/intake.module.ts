import { Module } from '@nestjs/common';
import { RulesModule } from '../rules/rules.module';
import { IntakeController } from './intake.controller';
import { IntakeService } from './intake.service';

@Module({
  imports: [RulesModule],
  controllers: [IntakeController],
  providers: [IntakeService]
})
export class IntakeModule {}
