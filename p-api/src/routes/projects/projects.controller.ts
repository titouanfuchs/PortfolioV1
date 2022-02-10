import {Controller, DefaultValuePipe, Get, Query} from '@nestjs/common';
import {ProjectsService} from "./projects.service";
import {ApiParam, ApiTags} from "@nestjs/swagger";
import {projectIDParam} from "../api.params";

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {

    constructor(private projectService:ProjectsService) {
    }

    @Get()
    findAll(){
        return this.projectService.findAllProjects();
    }

    @Get(':projectID')
    @ApiParam(projectIDParam)
    findByID(@Query(projectIDParam.name) projectID:string){
        return this.projectService.findProjectById(projectID);
    }
    
}
