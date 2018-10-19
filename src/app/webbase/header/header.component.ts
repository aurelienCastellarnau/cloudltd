import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../services/translation.service';
import * as data from 'template/data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  template = (<any>data).english.header;
  company = this.template.company;
  logo = this.template.logo;
  translateLink = this.template.translateLink;
  menu = this.template.menu;
  constructor(private translationService: TranslationService) {
    const self = this;
    this.subscription = this.translationService.getLanguage().subscribe(language => {
      console.log('language: ', language);
      if (language.text === '中文') {
        self.template = (<any>data).chinese.header;
      } else if (language.text === 'English') {
        self.template = (<any>data).english.header;
      }
      this.translateLink = self.template.translateLink;
      this.menu = self.template.menu;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  ngOnInit() {
  }
  translate(event, item) {
    this.translationService.sendLanguage(this.translateLink);
  }
}
