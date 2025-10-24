import { Routes } from "@angular/router";
import { TGridAboutComponent } from "./about.component";
import { TGridSaveStateComponent } from "./tGrid-state.component";

export const routes: Routes = [
  { path: 'tree-grid-state-about', component: TGridAboutComponent },
  { path: 'tree-grid-state', component: TGridSaveStateComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tree-grid-state'
  }
];
