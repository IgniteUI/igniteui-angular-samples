/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PivotGridBasicSampleComponent } from './pivot-basic-sample/pivot-grid-basic-sample.component';
import { PivotDatasourceSampleComponent } from './pivot-datasource/pivot-datasource-sample.component';
import { PivotFeaturesComponent } from './pivot-features/pivot-features.component';
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
        component: PivotFeaturesComponent,
        data: pivotGridsRoutesData['pivot-grid-features'],
        path: 'pivot-grid-features'
    },
    {
        component: PivotDatasourceSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-datasource'],
        path: 'pivot-grid-datasource'
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
