import {Component, Input, OnInit} from '@angular/core';
import {IProject} from "../../../interfaces/iproject";
import {MatDialog} from "@angular/material/dialog";
import {ProjectDialogComponent} from "./dialog/project-dialog/project-dialog.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project:IProject = {};

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openProjectDetails(){
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: "60rem",
      minHeight: "30rem",
      data: this.project
    })
  }

}
