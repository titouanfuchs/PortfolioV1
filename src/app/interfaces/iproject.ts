import {ILink} from "./ilink";

export interface IProject {
  name?:string;
  pictures?:string[];
  shortDescription?:string;
  description?:string;
  languages?:string[];
  technos?:string[];
  links?:ILink[];
  date?:string;
}
