import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MicroserviceService } from '../services/microserviceService';

@Controller()
export class MicroserviceController {

  constructor(
    private readonly microserviceService:
      MicroserviceService,
  ) { }
  @GrpcMethod('MicroserviceService', 'GetData')

  async getData() {
    return await this.microserviceService.getData();
  }
  // async createData() {
  //   return await this.microserviceService.createData();
  // }
  @GrpcMethod('MicroserviceService', 'CreateData')
async createData(data: any) {
  return await this.microserviceService.createData(data);
}
}