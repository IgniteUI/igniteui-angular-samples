import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxDoughnutChartDefaultTooltipsComponent
} from "igniteui-angular-charts/ES5/igx-doughnut-chart-default-tooltips-component";

import { IgxDoughnutChartInteractivityModule
} from "igniteui-angular-charts/ES5/igx-doughnut-chart-interactivity-module";
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxRingSeriesModule } from "igniteui-angular-charts/ES5/igx-ring-series-module";

import {
    DoughnutChartExplosionSampleComponent
} from "./doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import {
    DoughnutChartOverviewSampleComponent
} from "./doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import {
    DoughnutChartSelectionSampleComponent
} from "./doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";

@NgModule({
    declarations: [
        DoughnutChartExplosionSampleComponent,
        DoughnutChartOverviewSampleComponent,
        DoughnutChartSelectionSampleComponent       
        ],
    imports: [
        CommonModule,
        FormsModule,
        IgxDoughnutChartInteractivityModule,
        IgxDoughnutChartModule,        
        IgxRingSeriesModule
        
     ]
})
export class DoughnutChartSamplesModule {}
