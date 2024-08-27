import { NestMiddleware } from '@nestjs/common';

export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    console.log('antes de processar a resposta');
    next();
    console.log('depois de processar a resposta');
  }
}
