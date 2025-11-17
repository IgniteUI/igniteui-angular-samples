import { Routes } from "@angular/router";
import { PivotGridStatePersistenceSampleComponent } from "./pivot-grid-state-persistence-sample.component";
import { PivotGridAboutComponent } from "./about.component";

export const routes: Routes = [
  { path: 'pivot-state-about', component: PivotGridAboutComponent },
  { path: 'pivot-grid-state-persistence', component: PivotGridStatePersistenceSampleComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pivot-grid-state-persistence'
  }
];
