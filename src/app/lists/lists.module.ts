import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCardModule,
    IgxComboModule,
    IgxFilterModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSimpleComboModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxTreeModule,
    IgxProgressBarModule,
    IgxIconButtonDirective
} from 'igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { ComboBindingComponent } from './combo/combo-binding/combo-binding.component';
import { ComboFeaturesComponent } from './combo/combo-features/combo-features.component';
import { ComboMainComponent } from './combo/combo-main/combo-main.component';
import { ComboOverlayComponent } from './combo/combo-overlay/combo-overlay.component';
import { ComboRemoteComponent } from './combo/combo-remote/combo-remote.component';
import { ComboStylingComponent } from './combo/combo-styling/combo-styling.component';
import { ComboValueKeyComponent } from './combo/combo-valuekey/combo-valuekey.component';
import { ComboTemplateComponent } from './combo/combo-template/combo-template.component';
import { ListChatSampleComponent } from './list/list-chat-sample/list-chat-sample.component';
import { ListSample1Component } from './list/list-sample-1/list-sample-1.component';
import { ListSample2Component } from './list/list-sample-2/list-sample-2.component';
import { ListSample3Component } from './list/list-sample-3/list-sample-3.component';
import { ListSample4Component } from './list/list-sample-4/list-sample-4.component';
import { ListSample5Component } from './list/list-sample-5/list-sample-5.component';
import { ListSample6Component } from './list/list-sample-6/list-sample-6.component';
import { ListSample7Component } from './list/list-sample-7/list-sample-7.component';
import { ListSample8Component } from './list/list-sample-8/list-sample-8.component';
import { ListComponent } from './list/list.component';
import { ListsRoutingModule } from './lists-routing.module';
import { TreeBasicSampleComponent } from './tree/tree-basic-sample/tree-basic-sample.component';
import { TreeAdvancedSampleComponent } from './tree/tree-advanced-sample/tree-advanced-sample.component';
import { SimpleComboMainComponent } from './combo/simple-combo-main/simple-combo-main.component';
import { SimpleComboUsageComponent } from './combo/simple-combo-usage/simple-combo-usage.component';
import { SimpleComboCascadingComponent } from './combo/simple-combo-cascading/simple-combo-cascading.component';
import { SimpleComboStylingComponent } from './combo/simple-combo-styling/simple-combo-styling.component';
import { ListItemSelectionComponent } from './list/list-item-selection/list-item-selection.component';
import { SimpleComboRemoteComponent } from './combo/simple-combo-remote/simple-combo-remote.component';

@NgModule({ declarations: [
        ListComponent,
        ListSample1Component,
        ListSample2Component,
        ListSample3Component,
        ListSample4Component,
        ListSample5Component,
        ListSample6Component,
        ListSample7Component,
        ListSample8Component,
        ListChatSampleComponent,
        ComboFeaturesComponent,
        ComboStylingComponent,
        ComboValueKeyComponent,
        ComboMainComponent,
        ComboRemoteComponent,
        ComboTemplateComponent,
        ComboOverlayComponent,
        ComboBindingComponent,
        SimpleComboMainComponent,
        SimpleComboUsageComponent,
        SimpleComboCascadingComponent,
        SimpleComboStylingComponent,
        TreeBasicSampleComponent,
        TreeAdvancedSampleComponent,
        ListItemSelectionComponent,
        SimpleComboRemoteComponent
    ], imports: [CommonModule,
        FormsModule,
        ListsRoutingModule,
        IgxAvatarModule,
        IgxFilterModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxListModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxComboModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxButtonGroupModule,
        IgxRippleModule,
        IgxCardModule,
        IgxTreeModule,
        IgxTooltipModule,
        IgxFinancialChartModule,
        IgxSimpleComboModule,
        IgxProgressBarModule,
        IgxIconButtonDirective], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ListsModule { }
