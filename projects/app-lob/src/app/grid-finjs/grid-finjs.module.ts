import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxButtonModule, IgxDialogModule, IgxGridModule,
    IgxSliderModule, IgxSwitchModule, IgxToastModule
} from 'igniteui-angular';
import {
    IgxBollingerBandsOverlayModule, IgxCategoryChartModule, IgxCategoryXAxisModule,
    IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartInteractivityModule, IgxFinancialPriceSeriesModule,
    IgxIndicatorsModule, IgxLegendModule, IgxNumericXAxisModule, IgxNumericYAxisModule
} from 'igniteui-angular-charts';
import { FinJSDemoComponent } from './main.component';
import { GridFinjsRoutingModule } from './grid-finjs-routing.module';
import { GridFinJSComponent } from './grid-finjs.component';
import { ControllerComponent } from './controllers.component';
import { FinancialDataService } from '../services/financial.service';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';

@NgModule({
    declarations: [
        FinJSDemoComponent,
        GridFinJSComponent,
        ControllerComponent
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
        IgxDialogModule,
        IgxToastModule
    ],
    providers: [FinancialDataService]
})
export class GridFinjsModule { }
