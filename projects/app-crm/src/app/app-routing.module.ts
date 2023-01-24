import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridCRMComponent } from './grid-crm/grid-crm.component';

export const gridCrmRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: GridCRMComponent
    },
    {
        path: 'grid-crm', component: GridCRMComponent
    },
];
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(gridCrmRoutes)
    ]
})
export class AppRoutingModule { }