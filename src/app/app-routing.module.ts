import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperimentationComponent} from "./routes/experimentation/experimentation.component";
import {PcversionComponent} from "./routes/pcversion/pcversion.component";

const routes: Routes = [
  {
    path: '',
    component: ExperimentationComponent,
    title: 'Experimentation'  // <-- Page title
  },
  {
    path: 'pc-version',
    component: PcversionComponent,
    title: 'Titouan FUCHS - PC Version'  // <-- Page title
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
