import { NgModule } from "@angular/core";
import { IgxButtonModule, IgxDialogModule, IgxDividerModule,
            IgxGridModule, IgxTabsModule, IgxToggleModule } from "igniteui-angular";
import { IgxBarSeriesModule, IgxCategoryChartModule, IgxCategoryXAxisModule,
    IgxDataChartCategoryModule, IgxDataChartComponent, IgxDataChartCoreModule,
    IgxDataChartInteractivityModule, IgxDataChartScatterModule, IgxDataChartStackedModule,
    IgxItemLegendComponent, IgxItemLegendModule, IgxLegendComponent, IgxLegendModule,
    IgxNumericXAxisModule, IgxNumericYAxisModule, IgxPieChartComponent } from "igniteui-angular-charts";
import { IgxPieChartModule } from "igniteui-angular-charts/";
import { IgxContextMenuComponent } from "./context-menu/context-menu.component";
import { ChartHostDirective,
    ChartIntegrationDirective } from "./directives/chart-integration/chart-integration.directive";
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
        IgxContextMenuComponent
    ],
    imports: [
        IgxButtonModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxGridModule,
        IgxTabsModule,
        IgxToggleModule,
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
    entryComponents: [
        IgxDataChartComponent,
        IgxItemLegendComponent,
        IgxLegendComponent,
        IgxPieChartComponent
    ]
})
export class GridDynamicChartDataModule {}
