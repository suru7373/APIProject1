import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { join } from 'path/win32';
import { RepoController } from './controllers/repomicroserviceController';
 import { RepoMicroserviceService } from './services/repomicroserviceService';
import { PrismaService } from './common/prisma/prisma.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { RepoRepository } from './repositories/repo.repository';
@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [RepoController],
  providers: [RepoRepository, RepoMicroserviceService],
})
export class AppModule {}