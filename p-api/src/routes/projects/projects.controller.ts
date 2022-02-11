import {Body, Controller, DefaultValuePipe, Delete, Get, Patch, Post, Put, Query} from '@nestjs/common';
import {ProjectsService} from "./projects.service";
import {ApiParam, ApiTags} from "@nestjs/swagger";
import {projectIDParam} from "../api.params";
import {CreateProjectDto} from "./dto/create.project.dto";
import {PatchProjectDto} from "./dto/patch.project.dto";
import {PutProjectDto} from "./dto/put.project.dto";

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {

    constructor(private projectService:ProjectsService) {
    }

    @Get()
    findAll(){
        return this.projectService.findAllProjects();
    }

    @Get(`:${projectIDParam.name}`)
    @ApiParam(projectIDParam)
    findByID(@Query(projectIDParam.name) projectID:string){
        return this.projectService.findProjectById(projectID);
    }

    @Post()
    createProject(@Body() projectData:CreateProjectDto){
        return this.projectService.createProject(projectData);
    }

    @Patch(`:${projectIDParam.name}`)
    @ApiParam(projectIDParam)
    editProject(@Body() projectData:PatchProjectDto, @Query(projectIDParam.name) projectID:string){
        return this.projectService.patchProject(projectID, projectData);
    }

    @Put(`${projectIDParam.name}/publicState/`)
    @ApiParam(projectIDParam)
    publicState(@Query(projectIDParam.name) projectID:string, @Body() projectData:PutProjectDto){
        return this.projectService.updateProjectPublicStatus(projectID, projectData);
    }

    @Delete(`:${projectIDParam.name}`)
    @ApiParam(projectIDParam)
    deleteProject(@Query(projectIDParam.name) projectID:string){
        return this.projectService.deleteProject(projectID);
    }
}
