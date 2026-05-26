// import { Controller, Get, Post } from '@nestjs/common';
// import { GatewayService } from '../services/gatewayService';

// @Controller('gateway')
// export class GatewayController {
//   constructor(private readonly gatewayService: GatewayService) {}

//   @Post('helloFunction')
//   getHello(): string {
//     return this.gatewayService.getHello();
//   }
// }

import { Body, Controller, Get, Post } from '@nestjs/common';
import { GatewayService } from '../services/gatewayService';

@Controller()
export class GatewayController {

  constructor(private readonly gatewayService: GatewayService) { }

  @Get('message')
  getMessage() {//getAll data
    console.log('Received request for message');
    return this.gatewayService.getMessage();
  }
  @Post('createEmployee')
  createEmployee(@Body() data: any) {
    console.log('Received request to create employee');
    return this.gatewayService.createEmployee(data);
  }
}