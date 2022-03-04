import { Component, OnInit } from '@angular/core';
import {ICompetences} from "../../interfaces/ICompetences";
import {CompetenceService} from "../../services/competenceService/competence.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  competences:ICompetences = {};

  constructor(private competenceService:CompetenceService) { }

  ngOnInit(): void {
    this.competenceService.getAllCompetences().subscribe((competences)=>{
      this.competences = competences;
      console.log(competences);
    })
  }

}
