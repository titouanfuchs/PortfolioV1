import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  ngOnInit(): void {
    this.navigation.updateCurrentRoute('projects');
  }

}
