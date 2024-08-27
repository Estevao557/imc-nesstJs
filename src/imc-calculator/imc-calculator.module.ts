import { Module } from '@nestjs/common';
import { ImcCalculatorController } from './imc-calculator.controller';
import { ImcCalculatorService } from './imc-calculator.service';

@Module({
  controllers: [ImcCalculatorController],
  providers: [ImcCalculatorService],
})
export class ImcCalculatorModule {}
