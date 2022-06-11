import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentationComponent } from './routes/experimentation/experimentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDividerModule} from "@angular/material/divider";
import { PcversionComponent } from './routes/pcversion/pcversion.component';
import { AboutWindowComponent } from './routes/pcversion/components/about-window/about-window.component';
import { TitleBarComponent } from './routes/pcversion/components/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperimentationComponent,
    PcversionComponent,
    AboutWindowComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
