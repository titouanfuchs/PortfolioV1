import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {CompetencesService} from "./competences.service";
import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {CreateLanguageDto} from "./dto/create.language.dto";
import {languageIdParam} from "../api.params";

@ApiTags('Compétences')
@Controller('competences')
export class CompetencesController {

    constructor(private competencesService:CompetencesService) {
    }

    @Get()
    getAllCompetences(){
        return {langages: this.competencesService.findAllLanguages(), technos:this.competencesService.findAllTechnos()};
    }

    @Get('languages')
    getAllLangages(){
        return this.competencesService.findAllLanguages();
    }

    @Get(`languages/${languageIdParam.name}`)
    @ApiProperty(languageIdParam)
    getLangage(@Query(languageIdParam.name) languageID:string){
        return this.competencesService.findLanguageByID(languageID);
    }

    @Post('languages')
    createLangage(@Body() langageData:CreateLanguageDto){

    }

    @Get('technos')
    getAllTechnos(){
        return this.competencesService.findAllTechnos();
    }
}
