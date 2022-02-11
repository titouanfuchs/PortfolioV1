import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Projects} from "../projects/projects.entity";
import {Repository} from "typeorm";
import {Languages} from "./languages.entity";
import {Technos} from "./technos.entity";

@Injectable()
export class CompetencesService {

    public constructor(
        @InjectRepository(Languages)
        private languageRepository: Repository<Languages>,
        @InjectRepository(Technos)
        private technosRepository: Repository<Technos>
    ){}

    findAllLanguages(){

    }
}
