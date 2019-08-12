/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxButtonModule } from "igniteui-angular";
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxPieChartModule } from "igniteui-angular-charts/ES5/igx-pie-chart-module";

import { PieChartDataSampleComponent } from "./pie-chart-overview/pie-chart-overview.component";
import { PieChartExplosionComponent } from "./pie-chart-explosion/pie-chart-explosion.component";
import { PieChartLegendComponent } from "./pie-chart-legend/pie-chart-legend.component";
import { PieChartOthersComponent } from "./pie-chart-others/pie-chart-others.component";
import { PieChartSelectionComponent } from "./pie-chart-selection/pie-chart-selection.component";

@NgModule({
    declarations: [
        PieChartDataSampleComponent,
        PieChartExplosionComponent,
        PieChartLegendComponent,
        PieChartOthersComponent,
        PieChartSelectionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxPieChartModule,
        IgxItemLegendModule,
        IgxLegendModule
     ]
})
export class PieChartSamplesModule {}
