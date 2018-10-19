import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';

// Components
import { WelcomeComponent } from './welcome/welcome.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { TileComponent } from './tile/tile.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule,
  ],
  declarations: [WelcomeComponent, CarousselComponent, TileComponent, IntroComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
