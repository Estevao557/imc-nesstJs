import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ImcCalculatorService } from './imc-calculator.service';
import { ImcCalculatorRequest } from './imc-calculator.dtos';

@Controller('imc')
export class ImcCalculatorController {
  constructor(private readonly imcCalcService: ImcCalculatorService) {}

  @Get('hello')
  getHello() {
    return this.imcCalcService.hello();
  }

  @Get('table')
  getTable() {
    return this.imcCalcService.getTable();
  }

  @Get('table/html')
  @Render('imcTable.hbs')
  getTableHtml() {
    return { data: this.imcCalcService.getTable() };
  }

  @Post('calculate')
  calculate(@Body() request: ImcCalculatorRequest) {
    return this.imcCalcService.calculateAndTranslate(request);
  }

  @Get('form')
  @Render('imcForm')
  getImcForm() {
    return {
      fields: [
        { field: { label: 'Peso (kg)', type: 'number', name: 'weight' } },
        { field: { label: 'Altura (m)', type: 'number', name: 'height' } },
      ],
    };
  }

  @Post('result')
  @Render('imcResult')
  calculateImc(@Body() request: ImcCalculatorRequest) {
    const result = this.imcCalcService.calculateAndTranslate(request);
    return result;
  }
}
