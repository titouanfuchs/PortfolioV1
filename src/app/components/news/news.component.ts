import {Component, Input, OnInit} from '@angular/core';
import {IUpdate} from "../../interfaces/iupdate";
import {UpdateService} from "../../services/updateService/update.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private updateService:UpdateService) { }

  updates:IUpdate[] = [];

  ngOnInit(): void {
    this.updates = this.updateService.getAllUpdates();
  }

}
