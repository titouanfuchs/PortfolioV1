import { Injectable } from '@angular/core';
import {IProject} from "../../interfaces/iproject";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private projectList:IProject[] = [
    {name:"WordDrop", description:"Jeu Vidéo mobile et PC développé avec le moteur de jeu Unity Engine.", languages:["C#"], technos:["Unity Engine", "Android", "UWP", "WIP"], date:"2020-2021"}
  ]

  public getAllProjects(){
    return this.projectList;
  }
}
