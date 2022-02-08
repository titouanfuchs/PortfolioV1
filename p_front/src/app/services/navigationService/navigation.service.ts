import { Injectable } from '@angular/core';
import {NavigationItem} from "../../objects/navigation-item";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navRoute: NavigationItem[] = [
    new NavigationItem('Home', 'home', true),
    new NavigationItem('Projects', 'projects', false),
  ]

  constructor() { }

  public get navigationRoutes(): NavigationItem[]{
    return this.navRoute;
  }

  public updateCurrentRoute(route:string){
    this.navRoute[this.navRoute.map(e => e.selected).indexOf(true)].selected = false;
    this.navRoute[this.navRoute.map(e => e.route).indexOf(route)].selected = true;
  }
}
