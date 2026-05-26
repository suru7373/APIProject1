// import {
//     Injectable,
//     Inject,
//     OnModuleInit,
// } from '@nestjs/common';

// @Injectable()
// export class RepoMicroserviceService {
//     async getRepoData() {
//         return {
//             message: 'Data from "RepoMicroservice"',
//         };

//     }
// }

import { Injectable } from '@nestjs/common';

import { RepoRepository }
  from '../repositories/repo.repository';

@Injectable()
export class RepoMicroserviceService {

  constructor(
    private readonly repoRepository:
      RepoRepository,
  ) { }

  async getRepoData(data: any) {

    const users =
      await this.repoRepository.getUsers(data);
    console.log(users);

    return {
      message: 'Success',
      data: users,
    };
  }
  async createRepoData(data: any) {
    const newUser = await this.repoRepository.createRepoData(data);
    return {
      message: 'Success',
      data: newUser,
    };
  }
}