import { Routes } from '@angular/router';
import { GridComponent } from './grid-boston-marathon/grid.component';
import { GridMasterDetailSampleComponent } from './grid-master-detail/grid-master-detail.component';
import { gridsRoutesData } from './grid-routes-data';

export const GridsDVRoutes: Routes = [
    {
        component: GridComponent,
        data: gridsRoutesData['grid'],
        path: 'grid'
    },
    {
        component: GridMasterDetailSampleComponent,
        data: gridsRoutesData['grid-master-detail'],
        path: 'grid-master-detail'
    }
];
