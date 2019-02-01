import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxDialogModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxTreeGridModule
} from "igniteui-angular";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridColumnHidingSampleComponent
} from "./tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";
import {
    TreeGridColumnHidingToolbarSampleComponent
} from "./tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component";
import {
    TreeGridColumnMovingSampleComponent
} from "./tree-grid-column-moving-sample/tree-grid-column-moving-sample.component";
import {
    TreeGridColumnPinningSampleComponent
} from "./tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component";
import {
    TreeGridColumnResizingSampleComponent
} from "./tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component";
import {
    TreeGridDisplaydensitySampleComponent
} from "./tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component";
import { TreeGridEmployeesSampleComponent } from "./tree-grid-employees/tree-grid-employees-sample.component";
import { TreeGridFilteringSampleComponent } from "./tree-grid-filtering-sample/tree-grid-filtering-sample.component";
import {
    TreeGridMultiColumnHeadersSampleComponent
} from "./tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRoutingModule } from "./tree-grid-routing.module";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridSearchSampleComponent } from "./tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "./tree-grid-selection-sample/tree-grid-selection-sample.component";
import {
    TreeGridContextmenuComponent
} from "./tree-grid-sorting/tree-grid-contextmenu/tree-grid-contextmenu.component";
import { TreeGridSortingSampleComponent } from "./tree-grid-sorting/tree-grid-sorting-sample.component";
import {
    TreeGridToolbarSample1Component
} from "./tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component";
import {
    TreeGridVirtualizationSampleComponent
} from "./tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";

@NgModule({
    declarations: [
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent,
        TreeGridRowEditSampleComponent,
        TreeGridBatchEditingSampleComponent,
        TreeGridEmployeesSampleComponent,
        TreeGridSearchSampleComponent,
        TreeGridColumnHidingSampleComponent,
        TreeGridColumnHidingToolbarSampleComponent,
        TreeGridSelectionSampleComponent,
        TreeGridEmployeesSampleComponent,
        TreeGridSortingSampleComponent,
        TreeGridContextmenuComponent,
        TreeGridColumnMovingSampleComponent,
        TreeGridColumnPinningSampleComponent,
        TreeGridColumnResizingSampleComponent,
        TreeGridFilteringSampleComponent,
        TreeGridMultiColumnHeadersSampleComponent,
        TreeGridVirtualizationSampleComponent,
        TreeGridDisplaydensitySampleComponent,
        TreeGridToolbarSample1Component
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
        IgxAvatarModule
    ],
    providers: [IgxExcelExporterService, IgxCsvExporterService]
})
export class TreeGridModule { }
