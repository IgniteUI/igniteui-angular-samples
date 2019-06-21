// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridBatchEditingSampleComponent } from "./grid-batch-editing/grid-batch-editing-sample.component";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { GridColumnHidingSampleComponent } from "./grid-column-hiding-sample/grid-column-hiding-sample.component";
import { GridColumnHidingToolbarSampleComponent } from "./grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridCompositeDataComponent } from "./grid-composite-data-binding/grid-composite-data.component";
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
import { GridMovingStyledSampleComponent } from "./grid-moving-styled-sample/grid-moving-styled-sample.component";
import { GridMovingSampleComponent } from "./grid-moving-sample/grid-moving-sample.component";
import { GridMultiCellSelectionComponent } from "./grid-multi-cell-selection/grid-multi-cell-selection.component";
import { GridMultiRowLayoutConfigurationComponent } from "./grid-multi-row-layout-configuration/grid-multi-row-layout-configuration.component";
import { GridMultiRowLayoutComponent } from "./grid-multi-row-layout/grid-multi-row-layout.component";
import { GridNestedDataBindComponent } from "./grid-nested-data-binding/grid-nested-data-bind";
import { PagingSampleComponent } from "./grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid-paste/grid-paste-sample.component";
import { RemoteFilteringSampleComponent } from "./grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid-resizing-sample/grid-resizing-sample.component";
import { gridsRoutesData } from "./grid-routes-data";
import { GridDragBaseSampleComponent } from "./grid-row-drag-base/grid-row-drag-base.component";
import { GridDragToGridSampleComponent } from "./grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import { GridDragSampleComponent } from "./grid-row-drag/grid-row-drag.component";
import { GridRowEditSampleComponent } from "./grid-row-editing-sample/grid-row-editing-sample.component";
import { GridRowReorderComponent } from "./grid-row-reorder-sample/grid-row-reorder";
import { FinancialSampleComponent } from "./grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid-sample-selection/grid-selection.component";
import { AboutComponent } from "./grid-save-state/about.component";
import { GridSaveStateComponent } from "./grid-save-state/grid-state.component";
import { GridSearchSampleComponent } from "./grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "./grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridMultiColumnHeadersComponent } from "./multi-column-headers/multi-column-headers";

import { GridMRLCustomNavigationComponent } from "./grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";
// tslint:enable:max-line-length

