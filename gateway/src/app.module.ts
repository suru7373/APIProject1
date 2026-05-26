// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { GatewayController } from './controllers/gatewayController';
// import { GatewayService } from './services/gatewayService';

// @Module({
//   imports: [],
//   controllers: [AppController, GatewayController],
//   providers: [AppService, GatewayService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './controllers/gatewayController';
import { GatewayService } from './services/gatewayService';
import { join } from 'path/win32';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DOORWAY_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'doorway',
          // protoPath: 'proto/doorway.proto',
          protoPath: join(__dirname, '../proto/doorway.proto'),
          url: 'localhost:2000',
        },
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule {}