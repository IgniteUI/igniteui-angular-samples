import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule,
    IgxDialogModule, IgxGridModule, IgxIconModule,
    IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule,
    IgxSwitchModule, IgxToastModule, IgxToggleModule, IgxTooltipModule, IgxTreeGridModule } from 'igniteui-angular';
/* eslint-disable max-len */
import { IgxSparklineCoreModule, IgxSparklineModule } from 'igniteui-angular-charts';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';
import { RemoteFilteringService } from './services/remoteFilteringService';
import { TreeGridChilddatakeySampleComponent } from './tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component';
import { TreeGridPrimaryforeignkeySampleComponent } from './tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component';
import { TreeGridDvRoutingModule } from './tree-grid-routing.module';

@NgModule({
    declarations: [
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        TreeGridDvRoutingModule,
        IgxTreeGridModule,
        IgxGridModule,
        IgxButtonGroupModule,
        IgxIconModule,
        IgxSliderModule,
        IgxToggleModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxRippleModule,
        IgxDialogModule,
        IgxRadioModule,
        IgxAvatarModule,
        IgxToastModule,
        IgxSelectModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        IgxBannerModule,
        IgxSnackbarModule,
        IgxTooltipModule
    ],
    providers: [RemoteFilteringService]
})
export class TreeGridDVModule { }
