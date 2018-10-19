import { Component, OnInit } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners = (<any>data).partners;
  partnersintro = (<any>data).partnersintro;
  constructor() { }

  ngOnInit() {
  }

}
