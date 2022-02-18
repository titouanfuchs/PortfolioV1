import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {ProjectsViewComponent} from "./views/projects-view/projects-view.component";
import {AboutViewComponent} from "./views/about-view/about-view.component";
import {AdminViewComponent} from "./views/admin-view/admin-view.component";
import {LoginViewComponent} from "./views/login-view/login-view.component";

const routes: Routes = [
  //{ path: '', component: },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent},
  { path: 'about', component: AboutViewComponent},
  { path: 'projects', component: ProjectsViewComponent},
  { path: 'admin', component: AdminViewComponent},
  { path: 'login', component: LoginViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
