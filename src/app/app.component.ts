import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from './services/translation.service';
import * as data from 'template/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  subscription: Subscription;
  language = 'english';
  title = 'cloudltd';
  template = (<any>data).english;
  background = this.template.background;

  constructor(private translationService: TranslationService) {
    const self = this;
    this.subscription = this.translationService.getLanguage().subscribe(language => {
      console.log('language: ', language);
      this.language = language.text;
      console.log('language: ', this.language);
      if (this.language === '中文') {
        console.log('Chinese language');
        self.template = (<any>data).chinese;
      } else if (this.language === 'English') {
        console.log('English Language');
        self.template = (<any>data).english;
      }
      this.background = self.template.background;
      console.log('background = ', this.background);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getBg() {
    return 'url(' + this.background + ') no-repeat center';
  }
}
