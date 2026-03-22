import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IntakeModule } from './modules/intake/intake.module';
import { RulesModule } from './modules/rules/rules.module';

@Module({
  imports: [RulesModule, IntakeModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
