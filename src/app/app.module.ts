import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import {HttpClientModule} from "@angular/common/http";
import { CompetenceComponent } from './components/elements/competence/competence.component';
import { ProjectComponent } from './components/elements/project/project.component';
import {CarouselModule} from "@marcreichel/angular-carousel";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeViewComponent,
    ProjectsViewComponent,
    AboutViewComponent,
    FooterComponent,
    NewsComponent,
    CompetenceComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
