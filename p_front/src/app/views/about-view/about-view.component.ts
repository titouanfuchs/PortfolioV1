import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  private tab:number = 0;

  constructor(private navigation:NavigationService) { }

  get Tab(){
    return this.tab;
  }

  changeTab(tab:number){
    this.tab = tab;
  }

  ngOnInit(): void {
    this.navigation.updateCurrentRoute('about');
  }

}
