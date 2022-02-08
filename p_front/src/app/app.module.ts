import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeViewComponent,
    ProjectsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
