import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridCRMComponent } from './grid-crm/grid-crm.component';

export const appRoutes: Routes = [
    {
        path: '', 
        pathMatch: 'full', 
        component: GridCRMComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule { }
