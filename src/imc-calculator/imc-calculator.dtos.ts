export class ImcCalculatorRequest {
  height: number;
  weight: number;
}

export class ImcCalculatorResponse {
  height: number;
  weight: number;
  imc: number;
  imcDescription: string;
}

export interface ImcTable {
  magreza: number;
  normal: number;
  sobrepeso: number;
  obesidade: number;
}
