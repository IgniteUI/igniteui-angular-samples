import { Routes } from '@angular/router';
import { GridCRMComponent } from './grid-crm/grid-crm.component';

export const GridCrmRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: GridCRMComponent
    },
    {
        path: 'grid-crm', component: GridCRMComponent
    }
];
