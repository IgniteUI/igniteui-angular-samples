import { Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import { GridSaveStateComponent } from "./grid-state.component";

export const routes: Routes = [
  { path: 'grid-about', component: AboutComponent },
  { path: 'grid-state', component: GridSaveStateComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid-state'
  }
];
