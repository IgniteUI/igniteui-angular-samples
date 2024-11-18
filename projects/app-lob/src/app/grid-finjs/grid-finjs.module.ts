import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxButtonGroupModule,
    IgxButtonModule, IgxDialogModule, IgxFocusModule, IgxGridModule,
    IgxIconModule,
    IgxSelectModule,
    IgxSliderModule, IgxSwitchModule, IgxToastModule, IgxToggleModule
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
import { IgxPreventDocumentScrollDirective } from '../../../../../src/app/directives/prevent-scroll.directive';

@NgModule({
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
        IgxSwitchModule,
        IgxSliderModule,
        GridFinjsRoutingModule,
        IgxGridModule,
        IgxDialogModule,
        IgxToastModule,
        IgxIconModule,
        IgxSelectModule,
        IgxToggleModule,
        IgxFocusModule,
        IgxButtonGroupModule,
        FinJSDemoComponent,
        GridFinJSComponent,
        IgxPreventDocumentScrollDirective,
        ControllerComponent
    ],
    providers: [FinancialDataService]
})
export class GridFinjsModule { }
