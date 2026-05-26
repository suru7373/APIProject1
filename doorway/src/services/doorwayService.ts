// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class DoorwayService {
//   getHello(): string {
//     return 'Hello World!, how are you doing?';
//   }
// }

import {
  Injectable,
  Inject,
  OnModuleInit,
} from '@nestjs/common';

import type { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DoorwayService
  implements OnModuleInit {

  private microserviceService: any;

  constructor(
    @Inject('MICROSERVICE_PACKAGE')
    private client: ClientGrpc,
  ) { }

  onModuleInit() {

    this.microserviceService =
      this.client.getService(
        'MicroserviceService',
      );
  }

  async getMessage() {
    console.log(
      'Calling microservice from doorway',
    );
    return this.microserviceService.GetData({});
  }
  // async createData(data:CreateData) {
  //   console.log(
  //     'Calling microservice from doorway',
  //   );
  //   return this.microserviceService.CreateData(data);
  // }

  async createEmployee(data: CreateDataRequest) {
    return await firstValueFrom(
      this.microserviceService.createEmployee(data),
    );
  }
}