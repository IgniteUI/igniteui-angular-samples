import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { IgxButtonModule, IgxDialogModule, IgxDividerModule, IgxGridModule, IgxTabsModule } from "igniteui-angular";
import { IgxBarSeriesModule, IgxCategoryChartModule, IgxCategoryXAxisModule,
         IgxDataChartCategoryModule, IgxDataChartComponent, IgxDataChartCoreModule,
         IgxDataChartInteractivityModule, IgxDataChartScatterModule,
         IgxDataChartStackedModule, IgxItemLegendComponent, IgxItemLegendModule,
         IgxLegendComponent, IgxLegendModule, IgxNumericXAxisModule,
         IgxNumericYAxisModule, IgxPieChartComponent } from "igniteui-angular-charts";
import { IgxPieChartModule } from "igniteui-angular-charts/";
import { IgxPreventDocumentScrollModule } from "../directives/prevent-scroll.directive";
import { DataAnalysisDockManagerComponent } from "./data-analysis-dock-manager/data-analysis-dock-manager.component";
// tslint:disable-next-line: max-line-length
import { ChartHostDirective, ChartIntegrationDirective } from "./directives/chart-integration/chart-integration.directive";
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
        FilterTypePipe,
        DataAnalysisDockManagerComponent
    ],
    imports: [
        IgxButtonModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxGridModule,
        IgxPreventDocumentScrollModule,
        IgxTabsModule,
        IgxDataChartCategoryModule,
        IgxDataChartCoreModule,
        IgxLegendModule,
        IgxDataChartInteractivityModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxCategoryXAxisModule,
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [
        IgxDataChartComponent,
        IgxItemLegendComponent,
        IgxLegendComponent,
        IgxPieChartComponent
    ]
})
export class GridDynamicChartDataModule {}
