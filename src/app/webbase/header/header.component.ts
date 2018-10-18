import { Component, OnInit } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  h = (<any>data).origin.header;
  company = this.h.company;
  translateLink = this.h.translateLink;
  menu = this.h.menu;
  constructor() { }

  ngOnInit() {
  }

}