export const gridsRoutes: Routes = [
    {
        component: GridComponent,
        // tslint:disable-next-line:no-string-literal
        data: gridsRoutesData["grid"],
        path: "grid"
    },
    {
        component: GridSample3Component,
        data: gridsRoutesData["grid-summary"],
        path: "grid-summary"
    },
    {
        component: GridGroupBySampleComponent,
        data: gridsRoutesData["grid-groupby"],
        path: "grid-groupby"
    },
    {
        component: GridGroupBySummarySampleComponent,
        data: gridsRoutesData["grid-groupby-summary"],
        path: "grid-groupby-summary"
    },
    {
        component: GridEditingSampleComponent,
        data: gridsRoutesData["grid-editing"],
        path: "grid-editing"
    },
    {
        component: GridRowEditSampleComponent,
        data: gridsRoutesData["grid-row-editing"],
        path: "grid-row-editing"
    },
    {
        component: GridDragSampleComponent,
        data: gridsRoutesData["grid-row-drag"],
        path: "grid-row-drag"
    },
    {
        component: GridDragToGridSampleComponent,
        data: gridsRoutesData["grid-row-drag-to-grid"],
        path: "grid-row-drag-to-grid"
    },
    {
        component: GridDragBaseSampleComponent,
        data: gridsRoutesData["grid-row-drag-base"],
        path: "grid-row-drag-base"
    },
    {
        component: GridRowReorderComponent,
        data: gridsRoutesData["grid-row-reorder"],
        path: "grid-row-reorder"
    },
    {
        component: GridBatchEditingSampleComponent,
        data: gridsRoutesData["grid-batch-editing"],
        path: "grid-batch-editing"
    },
    {
        component: GridDisplayDensitySampleComponent,
        data: gridsRoutesData["grid-displayDensity"],
        path: "grid-displayDensity"
    },
    {
        component: GridConditionalCellStyleComponent,
        data: gridsRoutesData["grid-cell-styling"],
        path: "grid-cell-styling"
    },
    {
        component: FilteringSampleComponent,
        data: gridsRoutesData["grid-filtering-sample"],
        path: "grid-filtering-sample"
    },
    {
        component: FilteringTemplateSampleComponent,
        data: gridsRoutesData["grid-filtering-template-sample"],
        path: "grid-filtering-template-sample"
    },
    {
        component: ExcelStyleFilteringSample1Component,
        data: gridsRoutesData["grid-excel-style-filtering-sample-1"],
        path: "grid-excel-style-filtering-sample-1"
    },
    {
        component: ExcelStyleFilteringSample2Component,
        data: gridsRoutesData["grid-excel-style-filtering-sample-2"],
        path: "grid-excel-style-filtering-sample-2"
    },
    {
        component: ExcelStyleFilteringSample3Component,
        data: gridsRoutesData["grid-excel-style-filtering-sample-3"],
        path: "grid-excel-style-filtering-sample-3"
    },
    {
        component: GridCustomFilteringComponent,
        data: gridsRoutesData["grid-filter-conditions"],
        path: "grid-filter-conditions"
    },
    {
        component: PagingSampleComponent,
        data: gridsRoutesData["grid-paging-sample"],
        path: "grid-paging-sample"
    },
    {
        component: ResizingSampleComponent,
        data: gridsRoutesData["grid-resizing-sample"],
        path: "grid-resizing-sample"
    },
    {
        component: FinancialSampleComponent,
        data: gridsRoutesData["grid-sample-2"],
        path: "grid-sample-2"
    },
    {
        component: PinningSampleComponent,
        data: gridsRoutesData["grid-sample-pinning"],
        path: "grid-sample-pinning"
    },
    {
        component: GridRemoteVirtualizationSampleComponent,
        data: gridsRoutesData["grid-sample-4"],
        path: "grid-sample-4"
    },
    {
        component: RemoteFilteringSampleComponent,
        data: gridsRoutesData["grid-remote-filtering"],
        path: "grid-remote-filtering"
    },
    {
        component: GridSelectionSampleComponent,
        data: gridsRoutesData["grid-selection"],
        path: "grid-selection"
    },
    {
        component: GridSearchSampleComponent,
        data: gridsRoutesData["grid-search-sample"],
        path: "grid-search-sample"
    },
    {
        component: GridColumnHidingSampleComponent,
        data: gridsRoutesData["grid-column-hiding-sample"],
        path: "grid-column-hiding-sample"
    },
    {
        component: GridColumnHidingToolbarSampleComponent,
        data: gridsRoutesData["grid-column-hiding-toolbar-sample"],
        path: "grid-column-hiding-toolbar-sample"
    },
    {
        component: SortingSampleComponent,
        data: gridsRoutesData["grid-sorting-sample"],
        path: "grid-sorting-sample"
    },
    {
        component: GridToolbarSample1Component,
        data: gridsRoutesData["grid-toolbar-sample-1"],
        path: "grid-toolbar-sample-1"
    },
    {
        component: GridToolbarSample2Component,
        data: gridsRoutesData["grid-toolbar-sample-2"],
        path: "grid-toolbar-sample-2"
    },
    {
        component: GridToolbarSample3Component,
        data: gridsRoutesData["grid-toolbar-sample-3"],
        path: "grid-toolbar-sample-3"
    },
    {
        component: GridToolbarSample4Component,
        data: gridsRoutesData["grid-toolbar-sample-4"],
        path: "grid-toolbar-sample-4"
    },
    {
        component: GridMovingSampleComponent,
        data: gridsRoutesData["grid-moving-sample"],
        path: "grid-moving-sample"
    },
    {
        component: GridMovingStyledSampleComponent,
        data: gridsRoutesData["grid-moving-styled-sample"],
        path: "grid-moving-styled-sample"
    },
    {
        component: GridMultiColumnHeadersComponent,
        data: gridsRoutesData["multi-column-headers"],
        path: "multi-column-headers"
    },
    {
        component: RemotePagingGridSample,
        data: gridsRoutesData["grid-remote-paging-sample"],
        path: "grid-remote-paging-sample"
    },
    {
        component: GridPasteSampleComponent,
        data: gridsRoutesData["grid-paste"],
        path: "grid-paste"
    },
    {
        component: GridSaveStateComponent,
        data: gridsRoutesData["grid-state"],
        path: "grid-state"
    },
    {
        component: AboutComponent,
        data: gridsRoutesData["grid-about"],
        path: "grid-about"
    },
    {
        component: GridMultiCellSelectionComponent,
        data: gridsRoutesData["grid-multi-cell-selection"],
        path: "grid-multi-cell-selection"
    },
    {
        component: GridCustomKBNavigationComponent,
        data: gridsRoutesData["grid-custom-keyboard-navigation"],
        path: "grid-custom-keyboard-navigation"
    },
    {
        component: GridNestedDataBindComponent,
        data: gridsRoutesData["grid-nested-data-binding"],
        path: "grid-nested-data-binding"
    },
    {
        component: GridCompositeDataComponent,
        data: gridsRoutesData["grid-composite-data-binding"],
        path: "grid-composite-data-binding"
    },
    {
        component: GridMultiRowLayoutComponent,
        data: gridsRoutesData["grid-multi-row-layout"],
        path: "grid-multi-row-layout"
    },
    {
        component: GridMultiRowLayoutConfigurationComponent,
        data: gridsRoutesData["grid-multi-row-layout-configuration"],
        path: "grid-multi-row-layout-configuration"
    }, {
        component: GridMRLCustomNavigationComponent,
        data: gridsRoutesData["grid-multi-row-layout"],
        path: "grid-mrl-custom-navigation"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridsRoutes)
    ]
})
export class GridsRoutingModule { }
