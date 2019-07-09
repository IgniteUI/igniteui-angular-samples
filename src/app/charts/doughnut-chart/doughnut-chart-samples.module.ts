/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
// tslint:disable:member-ordering

import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxRingSeriesModule } from "igniteui-angular-charts/ES5/igx-ring-series-module";

import { DoughnutChartExplosionSampleComponent } from "./doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import { DoughnutChartLegendComponent } from "./doughnut-chart-legend/doughnut-chart-legend.component";
import { DoughnutChartOverviewSampleComponent } from "./doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import { DoughnutChartRingsComponent } from "./doughnut-chart-rings/doughnut-chart-rings.component";
import { DoughnutChartSelectionSampleComponent } from "./doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";

@NgModule({
    declarations: [
        DoughnutChartExplosionSampleComponent,
        DoughnutChartOverviewSampleComponent,
        DoughnutChartSelectionSampleComponent,
        DoughnutChartLegendComponent,
        DoughnutChartRingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxDoughnutChartModule,
        IgxRingSeriesModule,
        IgxItemLegendModule,
        IgxLegendModule
     ]
})
export class DoughnutChartSamplesModule {}
