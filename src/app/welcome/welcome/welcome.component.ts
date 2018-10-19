import { Component, OnInit } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  partners = (<any>data).partners;

  constructor() { }

  ngOnInit() {
  }

}
