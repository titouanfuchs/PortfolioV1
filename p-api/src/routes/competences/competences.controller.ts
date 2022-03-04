import {Body, Controller, Delete, Get, Patch, Post, Query} from '@nestjs/common';
import {CompetencesService} from "./competences.service";
import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {CreateLanguageDto} from "./dto/create.language.dto";
import {idParam} from "../api.params";
import {PatchLanguageDto} from "./dto/patch.language.dto";
import {query} from "express";
import {Technos} from "./technos.entity";
import {CreateTechnoDto} from "./dto/create.techno.dto";

@ApiTags('Compétences')
@Controller('competences')
export class CompetencesController {

    constructor(private competencesService:CompetencesService) {
    }

    @Get()
    async getAllCompetences(){
        return {languages: await this.competencesService.findAllLanguages(), technos: await this.competencesService.findAllTechnos()};
    }

    @Get('languages')
    getAllLanguages(){
        return this.competencesService.findAllLanguages();
    }

    @Get(`languages/:${idParam.name}`)
    @ApiProperty(idParam)
    getLanguage(@Query(idParam.name) languageID:string){
        return this.competencesService.findLanguageByID(languageID);
    }

    @Post('languages')
    createLanguage(@Body() languageData:CreateLanguageDto){
        return this.competencesService.createLanguage(languageData);
    }

    @Patch(`languages/${idParam.name}`)
    @ApiProperty(idParam)
    patchLanguage(@Body() languageData:PatchLanguageDto,@Query(idParam.name) languageID:string){
        return this.competencesService.patchLanguage(languageID, languageData);
    }

    @Delete(`languages/:${idParam.name}`)
    @ApiProperty(idParam)
    deleteLanguage(@Query(idParam.name) languageID:string){
        return this.competencesService.delete(languageID, 0);
    }

    @Get('technos')
    getAllTechnos(){
        return this.competencesService.findAllTechnos();
    }

    @Post('technos')
    createTechno(@Body() technoData:CreateTechnoDto){
        return this.competencesService.createTechno(technoData);
    }

    @Get(`technos/:${idParam.name}`)
    @ApiProperty(idParam)
    getTechno(@Query(idParam.name) technoID:string){
        return this.competencesService.findTechnoByID(technoID);
    }

    @Patch(`technos/:${idParam.name}`)
    @ApiProperty(idParam)
    patchTechno(@Query(idParam.name) technoID:string, @Body() technoData:Technos){
        return this.competencesService.patchTechno(technoID, technoData);
    }

    @Delete(`technos/:${idParam.name}`)
    @ApiProperty(idParam)
    deleteTechno(@Query(idParam.name) technoID:string){
        return this.competencesService.delete(technoID, 1);
    }
}
