import {Component, Input, OnInit} from '@angular/core';
import {IUpdate} from "../../../interfaces/iupdate";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() update:IUpdate = {};

  constructor() { }

  ngOnInit(): void {
  }

}
