import {IProject} from "./iproject";

export interface ITechno {
  id?:string,
  name?:string,
  icon?:string,
  link?:string,
  projects?:IProject[];
}
