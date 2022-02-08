import { Component, OnInit } from '@angular/core';
import {NavigationItem} from "../../objects/navigation-item";
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  get NavRoute(){
    return this.navigation.navigationRoutes;
  }

  constructor(private navigation:NavigationService) { }

  ngOnInit(): void {
  }

}
