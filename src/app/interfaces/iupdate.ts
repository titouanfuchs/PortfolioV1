export enum updateType{
  info = "Information",
  project = "Nouveau Projet",
  language = "Nouveau Langage",
  techno = "Nouvelle Techno"
}

export interface IUpdate {
  title?:string;
  type?:updateType;
  description?:string;
  date?:string;
}
