import { Injectable } from '@angular/core';
import {ICompetences} from "../../interfaces/ICompetences";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor() { }

  private competenceList:ICompetences = {
    technos: [
      {name: "Angular", master:70, description:"Angular est un Framework permettant de développer des applications web."},
      {name: "NestJS", master:70, description:"NestJS est un Framework permettant de développer des applications web Node.js efficaces et évolutives."},
      {name: "Unity Engine", master: 80, description:"Unity Engine est un moteur de jeu cross-platform développé par Unity Technologies."},
      {name: "TailwindCSS", master: 90, description:"Bibliothèque/Framework CSS"},
      {name: "TypeORM", master:70, description:"TypeORM est un ORM compatible avec les plateformes NodeJS."},
      {name: "MySql", master:60, description:"MySQL est un RDBMS (Relational Database Management System) open-source."},
      {name:"Univeral Windows Platform", master:40, description:"Universal Windows Platform (UWP) est une plateforme créée par Microsoft et introduite pour la première fois dans Windows 10."}
    ],
    languages:[
      {name:"C#", master:80},
      {name:"JavaScript / TypeScript", master:70},
      {name:"Python", master:50},
      {name:"PHP", master:40},
      {name:"CSS", master:75}
    ]};

  public getAllCompetences(): ICompetences{
    return this.competenceList;
  }
}
