/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PivotGridBasicSampleComponent } from './pivot-basic-sample/pivot-grid-basic-sample.component';
import { PivotGridNoopSampleComponent } from './pivot-grid-noop/pivot-grid-noop-sample.component';
import { pivotGridsRoutesData } from './pivot-grid-routes-data';
// tslint:enable:max-line-length

export const gridsRoutes: Routes = [
    {
        component: PivotGridBasicSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-basic'],
        path: 'pivot-grid-basic'
    },
    {
        component: PivotGridNoopSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-noop'],
        path: 'pivot-grid-noop'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridsRoutes)
    ]
})
export class PivotGridsRoutingModule { }
