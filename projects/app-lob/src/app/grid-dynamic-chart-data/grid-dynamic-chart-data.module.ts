import { NgModule } from "@angular/core";
import {
    IgxButtonGroupModule, IgxButtonModule,
    IgxDialogModule, IgxDividerModule,
    IgxGridModule, IgxTabsModule
} from "igniteui-angular";
import { IgxBarSeriesModule} from "igniteui-angular-charts/ES5/igx-bar-series-module";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxIndicatorsModule } from "igniteui-angular-charts/ES5/igx-indicators-module";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import {IgxItemLegendModule} from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxPieChartComponent} from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxPieChartModule} from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import {
    ChartHostDirective,
    ChartIntegrationDirective
} from "./directives/chart-integration/chart-integration.directive";
import { ConditionalFormattingDirective } from "./directives/conditional-formatting/conditional-formatting.directive";
import { GridDynamicChartDataRoutingModule } from "./grid-dynamic-chart-data-routing.module";
import { FilterTypePipe, GridDynamicChartDataComponent, NamePipe } from "./grid-dynamic-chart-data.component";

@NgModule({
    declarations: [
        GridDynamicChartDataComponent,
        ChartHostDirective,
        ConditionalFormattingDirective,
        ChartIntegrationDirective,
        NamePipe,
        FilterTypePipe
    ],
    imports: [
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxGridModule,
        IgxTabsModule,
        IgxDataChartCategoryModule,
        IgxDataChartCoreModule,
        IgxLegendModule,
        IgxIndicatorsModule,
        IgxFinancialPriceSeriesModule,
        IgxDataChartInteractivityModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxCategoryXAxisModule,
        IgxDoughnutChartModule,
        IgxItemLegendModule,
        IgxPieChartModule,
        IgxDataChartStackedModule,
        IgxDividerModule,
        IgxDataChartScatterModule,
        IgxBarSeriesModule,
        IgxCategoryChartModule,
        GridDynamicChartDataRoutingModule
    ],
    providers: [],
    entryComponents: [
        IgxDoughnutChartComponent,
        IgxDataChartComponent,
        IgxCategoryXAxisComponent,
        IgxNumericYAxisComponent,
        IgxItemLegendComponent,
        IgxLegendComponent,
        IgxNumericXAxisComponent,
        IgxPieChartComponent
    ]
})
export class GridDynamicChartDataModule {}
