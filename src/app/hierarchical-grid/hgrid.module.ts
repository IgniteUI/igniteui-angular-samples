// tslint:disable:max-line-length
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule,
    IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule,
    IgxExcelExporterService, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
    IgxRadioModule, IgxRippleModule, IgxSliderModule, IgxSwitchModule, IgxToastModule, IgxToggleModule, IgxHierarchicalGridModule } from "igniteui-angular";
import { HGridFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HGridSummarySampleComponent } from './hierarchical-grid-summary/hierarchical-grid-summary.component';
import { HGridPagingSampleComponent } from './hierarchical-grid-paging/hierarchical-grid-paging.component';
import { HGridPinningSampleComponent } from './hierarchical-grid-column-pinning/hierarchical-grid-pinning.component';
import { HGridColumnResizingSampleComponent } from './hierarchical-grid-column-resizing/hierarchical-grid-resizing.component';
import { HGridColumnHidingSampleComponent } from './hierarchical-grid-column-hiding/hierarchical-grid-hiding.component';
import { HGridDisplayDensitySampleComponent } from './hierarchical-grid-display-density/hierarchical-grid-density.component';
import { HGridColumnMovingSampleComponent } from './hierarchical-grid-column-moving/hierarchical-grid-moving.component';
import { HGridMultiHeadersSampleComponent } from './hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component';
import { HgridRoutingModule } from './hgrid-routing.module';
// tslint:enable:max-line-length

@NgModule({
    declarations: [
        HGridFilteringSampleComponent,
        HGridSummarySampleComponent,
        HGridPagingSampleComponent,
        HGridPinningSampleComponent,
        HGridColumnResizingSampleComponent,
        HGridColumnHidingSampleComponent,
        HGridDisplayDensitySampleComponent,
        HGridColumnMovingSampleComponent,
        HGridMultiHeadersSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HgridRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxColumnHidingModule,
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
        IgxToggleModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class HGridModule {}
