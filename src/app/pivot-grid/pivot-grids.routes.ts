/* eslint-disable max-len */
import { Routes } from '@angular/router';
import { PivotGridBasicSampleComponent } from './pivot-basic-sample/pivot-grid-basic-sample.component';
import { PivotDataSelectorSampleComponent } from './pivot-datasource/pivot-data-selector-sample.component';
import { PivotFeaturesComponent } from './pivot-features/pivot-features.component';
import { PivotExportComponent } from './pivot-export/pivot-export.component';
import { PivotGridNoopPersistenceSampleComponent } from './pivot-grid-noop-persistence/pivot-grid-noop-persistence-sample.component';
import { PivotGridNoopSampleComponent } from './pivot-grid-noop/pivot-grid-noop-sample.component';
import { pivotGridsRoutesData } from './pivot-grid-routes-data';
import { PivotGridAboutComponent } from './pivot-state-persistence/about.component';
import { PivotGridStatePersistenceSampleComponent } from './pivot-state-persistence/pivot-grid-state-persistence-sample.component';
import { PivotGridLayoutComponent } from './pivot-layout/pivot-layout.component'
// tslint:enable:max-line-length

export const PivotGridsRoutes: Routes = [
    {
        component: PivotGridBasicSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-basic'],
        path: 'pivot-grid-basic'
    },
    {
        component: PivotExportComponent,
        data: pivotGridsRoutesData['pivot-grid-export'],
        path: 'pivot-grid-export'
    },
    {
        component: PivotFeaturesComponent,
        data: pivotGridsRoutesData['pivot-grid-features'],
        path: 'pivot-grid-features'
    },
    {
        component: PivotDataSelectorSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-datasource'],
        path: 'pivot-grid-datasource'
    },
    {
        component: PivotGridNoopSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-noop'],
        path: 'pivot-grid-noop'
    },
    {
        component: PivotGridStatePersistenceSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-features'],
        path: 'pivot-grid-state-persistence'
    },
    {
        component: PivotGridNoopPersistenceSampleComponent,
        data: pivotGridsRoutesData['pivot-grid-noop-persistence'],
        path: 'pivot-grid-noop-persistence'
    },
    {
        component: PivotGridAboutComponent,
        data: pivotGridsRoutesData['pivot-grid-about'],
        path: 'pivot-state-about'
    },
    {
        component: PivotGridLayoutComponent,
        data: pivotGridsRoutesData['pivot-grid-features'],
        path: 'pivot-grid-layout'
    }
];
