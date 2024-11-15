/* eslint-disable max-len */
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxCheckboxModule,
    IgxChipsModule, IgxComboModule, IgxDatePickerModule,
    IgxDialogModule, IgxDividerModule, IgxExpansionPanelModule, IgxFocusModule, IgxGridModule,
    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule,
    IgxSwitchModule, IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule
} from 'igniteui-angular';

import { GridComponent } from './grid-boston-marathon/grid.component';
import { GridMasterDetailSampleComponent } from './grid-master-detail/grid-master-detail.component';

import { IgxBarSeriesModule, IgxBollingerBandsOverlayModule, IgxCategoryChartModule, IgxCategoryXAxisModule, IgxDataChartCategoryModule,
    IgxDataChartCoreModule, IgxDataChartInteractivityModule, IgxDataChartScatterModule, IgxDataChartStackedModule,
    IgxDoughnutChartModule, IgxFinancialPriceSeriesModule, IgxIndicatorsModule, IgxItemLegendModule,
    IgxLegendModule, IgxNumericXAxisModule, IgxNumericYAxisModule,
    IgxPieChartModule, IgxRingSeriesModule, IgxSparklineCoreModule, IgxSparklineModule
} from 'igniteui-angular-charts';
import { GridsDVRoutingModule } from './grids-routing.module';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        GridsDVRoutingModule,
        IgxPreventDocumentScrollModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxBannerModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxFocusModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxTooltipModule,
        IgxExpansionPanelModule,
        IgxSelectModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        IgxSnackbarModule,
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
        IgxDoughnutChartModule,
        IgxRingSeriesModule,
        IgxItemLegendModule,
        IgxPieChartModule,
        IgxTabsModule,
        IgxDataChartStackedModule,
        IgxCardModule,
        IgxDividerModule,
        IgxDataChartScatterModule,
        IgxBarSeriesModule,
        IgxCategoryChartModule, GridComponent,
        GridMasterDetailSampleComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class GridsDVModule { }
