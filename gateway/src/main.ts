import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.gatewayPort ?? 1000);
    console.log('Microservice running on 1000');

}
bootstrap();
