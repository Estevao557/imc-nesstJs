import { Injectable } from '@nestjs/common';
import {
  ImcCalculatorRequest,
  ImcCalculatorResponse,
} from './imc-calculator.dtos';

@Injectable()
export class ImcCalculatorService {
  hello() {
    return { msg: 'Hello from ImcCalculatorSvc' };
  }

  getTable() {
    return {
      magreza: 0.0,
      normal: 18.5,
      sobrepeso: 24.9,
      obesidade: 30.0,
    };
  }

  calculate(height: number, weight: number) {
    return weight / height ** 2;
  }

  translate(imc: number) {
    if (imc < 18.5) return 'magreza';
    if (imc < 24.9) return 'normal';
    if (imc < 30.0) return 'sobrepeso';
    return 'obesidade';
  }

  calculateAndTranslate(request: ImcCalculatorRequest) {
    const imc = Number(
      Number(this.calculate(request.height, request.weight)).toFixed(2),
    );
    const imcDescription = this.translate(imc);

    return {
      height: request.height,
      weight: request.weight,
      imc,
      imcDescription,
    } as ImcCalculatorResponse;
  }
}
