import {
  Injectable,
  Inject,
  OnModuleInit,
} from '@nestjs/common';

import type { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class MicroserviceService
  implements OnModuleInit {

  private repoService: any;

  constructor(
    @Inject('REPO_PACKAGE')
    private client: ClientGrpc,
  ) { }

  onModuleInit() {

    this.repoService =
      this.client.getService(
        'RepoService',
      );
  }

  async getData() {

    return await this.repoService.GetRepoData({});
  }
  // async createData() {
  //   return await this.repoService.CreateRepoData({});
  // }
  async createData(data: any) {
    return await this.repoService.CreateRepoData(data);
  }
}