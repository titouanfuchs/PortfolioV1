import {IProject} from "./iproject";

export interface ITechno {
  id?:string,
  name?:string,
  description?:string,
  link?:string,
  master?:number,
  projects?:IProject[];
}
