import { Component, OnInit } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  background = (<any>data).origin.background_layout;
  constructor() { }

  ngOnInit() {
  }

  getBg() {
    return 'url(' + this.background + ') no-repeat center';
  }
}
