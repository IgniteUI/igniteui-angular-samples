// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridBatchEditingSampleComponent } from "./grid-batch-editing/grid-batch-editing-sample.component";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { GridColumnHidingSampleComponent } from "./grid-column-hiding-sample/grid-column-hiding-sample.component";
import { GridColumnHidingToolbarSampleComponent } from "./grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridConditionalCellStyleComponent } from "./grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCustomFilteringComponent } from "./grid-custom-filtering/grid-custom-filtering.component";
import { GridDisplayDensitySampleComponent } from "./grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid-editing-sample/grid-editing-sample.component";
import { ExcelStyleFilteringSample1Component } from "./grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component";
import { ExcelStyleFilteringSample2Component } from "./grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component";
import { FilteringSampleComponent } from "./grid-filtering-sample/grid-filtering-sample.component";
import { GridGroupBySampleComponent } from "./grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupBySummarySampleComponent } from "./grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "./grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid-paste/grid-paste-sample.component";
import { RemoteFilteringSampleComponent } from "./grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid-resizing-sample/grid-resizing-sample.component";
import { gridsRoutesData } from "./grid-routes-data";
import { GridRowEditSampleComponent } from "./grid-row-editing-sample/grid-row-editing-sample.component";
import { FinancialSampleComponent } from "./grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid-sample-selection/grid-selection.component";
import { GridSearchSampleComponent } from "./grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "./grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridMultiColumnHeadersComponent } from "./multi-column-headers/multi-column-headers";
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
