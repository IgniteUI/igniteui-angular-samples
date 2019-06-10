// tslint:disable:max-line-length
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule,
    IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule,
    IgxExcelExporterService, IgxExpansionPanelModule, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule,
    IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSwitchModule, IgxToastModule, IgxToggleModule, IgxTooltipModule } from "igniteui-angular";
import { GridBatchEditingSampleComponent } from "./grid-batch-editing/grid-batch-editing-sample.component";
import { GridWithTransactionsComponent } from "./grid-batch-editing/grid-transaction.component";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { GridColumnHidingSampleComponent } from "./grid-column-hiding-sample/grid-column-hiding-sample.component";
import { GridColumnHidingToolbarSampleComponent } from "./grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import {GridCompositeDataComponent} from "./grid-composite-data-binding/grid-composite-data.component";
import { GridConditionalCellStyleComponent } from "./grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCustomFilteringComponent } from "./grid-custom-filtering/grid-custom-filtering.component";
import { GridCustomKBNavigationComponent } from "./grid-custom-kb-navigation/grid-custom-kb-navigation-sample.component";
import { GridDisplayDensitySampleComponent } from "./grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid-editing-sample/grid-editing-sample.component";
import { ExcelStyleFilteringSample1Component } from "./grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component";
import { ExcelStyleFilteringSample2Component } from "./grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component";
import { ExcelStyleFilteringSample3Component } from "./grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component";
import { FilteringSampleComponent } from "./grid-filtering-sample/grid-filtering-sample.component";
import { FilteringTemplateSampleComponent } from "./grid-filtering-template-sample/grid-filtering-template-sample.component";
import { GridGroupBySampleComponent } from "./grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupBySummarySampleComponent } from "./grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "./grid-moving-sample/grid-moving-sample.component";
import { GridMultiCellSelectionComponent } from "./grid-multi-cell-selection/grid-multi-cell-selection.component";
import { GridMultiRowLayoutComponent } from "./grid-multi-row-layout/grid-multi-row-layout.component";
import { GridNestedDataBindComponent } from "./grid-nested-data-binding/grid-nested-data-bind";
import { PagingSampleComponent } from "./grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid-paste/grid-paste-sample.component";
import { PasteHandler } from "./grid-paste/paste-handler.directive";
import { RemoteFilteringSampleComponent } from "./grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid-resizing-sample/grid-resizing-sample.component";
import { GridDragBaseSampleComponent } from "./grid-row-drag-base/grid-row-drag-base.component";
import { GridDragToGridSampleComponent } from "./grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import { GridDragSampleComponent } from "./grid-row-drag/grid-row-drag.component";
import { PlanetComponent } from "./grid-row-drag/planet/planet.component";
import { GridRowEditSampleComponent } from "./grid-row-editing-sample/grid-row-editing-sample.component";
import { FinancialSampleComponent } from "./grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid-sample-selection/grid-selection.component";
import { AboutComponent } from "./grid-save-state/about.component";
import { GridSaveStateComponent } from "./grid-save-state/grid-state.component";
import { IgxGridStateDirective } from "./grid-save-state/state.directive";
import { GridSearchSampleComponent } from "./grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "./grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridsRoutingModule } from "./grids-routing.module";
import { GridMultiColumnHeadersComponent } from "./multi-column-headers/multi-column-headers";
import { DataService } from "./services/data.service";

import { CustomGridPagingStyleSample } from "./custom-grid-paging-style/custom-grid-paging-style.component";
import { GridMRLCustomNavigationComponent } from "./grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";
// tslint:enable:max-line-length

@NgModule({
    declarations: [
        GridWithTransactionsComponent,
        GridBatchEditingSampleComponent,
        GridColumnHidingSampleComponent,
        GridColumnHidingToolbarSampleComponent,
        GridConditionalCellStyleComponent,
        GridCustomFilteringComponent,
        GridDisplayDensitySampleComponent,
        GridEditingSampleComponent,
        ExcelStyleFilteringSample1Component,
        ExcelStyleFilteringSample2Component,
        ExcelStyleFilteringSample3Component,
        FilteringSampleComponent,
        FilteringTemplateSampleComponent,
        GridGroupBySampleComponent,
        GridGroupBySummarySampleComponent,
        GridMovingSampleComponent,
        PagingSampleComponent,
        GridPasteSampleComponent,
        RemoteFilteringSampleComponent,
        RemotePagingGridSample,
        ResizingSampleComponent,
        GridRowEditSampleComponent,
        FinancialSampleComponent,
        GridSample3Component,
        GridRemoteVirtualizationSampleComponent,
        PinningSampleComponent,
        GridSelectionSampleComponent,
        GridSearchSampleComponent,
        SortingSampleComponent,
        GridToolbarSample1Component,
        GridToolbarSample2Component,
        GridToolbarSample3Component,
        GridToolbarSample4Component,
        GridMultiColumnHeadersComponent,
        GridComponent,
        PasteHandler,
        GridCustomKBNavigationComponent,
        GridSaveStateComponent,
        AboutComponent,
        IgxGridStateDirective,
        GridMultiCellSelectionComponent,
        GridNestedDataBindComponent,
        GridCompositeDataComponent,
        GridMultiRowLayoutComponent,
        GridDragSampleComponent,
        PlanetComponent,
        GridDragBaseSampleComponent,
        GridDragToGridSampleComponent,
        GridMRLCustomNavigationComponent,
        CustomGridPagingStyleSample
    ],
    imports: [
        CommonModule,
        FormsModule,
        GridsRoutingModule,
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
        IgxSelectModule
    ],
    providers: [
        DataService,
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class GridsModule {}
