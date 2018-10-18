import { Component } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloudltd';
  background = (<any>data).origin.background;
  getBg() {
    return 'url(' + this.background + ') no-repeat center';
  }
}
