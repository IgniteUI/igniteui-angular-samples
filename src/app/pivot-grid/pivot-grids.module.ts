/* eslint-disable max-len */
// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxPivotGridModule } from '@infragistics/igniteui-angular';
import { PivotExportComponent } from './pivot-export/pivot-export.component';
import { PivotFeaturesComponent } from './pivot-features/pivot-features.component';
import { PivotGridBasicSampleComponent } from './pivot-basic-sample/pivot-grid-basic-sample.component';
import { PivotDataSelectorSampleComponent } from './pivot-datasource/pivot-data-selector-sample.component';
import { PivotGridNoopSampleComponent } from './pivot-grid-noop/pivot-grid-noop-sample.component';
import { PivotGridsRoutingModule } from './pivot-grids-routing.module';
import { PivotGridStatePersistenceSampleComponent } from './pivot-state-persistence/pivot-grid-state-persistence-sample.component';
import { PivotGridAboutComponent } from './pivot-state-persistence/about.component';
import { PivotGridNoopPersistenceSampleComponent } from './pivot-grid-noop-persistence/pivot-grid-noop-persistence-sample.component';

@NgModule({
    declarations: [
        PivotGridBasicSampleComponent,
        PivotDataSelectorSampleComponent,
        PivotExportComponent,
        PivotFeaturesComponent,
        PivotGridStatePersistenceSampleComponent,
        PivotGridNoopSampleComponent,
        PivotGridAboutComponent,
        PivotGridNoopPersistenceSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PivotGridsRoutingModule,
        IgxPivotGridModule
    ]
})
export class PivotGridsModule { }
