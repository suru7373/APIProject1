import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path/win32';
import { DoorwayController } from './controllers/doorwayController';
import { DoorwayService } from './services/doorwayService';

// @Module({
//   imports: [],
//   controllers: [DoorwayController,AppController],
//   providers: [AppService, DoorwayService],
// })
// export class AppModule {}


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE_PACKAGE',

        transport: Transport.GRPC,

        options: {
          package: 'microservice',

          protoPath: join(
            process.cwd(),
            'proto/microservice.proto',
          ),

          url: 'localhost:3000',
        },
      },
    ]),
  ],

  controllers: [DoorwayController],

  providers: [DoorwayService],
})
export class AppModule {}