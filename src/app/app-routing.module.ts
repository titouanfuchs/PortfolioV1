import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrameIntroComponent} from "./components/frames/frame-intro/frame-intro.component";

const routes: Routes = [
  { path: '', component: FrameIntroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
