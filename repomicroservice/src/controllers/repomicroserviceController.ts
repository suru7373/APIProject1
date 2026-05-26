import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RepoMicroserviceService } from '../services/repomicroserviceService';

@Controller()
export class RepoController {
  constructor(
    private readonly repomicroservice:
      RepoMicroserviceService,
  ) { }

  @GrpcMethod('RepoService', 'GetRepoData')
  async getRepoData(data: any) {
    return await this.repomicroservice.getRepoData(data);
  }
  @GrpcMethod('RepoService', 'CreateRepoData')
  async createRepoData(data: any) {
    return await this.repomicroservice.createRepoData(data);
  }
}