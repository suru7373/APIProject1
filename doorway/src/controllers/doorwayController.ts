// import { Controller, Get, Post } from '@nestjs/common';
// import { DoorwayService } from '../services/doorwayService';

// @Controller('doorway')
// export class DoorwayController {
//   constructor(private readonly doorwayService: DoorwayService) {}

//   @Post('helloFunction')
//   getHello(): string {
//     return this.doorwayService.getHello();
//   }
// }

import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DoorwayService } from '../services/doorwayService';

@Controller()
export class DoorwayController {
  constructor(
    private readonly doorwayService: DoorwayService,
  ) { }

  // @GrpcMethod('DoorwayService', 'GetMessage')
  // getMessage() {
  //   return {
  //     message: 'Hello from Doorway Project',
  //   };
  // }

  @GrpcMethod('DoorwayService', 'GetMessage')
  async getMessage() {
    console.log('Received request for message in DoorwayController');
    return await this.doorwayService.getMessage();
  }
  @GrpcMethod('DoorwayService', 'CreateEmployee')
  async createEmployee(data: CreateDataRequest) {
    console.log('Received request for createData in DoorwayController');
    return await this.doorwayService.createEmployee(data);
  }
}