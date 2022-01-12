import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {

  @Input() buttonText:string = "Boutton";
  @Input() secondText:string = ">> <<";
  @Input() pingButton:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
