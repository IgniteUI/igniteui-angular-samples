import { Routes } from "@angular/router";
import { HGridSaveStateComponent } from "./hGrid-state.component";
import { HGridAboutComponent } from "./about.component";

export const routes: Routes = [
  { path: 'hGrid-state-about', component: HGridAboutComponent },
  { path: 'hGrid-state', component: HGridSaveStateComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hGrid-state'
  }
];
