import { Component, OnInit } from '@angular/core';
import {WindowService} from "./services/window.service";

@Component({
  selector: 'app-pcversion',
  templateUrl: './pcversion.component.html',
  styleUrls: ['./pcversion.component.css']
})
export class PcversionComponent implements OnInit {

  public now:string = "00:00";

  constructor(public WindowService:WindowService) { }

  ngOnInit(): void {
    this.refreshTime();

    this.WindowService.WindowUpdateSubject.subscribe((event)=>{

    })
  }

  refreshTime(){
    let n = new Date(Date.now());
    this.now = `${n.getHours()}:${n.getMinutes()}`;
    let self = this;
    setTimeout(function(){
      self.refreshTime();
    },10000);
  }
}
