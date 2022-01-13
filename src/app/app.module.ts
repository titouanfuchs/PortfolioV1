import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameIntroComponent } from './components/frames/frame-intro/frame-intro.component';
import { MainButtonComponent } from './components/ui/main-button/main-button.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FrameIntroComponent,
    MainButtonComponent,
    MainFrameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
