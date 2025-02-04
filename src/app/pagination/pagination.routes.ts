import { Routes } from '@angular/router';
import { paginationRoutesData } from './pagination-routes-data';
import { PaginationSampleComponent } from './paginator/pagination-sample.component';

export const PaginatorRoutes: Routes = [
    {
        component: PaginationSampleComponent,
        data: paginationRoutesData['main-pagination'],
        path: 'main-pagination'
    }
];
