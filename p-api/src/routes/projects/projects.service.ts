import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Projects} from "./projects.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProjectsService {

    constructor(
        @InjectRepository(Projects)
        private projectsRepository: Repository<Projects>
    ) {
    }

    public findAllProjects(): Promise<Projects[]>{
        return this.projectsRepository.find();
    }

    public findProjectById(id:string): Promise<Projects>{
        return this.projectsRepository.findOne(id);
    }
}
