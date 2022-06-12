import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  public WindowUpdateSubject:Subject<number[]> = new Subject<number[]>();

  private WindowUpdate(index:number, state:number){
    this.WindowUpdateSubject.next([index, state]);
  }

  private windowsState:number[] = [
    1, //A Propos
    0, //Mes Passions
    0, //Mes Compétences
    0 //Mes Projets
  ]

  constructor() { }

  public reduceWindow(index:number){
    this.windowsState[index] = 2;
    this.WindowUpdate(index, 2);
  }

  public closeWindow(index:number){
    this.windowsState[index] = 0;
    this.WindowUpdate(index, 0);
  }

  public openWindow(index:number){

  }

  public updateWindowState(index:number, state:number){
    this.windowsState[index] = state;
    this.WindowUpdate(index, state);
  }

  public reverseState(index:number){
    let newState = this.windowsState[index] === 1 ? 2 : 1;
    this.windowsState[index] = newState;
    this.WindowUpdate(index, newState);
  }

  public windowState(index:number) : number{
    return this.windowsState[index];
  }
}
