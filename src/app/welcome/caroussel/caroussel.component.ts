import { Component, OnInit } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {
  imageSources  = (<any>data).origin.carousel.images;

  constructor() { }

  ngOnInit() {
  }

}
