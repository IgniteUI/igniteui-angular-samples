import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule} from "@angular/material";
import { IgxButtonModule, IgxExcelExporterService, IgxGridModule,
    IgxSliderModule, IgxSwitchModule } from "igniteui-angular";
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
import { ContextDialogWithChartComponent
} from "./context-dialog-with-chart/context-dialog-with-chart.component";
import { FinJSDemoComponent} from "./grid-finjs-demo.component";
import { GridFinjsRoutingModule } from "./grid-finjs-routing.module";
import { LocalDataService } from "./localData.service";

@NgModule({
    declarations: [
        FinJSDemoComponent, ContextDialogWithChartComponent
    ],
    imports: [

        CommonModule,
        FormsModule,
        IgxButtonModule,
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
        IgxCategoryXAxisModule,
        MatDialogModule,
        IgxSwitchModule,
        IgxSliderModule,
        GridFinjsRoutingModule,
        IgxGridModule
    ],
    entryComponents: [
        ContextDialogWithChartComponent
    ],

    providers: [LocalDataService, IgxExcelExporterService]
})
export class GridFinjsModule {}
