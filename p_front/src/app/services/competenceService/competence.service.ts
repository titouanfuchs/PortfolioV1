import { Injectable } from '@angular/core';
import {ICompetences} from "../../interfaces/ICompetences";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor() { }

  private competenceList:ICompetences = {
    technos: [
      {name: "Angular"},
      {name: "NestJS"},
      {name: "Unity"},
      {name: "Windows Form"},
      {name: "TailwindCSS"}
    ],
    languages:[
      {name:"C#", master:80},
      {name:"JavaScript / TypeScript", master:70},
      {name:"Python", master:50},
      {name:"PHP", master:40},
      {name:"SQL", master:70},
      {name:"CSS", master:75}
    ]};

  public getAllCompetences(): ICompetences{
    return this.competenceList;
  }
}
