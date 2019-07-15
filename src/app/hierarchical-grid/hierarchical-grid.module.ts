/* tslint:disable:max-line-length */
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule,
    IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule,
    IgxExcelExporterService, IgxFocusModule, IgxGridModule, IgxHierarchicalGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
    IgxRadioModule, IgxRippleModule, IgxSliderModule, IgxSwitchModule, IgxToastModule, IgxToggleModule
} from "igniteui-angular";
import { HGridBatchEditingSampleComponent } from "./hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HierarchicalGridWithTransactionsComponent } from "./hierarchical-grid-batch-editing/hierarchical-grid-transactions.component";
import { HierarchicalGridColumnHidingToolbarStyleComponent } from "./hierarchical-grid-column-hiding-toolbar-style/hierarchical-grid-column-hiding-toolbar-style.component";
import { HGridCostumHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component";
import { HGridColumnHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";
import { HGridColumnMovingSampleComponentStyled } from "./hierarchical-grid-column-moving-styled/hierarchical-grid-moving-styled.component";
import { HGridColumnMovingSampleComponent } from "./hierarchical-grid-column-moving/hierarchical-grid-moving.component";
import { HGridPinningSampleComponent } from "./hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";
import { HGridColumnResizingSampleComponent } from "./hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { HGridCustomKBNavigationComponent } from "./hierarchical-grid-custom-kb-navigation/hierarchical-grid-custom-kb-navigation-sample.component";
import { HGridDisplayDensitySampleComponent } from "./hierarchical-grid-display-density/hierarchical-grid-density.component";
import { HGridEditingSampleComponent } from "./hierarchical-grid-editing/hierarchical-grid-editing.component";
import {
    HGridExcelStyleFilteringSample1Component
} from "./hierarchical-grid-excel-style-filtering-sample-1/hierarchical-grid-excel-style-filtering-sample-1.component";
import {
    HGridExcelStyleFilteringSample2Component
} from "./hierarchical-grid-excel-style-filtering-sample-2/hierarchical-grid-excel-style-filtering-sample-2.component";
import {
    HGridExcelStyleFilteringSample3Component
} from "./hierarchical-grid-excel-style-filtering-sample-3/hierarchical-grid-excel-style-filtering-sample-3.component";
import { HGridFilteringTemplateSampleComponent } from "./hierarchical-grid-filtering-template/hierarchical-grid-filtering-template.component";
import { HGridCustomFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component";
import { HGridFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HGridMultiCellStyleComponent } from "./hierarchical-grid-multi-cell-style/hierarchical-grid-multi-cell-style.component";
import { HGridMultiHeadersSampleComponent } from "./hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component";
import { HGridPagingStyleSampleComponent } from "./hierarchical-grid-paging-style/hierarchical-grid-paging-style.component";
import { HGridPagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-paging.component";
import { HGridRemotePagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import { HGridResizeLineStylingComponent } from "./hierarchical-grid-resize-line-styling/hierarchical-grid-resize-line-styling.component";
import { HierarchicalGridRoutingModule } from "./hierarchical-grid-routing.module";
import { HGridRowDragBaseComponent } from "./hierarchical-grid-row-drag-base/hierarchical-row-drag-base.component";
import { HGridDragSampleComponent } from "./hierarchical-grid-row-drag/hierarchical-grid-row-drag.component";
import { HGridRowEditingSampleComponent } from "./hierarchical-grid-row-editing/hierarchical-grid-row-editing.component";
import { HGridRowReorderComponent } from "./hierarchical-grid-row-reorder/hierarchical-grid-row-reorder.component";
import { HGridSelectionSampleComponent } from "./hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridContextmenuComponent } from "./hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component";
import { HGridSortingSampleComponent } from "./hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridSummarySampleComponent } from "./hierarchical-grid-summary/hierarchical-grid-summary.component";
import { HGridToolbarCustomSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component";
import { HGridToolbarOptionsSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { HGridToolbarTitleSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component";

@NgModule({
    declarations: [
        HGridFilteringSampleComponent,
        HGridCustomFilteringSampleComponent,
        HGridSortingSampleComponent,
        HGridContextmenuComponent,
        HGridSelectionSampleComponent,
        HGridSummarySampleComponent,
        HGridPagingSampleComponent,
        HGridPagingStyleSampleComponent,
        HGridRemotePagingSampleComponent,
        HGridPinningSampleComponent,
        HGridColumnResizingSampleComponent,
        HGridColumnHidingSampleComponent,
        HGridCostumHidingSampleComponent,
        HGridDisplayDensitySampleComponent,
        HGridColumnMovingSampleComponentStyled,
        HGridColumnMovingSampleComponent,
        HGridMultiCellStyleComponent,
        HGridMultiHeadersSampleComponent,
        HGridToolbarTitleSampleComponent,
        HGridToolbarOptionsSampleComponent,
        HGridToolbarCustomSampleComponent,
        HGridRowEditingSampleComponent,
        HGridEditingSampleComponent,
        HGridBatchEditingSampleComponent,
        HierarchicalGridWithTransactionsComponent,
        HierarchicalGridLoDSampleComponent,
        HGridExcelStyleFilteringSample1Component,
        HGridExcelStyleFilteringSample2Component,
        HGridExcelStyleFilteringSample3Component,
        HGridFilteringTemplateSampleComponent,
        HGridDragSampleComponent,
        HGridRowDragBaseComponent,
        HGridCustomKBNavigationComponent,
        HGridRowReorderComponent,
        HGridResizeLineStylingComponent,
        HierarchicalGridColumnHidingToolbarStyleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HierarchicalGridRoutingModule,
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
export class HierarchicalGridModule { }
