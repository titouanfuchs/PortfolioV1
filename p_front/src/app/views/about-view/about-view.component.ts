import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  ngOnInit(): void {
    this.navigation.updateCurrentRoute('about');
  }

}
