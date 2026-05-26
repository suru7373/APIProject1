// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class GatewayService {
//   getHello(): string {
//     return 'Hello World!, how are you doing?';
//   }
// }



import {
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';

import type { ClientGrpc } from '@nestjs/microservices'; import type { DoorwayService } from '../interfaces/doorway.interface';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class GatewayService implements OnModuleInit {

  private doorwayService!: DoorwayService;

  constructor(
    @Inject('DOORWAY_PACKAGE')
    private readonly client: ClientGrpc,
  ) { }

  onModuleInit() {
    this.doorwayService =
      this.client.getService<DoorwayService>('DoorwayService');
  }

  getMessage() {
    console.log('Calling getMessage in GatewayService');
    return this.doorwayService.getMessage({});
  }

  // createData(data) {
  //   console.log('Calling createData in GatewayService');
  //   return this.doorwayService.createData(data);
  // }

  async createEmployee(data: any) {
    return await firstValueFrom(
      this.doorwayService.createEmployee(data),
    );
  }
}