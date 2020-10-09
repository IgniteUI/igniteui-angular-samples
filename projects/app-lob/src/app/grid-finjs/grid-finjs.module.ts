import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxButtonModule, IgxDialogModule, IgxExcelExporterService, IgxGridModule,
    IgxSliderModule, IgxSwitchModule
} from "igniteui-angular";
import {
    IgxBollingerBandsOverlayModule, IgxCategoryChartModule, IgxCategoryXAxisModule,
    IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartInteractivityModule, IgxFinancialPriceSeriesModule,
    IgxIndicatorsModule, IgxLegendModule, IgxNumericXAxisModule, IgxNumericYAxisModule
} from "igniteui-angular-charts";
import { IgxPreventDocumentScrollModule } from "../directives/prevent-scroll.directive";
import { FinJSDemoComponent } from "./grid-finjs-demo.component";
import { GridFinjsRoutingModule } from "./grid-finjs-routing.module";
import { LocalDataService } from "./localData.service";
import { GridFinjsPartialComponent } from './partial/grid-finjs-partial.component';

@NgModule({
    declarations: [
        FinJSDemoComponent,
        GridFinjsPartialComponent
    ],
    imports: [
        IgxPreventDocumentScrollModule,
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
        IgxSwitchModule,
        IgxSliderModule,
        GridFinjsRoutingModule,
        IgxGridModule,
        IgxDialogModule
    ],
    providers: [LocalDataService, IgxExcelExporterService]
})
export class GridFinjsModule { }
