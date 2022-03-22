import {Injectable} from '@angular/core';
import {IUpdate, updateType} from "../../interfaces/iupdate";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }

  public getAllUpdates(): IUpdate[]{
    return [
      {
        title: "Ouverture de mon Portfolio",
        type: updateType.info,
        description: "Ouverture de mon portfolio développé avec Angular et TailwindCSS !",
        date:"20/03/2022"
      }
    ]
  }
}
