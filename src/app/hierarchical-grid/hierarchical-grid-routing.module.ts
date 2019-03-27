/* tslint:disable:max-line-length */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HGridBatchEditingSampleComponent } from "./hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HGridCostumHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component";
import { HGridColumnHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";
import { HGridColumnMovingSampleComponent } from "./hierarchical-grid-column-moving/hierarchical-grid-moving.component";
import { HGridPinningSampleComponent } from "./hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";
import { HGridColumnResizingSampleComponent } from "./hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
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
import { HGridCustomFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component";
import { HGridFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HGridFilteringTemplateSampleComponent } from "./hierarchical-grid-filtering-template/hierarchical-grid-filtering-template.component";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HGridMultiHeadersSampleComponent } from "./hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component";
import { HGridPagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-paging.component";
import { HGridRemotePagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import { hierarchicalGridRoutesData } from "./hierarchical-grid-routes-data";
import { HGridRowEditingSampleComponent } from "./hierarchical-grid-row-editing/hierarchical-grid-row-editing.component";
import { HGridSelectionSampleComponent } from "./hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridSortingSampleComponent } from "./hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridSummarySampleComponent } from "./hierarchical-grid-summary/hierarchical-grid-summary.component";
import { HGridToolbarCustomSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component";
import { HGridToolbarOptionsSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { HGridToolbarTitleSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component";
/* tslint:enable:max-line-length */

export const hierarchicalGridRoutes: Routes = [
    {
        component: HGridFilteringSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-filtering"],
        path: "hierarchical-grid-filtering"
    },
    {
        component: HGridFilteringTemplateSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-filtering-template"],
        path: "hierarchical-grid-filtering-template"
    },
    {
        component: HGridExcelStyleFilteringSample1Component,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-sample-1"],
        path: "hierarchical-grid-excel-style-filtering-sample-1"
    },
    {
        component: HGridExcelStyleFilteringSample2Component,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-sample-2"],
        path: "hierarchical-grid-excel-style-filtering-sample-2"
    },
    {
        component: HGridExcelStyleFilteringSample3Component,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-sample-3"],
        path: "hierarchical-grid-excel-style-filtering-sample-3"
    },
    {
        component: HGridCustomFilteringSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-custom-filtering"],
        path: "hierarchical-grid-custom-filtering"
    },
    {
        component: HGridSortingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-sorting"],
        path: "hierarchical-grid-sorting"
    },
    {
        component: HGridSelectionSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-selection"],
        path: "hierarchical-grid-selection"
    },
    {
        component: HGridSummarySampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-summary"],
        path: "hierarchical-grid-summary"
    },
    {
        component: HGridPagingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-paging"],
        path: "hierarchical-grid-paging"
    },
    {
        component: HGridRemotePagingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-remote-paging"],
        path: "hierarchical-grid-remote-paging"
    },
    {
        component: HGridPinningSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-pinning"],
        path: "hierarchical-grid-pinning"
    },
    {
        component: HGridColumnResizingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-resizing"],
        path: "hierarchical-grid-resizing"
    },
    {
        component: HGridColumnHidingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-hiding"],
        path: "hierarchical-grid-hiding"
    },
    {
        component: HGridCostumHidingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-custom-hiding"],
        path: "hierarchical-grid-custom-hiding"
    },
    {
        component: HGridColumnMovingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-moving"],
        path: "hierarchical-grid-moving"
    },
    {
        component: HGridDisplayDensitySampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-density"],
        path: "hierarchical-grid-density"
    },
    {
        component: HGridMultiHeadersSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-multi-column"],
        path: "hierarchical-grid-multi-column"
    },
    {
        component: HGridToolbarTitleSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-title"],
        path: "hierarchical-grid-toolbar-title"
    },
    {
        component: HGridToolbarOptionsSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-options"],
        path: "hierarchical-grid-toolbar-options"
    },
    {
        component: HGridToolbarCustomSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-custom"],
        path: "hierarchical-grid-toolbar-custom"
    },
    {
        component: HGridRowEditingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-row-editing"],
        path: "hierarchical-grid-row-editing"
    },
    {
        component: HGridEditingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-editing"],
        path: "hierarchical-grid-editing"
    },
    {
        component: HGridBatchEditingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-batch-editing"],
        path: "hierarchical-grid-batch-editing"
    },
    {
        component: HierarchicalGridLoDSampleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-lod"],
        path: "hierarchical-grid-lod"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(hierarchicalGridRoutes)
    ]
})
export class HierarchicalGridRoutingModule { }
