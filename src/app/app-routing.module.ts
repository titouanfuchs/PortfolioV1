import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrameIntroComponent} from "./components/frames/frame-intro/frame-intro.component";
import {MainFrameComponent} from "./components/main-frame/main-frame.component";

const routes: Routes = [
  { path: '', component: MainFrameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
