import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  addr = 'Room 1203, 12/F, Tower 3 China Hong Kong City, 33 Canton Road, Tsimshatsui, Kowloon Hong Kong ';
  constructor() { }

  ngOnInit() {
  }

}
