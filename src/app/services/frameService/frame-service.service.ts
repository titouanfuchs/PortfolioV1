import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameServiceService {

  private currentStep:number = 0;
  private frames:any[] = [
    {name:"Intro", status:true},
    {name:"Showcase", status:false}
  ]

  constructor() { }

  frameState(frameName:string){
    for (let frame of this.frames){
      if (frame.name === frameName){
        return frame.status;
      }
    }

    return false;
  }
}
