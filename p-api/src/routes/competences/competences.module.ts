import { Module } from '@nestjs/common';
import {CompetencesController} from "./competences.controller";
import { CompetencesService } from './competences.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Languages} from "./languages.entity";
import {Technos} from "./technos.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Languages, Technos])],
    controllers: [CompetencesController],
    providers: [CompetencesService],
    exports: [CompetencesService]
})
export class CompetencesModule {
}
