import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @Output() windowEvent = new EventEmitter<number>();

  @Input() title:string = "Nouvelle Fenêtre";

  constructor() { }

  ngOnInit(): void {
  }

  public doEvent(type:number){
    this.windowEvent.emit(type);
  }

}
