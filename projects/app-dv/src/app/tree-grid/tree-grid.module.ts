import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxBannerModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxDialogModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTooltipModule,
    IgxTreeGridModule
} from "igniteui-angular";
// tslint:disable:max-line-length
import { IgxSparklineCoreModule} from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule} from "igniteui-angular-charts/ES5/igx-sparkline-module";
import { RemoteFilteringService } from "./services/remoteFilteringService";

import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRoutingModule } from "./tree-grid-routing.module";

@NgModule({
    declarations: [
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TreeGridRoutingModule,
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
    providers: [IgxExcelExporterService, IgxCsvExporterService, RemoteFilteringService]
})
export class TreeGridModule { }
