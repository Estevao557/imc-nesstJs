import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImcCalculatorModule } from './imc-calculator/imc-calculator.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ImcCalculatorController } from './imc-calculator/imc-calculator.controller';

@Module({
  imports: [ImcCalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ImcCalculatorController);
  }
}
