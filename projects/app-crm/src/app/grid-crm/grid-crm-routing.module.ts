import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridCRMComponent } from './grid-crm.component';

export const gridCrmRoutes: Routes = [
    {
        component: GridCRMComponent,
        path: ''
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridCrmRoutes)
    ]
})
export class GridsCrmRoutingModule { }
