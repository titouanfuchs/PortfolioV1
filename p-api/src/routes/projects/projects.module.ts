import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Projects} from "./projects.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Projects])],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService]
})
export class ProjectsModule {}
