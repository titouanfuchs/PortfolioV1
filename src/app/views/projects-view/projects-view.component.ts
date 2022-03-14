import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigationService/navigation.service";
import {ProjectsService} from "../../services/projectsService/projects.service";
import {IProject} from "../../interfaces/iproject";

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {

  projects:IProject[] = [];

  constructor(private navigation:NavigationService, private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.navigation.updateCurrentRoute('projects');
    this.projects = this.projectsService.getAllProjects();
  }

}
