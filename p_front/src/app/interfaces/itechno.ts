import {IProject} from "./iproject";

export interface ITechno {
  id?:string,
  name?:string,
  description?:string,
  link?:string,
  projects?:IProject[];
}
