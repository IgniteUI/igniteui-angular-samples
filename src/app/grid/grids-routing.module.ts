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
import { FilteringSampleComponent } from "./grid-filtering-sample/grid-filtering-sample.component";
import { FinJSDemoComponent } from "./grid-finjs-demo/grid-finjs-demo.component";
import { GridGroupBySampleComponent } from "./grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupBySummarySampleComponent } from "./grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "./grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid-paste/grid-paste-sample.component";
import { RemoteFilteringSampleComponent } from "./grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid-resizing-sample/grid-resizing-sample.component";
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
        data: { displayName: "Grid Basic Features", parentName: "Grid" },
        path: "grid"
    },
    {
        component: GridSample3Component,
        data: { displayName: "Grid Summary", parentName: "Grid" },
        path: "grid-summary"
    },
    {
        component: GridGroupBySampleComponent,
        data: { displayName: "Grid GroupBy", parentName: "Grid" },
        path: "grid-groupby"
    },
    {
        component: GridGroupBySummarySampleComponent,
        data: { displayName: "Grid GroupBy Summary", parentName: "Grid" },
        path: "grid-groupby-summary"
    },
    {
        component: GridEditingSampleComponent,
        data: { displayName: "Grid Editing", parentName: "Grid" },
        path: "grid-editing"
    },
    {
        component: GridRowEditSampleComponent,
        data: { displayName: "Grid Row Editing", parentName: "Grid" },
        path: "grid-row-editing"
    },
    {
        component: GridBatchEditingSampleComponent,
        data: { displayName: "Grid Batch Editing", parentName: "Grid" },
        path: "grid-batch-editing"
    },
    {
        component: GridDisplayDensitySampleComponent,
        data: { displayName: "Grid Display Density", parentName: "Grid" },
        path: "grid-displayDensity"
    },
    {
        component: GridConditionalCellStyleComponent,
        data: { displayName: "Grid Conditional Cell Styling", parentName: "Grid" },
        path: "grid-cell-styling"
    },
    {
        component: FilteringSampleComponent,
        data: { displayName: "Grid Filtering", parentName: "Grid" },
        path: "grid-filtering-sample"
    },
    {
        component: GridCustomFilteringComponent,
        data: { displayName: "Custom Filtering Conditions", parentName: "Grid" },
        path: "grid-filter-conditions"
    },
    {
        component: PagingSampleComponent,
        data: { displayName: "Grid Paging", parentName: "Grid" },
        path: "grid-paging-sample"
    },
    {
        component: ResizingSampleComponent,
        data: { displayName: "Grid Resizing", parentName: "Grid" },
        path: "grid-resizing-sample"
    },
    {
        component: FinancialSampleComponent,
        data: { displayName: "Grid Financial Sample", parentName: "Grid" },
        path: "grid-sample-2"
    },
    {
        component: PinningSampleComponent,
        data: { displayName: "Grid Pinning", parentName: "Grid" },
        path: "grid-sample-pinning"
    },
    {
        component: GridRemoteVirtualizationSampleComponent,
        data: { displayName: "Grid Remote Virtualization", parentName: "Grid" },
        path: "grid-sample-4"
    },
    {
        component: RemoteFilteringSampleComponent,
        data: { displayName: "Grid Remote Filtering", parentName: "Grid" },
        path: "grid-remote-filtering"
    },
    {
        component: GridSelectionSampleComponent,
        data: { displayName: "Grid Selection", parentName: "Grid" },
        path: "grid-selection"
    },
    {
        component: GridSearchSampleComponent,
        data: { displayName: "Grid Search", parentName: "Grid" },
        path: "grid-search-sample"
    },
    {
        component: GridColumnHidingSampleComponent,
        data: { displayName: "Grid Column Hiding", parentName: "Grid" },
        path: "grid-column-hiding-sample"
    },
    {
        component: GridColumnHidingToolbarSampleComponent,
        data: { displayName: "Grid Column Hiding with Toolbar", parentName: "Grid" },
        path: "grid-column-hiding-toolbar-sample"
    },
    {
        component: SortingSampleComponent,
        data: { displayName: "Grid Sorting", parentName: "Grid" },
        path: "grid-sorting-sample"
    },
    {
        component: GridToolbarSample1Component,
        data: { displayName: "Grid Toolbar Title", parentName: "Grid" },
        path: "grid-toolbar-sample-1"
    },
    {
        component: GridToolbarSample2Component,
        data: { displayName: "Grid Toolbar Options", parentName: "Grid" },
        path: "grid-toolbar-sample-2"
    },
    {
        component: GridToolbarSample3Component,
        data: { displayName: "Grid Toolbar Export", parentName: "Grid" },
        path: "grid-toolbar-sample-3"
    },
    {
        component: GridToolbarSample4Component,
        data: { displayName: "Grid Toolbar Custom Content", parentName: "Grid" },
        path: "grid-toolbar-sample-4"
    },
    {
        component: GridMovingSampleComponent,
        data: { displayName: "Grid Column Moving", parentName: "Grid" },
        path: "grid-moving-sample"
    },
    {
        component: GridMultiColumnHeadersComponent,
        data: { displayName: "Grid Multi Column Headers", parentName: "Grid" },
        path: "multi-column-headers"
    },
    {
        component: RemotePagingGridSample,
        data: { displayName: "Grid Remote Paging", parentName: "Grid" },
        path: "grid-remote-paging-sample"
    },
    {
        component: GridPasteSampleComponent,
        data: { displayName: "Grid Paste From Excel", parentName: "Grid" },
        path: "grid-paste"
    },
    {
        component: FinJSDemoComponent,
        data: { displayName: "Grid Finance demo sample", parentName: "Grid" },
        path: "finjs-sample"
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
