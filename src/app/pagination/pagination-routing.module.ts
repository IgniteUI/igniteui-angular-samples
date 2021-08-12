import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paginationRoutesData } from './pagination-routes-data';
import { PaginationSampleComponent } from './paginator/pagination-sample.component';

export const paginatorRoutes: Routes = [
    {
        component: PaginationSampleComponent,
        data: paginationRoutesData['main-pagination'],
        path: 'main-pagination'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(paginatorRoutes)
    ]
})
export class PaginatorRoutingModule { }
