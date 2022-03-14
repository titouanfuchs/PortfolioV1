import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  get navRoutes(){
    return this.navigation.navigationRoutes;
  }

  ngOnInit(): void {
  }

}
