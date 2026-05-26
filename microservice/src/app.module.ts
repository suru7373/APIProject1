import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroserviceController } from './controllers/microserviceController';
import { MicroserviceService } from './services/microserviceService';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { join } from 'path/win32';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REPO_PACKAGE',

        transport: Transport.GRPC,

        options: {
          package: 'repo',

          protoPath: join(
            process.cwd(),
            'proto/repo.proto',
          ),

          url: 'localhost:4000',
        },
      },
    ]),
  ],

  controllers: [MicroserviceController],

  providers: [MicroserviceService],
})
export class AppModule {}