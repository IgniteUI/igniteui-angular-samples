/* eslint-disable max-len */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule, IgxComboModule, IgxDatePickerModule, IgxDialogModule, IgxFocusModule, IgxGridModule, IgxHierarchicalGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule, IgxSwitchModule, IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule } from 'igniteui-angular';
import { IgxPieChartModule, IgxSparklineCoreModule, IgxSparklineModule } from 'igniteui-angular-charts';
import { IgxPreventDocumentScrollModule } from '../directives/prevent-scroll.directive';
import { HGridColumnResizingSampleComponent } from './hierarchical-grid-column-resizing/hierarchical-grid-resizing.component';
import { HierarchicalGridDVRoutingModule } from './hierarchical-grid-routing.module';

@NgModule({
    declarations: [
        HGridColumnResizingSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        HttpClientModule,
        HierarchicalGridDVRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxFocusModule,
        IgxGridModule,
        IgxHierarchicalGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxSelectModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        IgxBannerModule,
        IgxSnackbarModule,
        IgxTooltipModule,
        IgxTabsModule,
        IgxPieChartModule
    ]
})
export class HierarchicalGridDVModule { }
