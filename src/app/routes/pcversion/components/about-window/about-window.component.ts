import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about-window',
  templateUrl: './about-window.component.html',
  styleUrls: ['./about-window.component.css']
})
export class AboutWindowComponent implements OnInit {

  @Output() windowEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public doEvent(type:number){
    this.windowEvent.emit(type);
  }

}
