import {Component, Input, OnInit} from '@angular/core';
import {Ihobby} from "../../../interfaces/ihobby";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  @Input() hobby:Ihobby = {};

  constructor() { }

  ngOnInit(): void {
  }

}
