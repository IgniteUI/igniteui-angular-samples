import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxDialogModule,
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
import { TreeGridEmployeesSampleComponent } from "./tree-grid-employees/tree-grid-employees-sample.component";
import { TreeGridFinJSComponent } from "./tree-grid-finjs/tree-grid-finjs-sample.component";
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

@NgModule({
    declarations: [
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent,
        TreeGridRowEditSampleComponent,
        TreeGridBatchEditingSampleComponent,
        TreeGridFinJSComponent,
        TreeGridEmployeesSampleComponent,
        TreeGridSearchSampleComponent,
        TreeGridColumnHidingSampleComponent,
        TreeGridColumnHidingToolbarSampleComponent,
        TreeGridSelectionSampleComponent,
        TreeGridEmployeesSampleComponent,
        TreeGridSortingSampleComponent,
        TreeGridContextmenuComponent,
        TreeGridColumnMovingSampleComponent,
        TreeGridColumnPinningSampleComponent
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
        IgxRadioModule
    ]
})
export class TreeGridModule { }
