import {Component, Input, OnInit} from '@angular/core';
import {ILanguage} from "../../../interfaces/ilanguage";
import {ITechno} from "../../../interfaces/itechno";

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  @Input() language:ILanguage = {};
  @Input() techno:ITechno = {};

  @Input() type:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
