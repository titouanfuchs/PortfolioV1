import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Projects} from "./projects.entity";
import {Repository} from "typeorm";
import {PatchProjectDto} from "./dto/patch.project.dto";
import {PutProjectDto} from "./dto/put.project.dto";
import {CreateProjectDto} from "./dto/create.project.dto";

@Injectable()
export class ProjectsService {

    constructor(
        @InjectRepository(Projects)
        private projectsRepository: Repository<Projects>
    ) {}

    public findAllProjects(): Promise<Projects[]>{
        return this.projectsRepository.find();
    }

    public findProjectById(id:string): Promise<Projects>{
        return this.projectsRepository.findOne(id);
    }

    public async updateProjectPublicStatus(id:string, putProjectData:PutProjectDto){
        let project:Projects = await this.findProjectById(id);

        project.isPublic = putProjectData.isPublic;

        return this.projectsRepository.save(project);
    }

    public createProject(projectData:CreateProjectDto){
        return this.projectsRepository.save(projectData);
    }

    public async patchProject(id:string, patchProjectData:PatchProjectDto){
        const project:Projects = await this.findProjectById(id);
        let patchedProject:Projects = new Projects();

        patchedProject.id = id;
        patchedProject.isPublic = project.isPublic;
        patchedProject.name = patchProjectData.name || project.name;
        patchedProject.gitLink = patchProjectData.gitLink || project.gitLink;
        patchedProject.link = patchProjectData.link || project.link;
        patchedProject.description = patchProjectData.description || project.description;


        //TODO : Finir le patch avec les services correspondants
        patchedProject.languages = project.languages;
        patchedProject.technos = project.technos;
        patchedProject.pictures = project.pictures;

        return this.projectsRepository.save(patchedProject);
    }
}
