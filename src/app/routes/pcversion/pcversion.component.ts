import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcversion',
  templateUrl: './pcversion.component.html',
  styleUrls: ['./pcversion.component.css']
})
export class PcversionComponent implements OnInit {

  public now:string = "00:00";

  constructor() { }

  ngOnInit(): void {
    this.refreshTime();
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
