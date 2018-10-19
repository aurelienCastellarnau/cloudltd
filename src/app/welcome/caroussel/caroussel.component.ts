import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../services/translation.service';
import * as data from 'template/data.json';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {
  subscription: Subscription;
  template = (<any>data).english.carousel;
  imageSource = (<any>data).english.carousel;

  constructor(private translationService: TranslationService) {
    const self = this;
    this.subscription = this.translationService.getLanguage().subscribe(language => {
      console.log('language: ', language);
      if (language.text === '中文') {
        self.template = (<any>data).chinese.carousel;
      } else if (language.text === 'English') {
        self.template = (<any>data).english.carousel;
      }
      this.imageSource = self.template;
    });
   }

  ngOnInit() {
  }

}
