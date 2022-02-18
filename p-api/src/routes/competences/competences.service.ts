import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Projects} from "../projects/projects.entity";
import {Repository} from "typeorm";
import {Languages} from "./languages.entity";
import {Technos} from "./technos.entity";
import {CreateLanguageDto} from "./dto/create.language.dto";
import {PatchLanguageDto} from "./dto/patch.language.dto";
import {CreateTechnoDto} from "./dto/patch.techno.dto";

@Injectable()
export class CompetencesService {

    public constructor(
        @InjectRepository(Languages)
        private languageRepository: Repository<Languages>,
        @InjectRepository(Technos)
        private technosRepository: Repository<Technos>
    ){}

    findAllLanguages(){
        return this.languageRepository.find();
    }

    findAllTechnos(){
        return this.technosRepository.find();
    }

    findTechnoByID(id:string){
        return this.technosRepository.findOne(id);
    }

    createTechno(technoData:CreateTechnoDto){
        return this.technosRepository.save(technoData);
    }

    async patchTechno(id:string, patchTechnoData:PatchLanguageDto){
        const technoData:Technos = await this.technosRepository.findOne(id);
        let patchedTechno: Technos = new Technos();

        patchedTechno.name = patchTechnoData.name || technoData.name;
        patchedTechno.link = patchTechnoData.link || technoData.link;

        return this.technosRepository.update(technoData.id,patchedTechno);
    }

    findLanguageByID(id:string){
        return this.languageRepository.findOne(id);
    }

    createLanguage(languageData:CreateLanguageDto){
        return this.languageRepository.save(languageData);
    }

    async patchLanguage(id:string, patchLanguageData:PatchLanguageDto){
        const languageData:Languages = await this.languageRepository.findOne(id);
        let patchedLanguage: Languages = new Languages();

        patchedLanguage.name = patchLanguageData.name || languageData.name;
        patchedLanguage.link = patchLanguageData.link || languageData.link;

        return this.languageRepository.update(languageData.id,patchedLanguage);
    }

    delete(id:string, type:number){
        switch(type){
            case 0:
                return this.languageRepository.delete(id);
            case 1:
                return this.technosRepository.delete(id);
        }
    }
}
