import { Injectable } from '@angular/core';
import {IProject} from "../../interfaces/iproject";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private projectList:IProject[] = [
    {name:"Symesis", shortDescription:"Prototype de Jeu vidéo sur PC. RPG Open-World développé en équipe.", languages:["C#"], technos:["Unity Engine", "Prototype"], date:"2018-2019"},
    {name:"Kronophase", shortDescription:"Prototype de Jeu vidéo sur PC. Die and Retry développé en équipe.", languages:["C#"], technos:["Unity Engine", "Prototype"], date:"2019-2020"},
    {name:"WordDrop", shortDescription:"Jeu Vidéo mobile et PC développé avec le moteur de jeu Unity Engine.", languages:["C#"], technos:["Unity Engine", "Android", "UWP", "WIP"], date:"2020-2021"},
    {name:"Editeur de mugs",
      shortDescription:"Un editeur conçu pour la personnalisation de mugs pour Design&Concept.",
      description:"Un logiciel web éditeur de mug, permettant de mettre n'importe quels photos sur le mug. L'éditeur inclu des outils tels que : le redimensionnement d'image, la rotation, le déplacement, et la gestion de \"profondeur\", l'ajout de QR Code et la modification de la position du Filigrane Design&Concept. Le générateur d'aperçu est réalisé en CSS, il permet de voir une représentation du mug (représentation presque identique à la réalitée).",
      languages:["TypeScript", "CSS"],
      technos:["Angular", "TailwindCSS"],
      date:"2021-2022",
      pictures:["mug_01.webp", "mug_02.webp"]},
    {name:"Chatbot", shortDescription:"Un chatbot conçu pour le site internet de la compagnie de transport Trace à Colmar.", languages:["TypeScript", "CSS"], technos:["Angular", "TailwindCSS", "MySQL", "NestJS", "TypeORM", "Swagger"], date:"2022"},
    {name:"Portfolio", shortDescription:"Mon portfolio.", languages:["TypeScript", "CSS"], technos:["Angular", "TailwindCSS"], date:"2022"},
  ]

  public getAllProjects(){
    return this.projectList;
  }
}
