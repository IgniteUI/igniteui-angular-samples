import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/grid-crm'
    },
    {
        loadChildren: () => import('./grid-crm/grid-crm.module').then(m => m.GridsCrmModule),
        path: 'grid-crm'
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