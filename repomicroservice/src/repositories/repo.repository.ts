import { Injectable } from '@nestjs/common';

import { PrismaService }
  from '../common/prisma/prisma.service';

@Injectable()
export class RepoRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async getUsers(data: any) {

    const getAll = await this.prisma.employee.findMany();
    console.log(getAll);

    return getAll;
  }

  async createRepoData(data: any) {

    const createData = await this.prisma.employee.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    console.log(createData);

    return createData;
  }
}