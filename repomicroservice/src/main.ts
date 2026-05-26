import { NestFactory } from '@nestjs/core';
import {
  Transport,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.GRPC,
        options: {
          package: 'repo',
          protoPath: join(process.cwd(), 'proto/repo.proto'),
          url: '0.0.0.0:4000',
        },
      },
    );

    await app.listen();
    console.log('🚀 Repo gRPC Microservice running on port 4000');
  } catch (err) {
    console.error('❌ Microservice failed to start', err);
  }
}

bootstrap();


