// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { env } from 'process';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(env.PORT ?? 2000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'doorway',
        protoPath: 'proto/doorway.proto',
        url: 'localhost:2000',
      },
    },
  );

  await app.listen();
    console.log('Microservice running on 2000');

}

bootstrap();