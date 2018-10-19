import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoisComponent } from './whois/whois.component';
import { SkillsComponent } from './skills/skills.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WhoisComponent, SkillsComponent, PartnersComponent],
  exports: [PartnersComponent]
})
export class ServpageModule { }
