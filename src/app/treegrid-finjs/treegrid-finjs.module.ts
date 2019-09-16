import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxDialogModule, IgxExcelExporterService,
    IgxSliderModule, IgxSwitchModule, IgxTreeGridModule } from "igniteui-angular";
import { IgxBollingerBandsOverlayModule } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
    // scatter series' modules:
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxIndicatorsModule } from "igniteui-angular-charts/ES5/igx-indicators-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { LocalDataService } from "../grid-finjs/localData.service";
import { TreeGridFinJSComponent } from "./tree-grid-finjs-sample.component";
import { TreeGridGroupingPipe } from "./tree-grid-grouping.pipe";
import { TreeGridFinjsRoutingModule } from "./treegrid-finjs-routing.module";

@NgModule({
    declarations: [
        TreeGridFinJSComponent,
        TreeGridGroupingPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        TreeGridFinjsRoutingModule,
        IgxTreeGridModule,
        IgxDialogModule,
        IgxCategoryChartModule,
        IgxDataChartCategoryModule,
        IgxDataChartCoreModule,
        IgxLegendModule,
        IgxIndicatorsModule,
        IgxFinancialPriceSeriesModule,
        IgxDataChartInteractivityModule,
        IgxBollingerBandsOverlayModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxCategoryXAxisModule
    ],
    providers: [LocalDataService, IgxExcelExporterService]
})
export class TreeGridFinjsModule {}
