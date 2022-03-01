import {IProject} from "./iproject";

export interface ILanguage {
  id?:string,
  name?:string,
  link?:string,
  projects:IProject[];
}
