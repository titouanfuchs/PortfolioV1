import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";
import {ICompetences} from "../../interfaces/ICompetences";
import {CompetenceService} from "../../services/competenceService/competence.service";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  private tab:number = 0;

  competences:ICompetences = {};

  constructor(private navigation:NavigationService, private competenceService:CompetenceService) { }

  get Tab(){
    return this.tab;
  }

  changeTab(tab:number){
    this.tab = tab;
  }

  ngOnInit(): void {
    this.navigation.updateCurrentRoute('about');

    this.competences = this.competenceService.getAllCompetences();
  }

}
