import { NgModule } from "@angular/core";
import { IgxButtonModule, IgxDividerModule, IgxGridModule, IgxTabsModule, IgxToggleModule } from "igniteui-angular";
import { IgxBarSeriesModule, IgxCategoryChartModule, IgxCategoryXAxisModule,
    IgxDataChartCategoryModule, IgxDataChartComponent, IgxDataChartCoreModule,
    IgxDataChartInteractivityModule, IgxDataChartScatterModule, IgxDataChartStackedModule,
    IgxItemLegendComponent, IgxItemLegendModule, IgxLegendComponent, IgxLegendModule,
    IgxNumericXAxisModule, IgxNumericYAxisModule, IgxPieChartComponent } from "igniteui-angular-charts";
import { IgxPieChartModule } from "igniteui-angular-charts/";
import { IgxChartMenuComponent } from "./context-menu/chart-dialog/chart-dialog.component";
import { IgxContextMenuComponent } from "./context-menu/context-menu.component";
import { IgxContextMenuDirective } from "./context-menu/igx-context-menu.directive";
import { ChartIntegrationDirective } from "./directives/chart-integration/chart-integration.directive";
import { ConditionalFormattingDirective } from "./directives/conditional-formatting/conditional-formatting.directive";
import { GridDynamicChartDataRoutingModule } from "./grid-dynamic-chart-data-routing.module";
import { GridDynamicChartDataComponent } from "./grid-dynamic-chart-data.component";

@NgModule({
    declarations: [
        GridDynamicChartDataComponent,
        ConditionalFormattingDirective,
        ChartIntegrationDirective,
        IgxContextMenuDirective,
        IgxContextMenuComponent,
        IgxChartMenuComponent
    ],
    imports: [
        IgxButtonModule,
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
        IgxPieChartComponent,
        IgxChartMenuComponent
    ]
})
export class GridDynamicChartDataModule {}
