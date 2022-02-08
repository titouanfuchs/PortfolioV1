import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  ngOnInit(): void {
    this.navigation.updateCurrentRoute('home');
  }

}
