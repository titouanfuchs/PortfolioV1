import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @Input() title:string = "Nouvelle Fenêtre";

  constructor() { }

  ngOnInit(): void {
  }

}
