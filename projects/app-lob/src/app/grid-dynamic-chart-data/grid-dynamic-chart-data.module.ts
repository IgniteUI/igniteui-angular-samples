/* eslint-disable max-len */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IgxExtrasModule } from '@infragistics/igniteui-angular-extras';
import { IgxButtonModule, IgxDialogModule, IgxDividerModule, IgxGridModule, IgxTabsModule } from 'igniteui-angular';
import { IgxBarSeriesModule, IgxCategoryChartModule, IgxCategoryXAxisModule,
         IgxDataChartCategoryModule, IgxDataChartCoreModule,
         IgxDataChartInteractivityModule, IgxDataChartScatterModule,
         IgxDataChartStackedModule, IgxItemLegendModule,
         IgxLegendModule, IgxNumericXAxisModule,
         IgxNumericYAxisModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';
import { DataAnalysisDockManagerComponent, FilterTypePipe, HastDuplicateLayouts, NamePipe } from './data-analysis-dock-manager/data-analysis-dock-manager.component';
import { DockSlotComponent } from './data-analysis-dock-manager/dock-slot/dock-slot.component';
import { ChartHostDirective, ChartIntegrationDirective } from './directives/chart-integration/chart-integration.directive';
import { ConditionalFormattingDirective } from './directives/conditional-formatting/conditional-formatting.directive';
import { GridDynamicChartDataRoutingModule } from './grid-dynamic-chart-data-routing.module';
import { GridDynamicChartDataComponent } from './grid-dynamic-chart-data.component';
@NgModule({
    declarations: [
        GridDynamicChartDataComponent,
        ChartHostDirective,
        ConditionalFormattingDirective,
        ChartIntegrationDirective,
        NamePipe,
        FilterTypePipe,
        DataAnalysisDockManagerComponent,
        DockSlotComponent,
        HastDuplicateLayouts
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
        GridDynamicChartDataRoutingModule,
        IgxExtrasModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridDynamicChartDataModule {}
