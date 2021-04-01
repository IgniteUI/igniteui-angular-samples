import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid-boston-marathon/grid.component';
import { GridMasterDetailSampleComponent } from './grid-master-detail/grid-master-detail.component';
import { gridsRoutesData } from './grid-routes-data';

export const gridsDVRoutes: Routes = [
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

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridsDVRoutes)
    ]
})
export class GridsDVRoutingModule { }
