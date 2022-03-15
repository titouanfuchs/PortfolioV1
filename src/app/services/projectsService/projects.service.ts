import { Injectable } from '@angular/core';
import {IProject} from "../../interfaces/iproject";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private projectList:IProject[] = [
    {name:"Kronophase", description:"Prototype de Jeu vidéo sur PC. Die and Retry développé en équipe de 6.", languages:["C#"], technos:["Unity Engine", "Prototype"], date:"2019-2020"},
    {name:"WordDrop", description:"Jeu Vidéo mobile et PC développé avec le moteur de jeu Unity Engine.", languages:["C#"], technos:["Unity Engine", "Android", "UWP", "WIP"], date:"2020-2021"},
    {name:"Editeur de mugs", description:"Un editeur conçu pour la personnalisation de mugs pour Design&Concept.", languages:["TypeScript", "CSS"], technos:["Angular", "TailwindCSS"], date:"2021-2022"},
    {name:"Chatbot", description:"Un chatbot conçu pour le site internet de la compagnie de transport Trace à Colmar.", languages:["TypeScript", "CSS"], technos:["Angular", "TailwindCSS", "MySQL", "NestJS", "TypeORM", "Swagger"], date:"2022"},
  ]

  public getAllProjects(){
    return this.projectList;
  }
}
