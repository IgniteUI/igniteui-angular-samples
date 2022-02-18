/* eslint-disable max-len */
// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxPivotGridModule } from 'igniteui-angular';
import { PivotGridBasicSampleComponent } from './pivot-basic-sample/pivot-grid-basic-sample.component';
import { PivotDatasourceSampleComponent } from './pivot-datasource/pivot-datasource-sample.component';
import { PivotGridNoopSampleComponent } from './pivot-grid-noop/pivot-grid-noop-sample.component';
import { PivotGridsRoutingModule } from './pivot-grids-routing.module';

@NgModule({
    declarations: [
        PivotGridBasicSampleComponent,
        PivotDatasourceSampleComponent,
        PivotGridNoopSampleComponent
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
