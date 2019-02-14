// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HGridFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HGridSortingSampleComponent } from "./hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridSelectionSampleComponent } from "./hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridSummarySampleComponent } from './hierarchical-grid-summary/hierarchical-grid-summary.component';
import { HGridPagingSampleComponent } from './hierarchical-grid-paging/hierarchical-grid-paging.component';
import { HGridPinningSampleComponent } from './hierarchical-grid-column-pinning/hierarchical-grid-pinning.component';
import { HGridColumnResizingSampleComponent } from './hierarchical-grid-column-resizing/hierarchical-grid-resizing.component';
import { HGridColumnHidingSampleComponent } from './hierarchical-grid-column-hiding/hierarchical-grid-hiding.component';
import { HGridDisplayDensitySampleComponent } from './hierarchical-grid-display-density/hierarchical-grid-density.component';
import { HGridColumnMovingSampleComponent } from './hierarchical-grid-column-moving/hierarchical-grid-moving.component';
import { HGridMultiHeadersSampleComponent } from './hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component';
import { HGridToolbarTitleSampleComponent } from './hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component';
import { HGridToolbarOptionsSampleComponent } from './hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component';
import { HGridToolbarCustomSampleComponent } from './hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component';
import { HGridRowEditingSampleComponent } from './hierarchical-grid-row-editing/hierarchical-grid-row-editing.component';
import { hierarchicalGridRoutesData } from "./hgrid-routes-data";

// tslint:enable:max-line-length

export const hierarchicalGridRoutes: Routes = [
    {
        component: HGridFilteringSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-filtering"],
        path: "hierarchical-grid-filtering"
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
export class HgridRoutingModule { }
