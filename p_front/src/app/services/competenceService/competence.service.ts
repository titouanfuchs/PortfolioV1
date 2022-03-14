import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICompetences} from "../../interfaces/ICompetences";
import {ILanguage} from "../../interfaces/ilanguage";
import {ITechno} from "../../interfaces/itechno";

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
      {name:"C#", description:"Maîtrise du langage depuis 2016. Application dans divers projets (voir page projets)."},
      {name:"JavaScript / TypeScript", description:"Maîtrise du langage depuis 2021. Application dans divers projets (voir page projets)."},
      {name:"Python"},
      {name:"PHP"},
      {name:"SQL"},
      {name:"CSS"}
    ]};

  public getAllCompetences(): ICompetences{
    return this.competenceList;
  }
}
