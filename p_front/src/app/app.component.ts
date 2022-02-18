import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p_front';

  constructor(private router:Router) {
  }

  public enableNavigation(): boolean{
    return this.router.url !== "/login" && this.router.url !== "/admin";
  }
}
