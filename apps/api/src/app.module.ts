import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CompletenessModule } from './modules/completeness/completeness.module';
import { IntakeModule } from './modules/intake/intake.module';
import { RulesModule } from './modules/rules/rules.module';

@Module({
  imports: [RulesModule, IntakeModule, CompletenessModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
