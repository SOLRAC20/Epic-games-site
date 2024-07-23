import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/sharepage/navbar/navbar.component';
import { FooterComponent } from './components/sharepage/footer/footer.component';
import { CarouselComponent } from './components/sharepage/carousel/carousel.component';
import { ScrollspyComponent } from './components/sharepage/scrollspy/scrollspy.component';
import { StatisticContentComponent } from './components/sharepage/statistic-content/statistic-content.component';
import { LikeGameContentComponent } from './components/sharepage/like-game-content/like-game-content.component';
import { ReleaseContentComponent } from './components/sharepage/release-content/release-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ScrollspyComponent,
    StatisticContentComponent,
    LikeGameContentComponent,
    ReleaseContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
