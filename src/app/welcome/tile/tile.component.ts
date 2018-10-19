import { Component, Input, OnInit } from '@angular/core';
import * as data from 'template/data.json';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() type: string;
  tile: any = null;
  tiles: any;
  title: any;
  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case 'savoirfaire':
        this.tile = (<any>data).english.tile.savoirfaire;
        break;
    }
    this.tiles = this.tile.tiles;
    this.title = this.tile.title;
  }
}
