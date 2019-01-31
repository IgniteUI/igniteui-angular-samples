import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
import { TreeGridEmployeesSampleComponent } from "./tree-grid-employees/tree-grid-employees-sample.component";
import { TreeGridFilteringSampleComponent } from "./tree-grid-filtering-sample/tree-grid-filtering-sample.component";
import { TreeGridFinJSComponent } from "./tree-grid-finjs/tree-grid-finjs-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { treeGridRoutesData } from "./tree-grid-routes-data";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridSearchSampleComponent } from "./tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "./tree-grid-selection-sample/tree-grid-selection-sample.component";
import { TreeGridSortingSampleComponent } from "./tree-grid-sorting/tree-grid-sorting-sample.component";

export const treeGridRoutes: Routes = [
    {
        component: TreeGridChilddatakeySampleComponent,
        data: treeGridRoutesData["treegrid-childdatakey"],
        path: "treegrid-childdatakey"
    },
    {
        component: TreeGridPrimaryforeignkeySampleComponent,
        data: treeGridRoutesData["treegrid-primaryforeignkey"],
        path: "treegrid-primaryforeignkey"
    },
    {
        component: TreeGridRowEditSampleComponent,
        data: treeGridRoutesData["treegrid-row-edit"],
        path: "treegrid-row-edit"
    },
    {
        component: TreeGridBatchEditingSampleComponent,
        data: treeGridRoutesData["treegrid-batchediting"],
        path: "treegrid-batchediting"
    },
    {
        component: TreeGridEmployeesSampleComponent,
        data: treeGridRoutesData["treegrid-employees"],
        path: "treegrid-employees"
    },
    {
        component: TreeGridSearchSampleComponent,
        data: treeGridRoutesData["treegrid-search"],
        path: "treegrid-search"
    },
    {
        component: TreeGridColumnHidingSampleComponent,
        data: treeGridRoutesData["treegrid-column-hiding"],
        path: "treegrid-column-hiding"
    },
    {
        component: TreeGridColumnHidingToolbarSampleComponent,
        data: treeGridRoutesData["treegrid-column-hiding-toolbar"],
        path: "treegrid-column-hiding-toolbar"
    },
    {
        component: TreeGridSelectionSampleComponent,
        data: treeGridRoutesData["treegrid-selection"],
        path: "treegrid-selection"
    },
    {
        component: TreeGridSortingSampleComponent,
        data: treeGridRoutesData["treegrid-sorting"],
        path: "treegrid-sorting"
    },
    {
        component: TreeGridColumnMovingSampleComponent,
        data: treeGridRoutesData["treegrid-column-moving"],
        path: "treegrid-column-moving"
    },
    {
        component: TreeGridColumnPinningSampleComponent,
        data: treeGridRoutesData["treegrid-column-pinning"],
        path: "treegrid-column-pinning"
    },
    {
        component: TreeGridColumnResizingSampleComponent,
        data: treeGridRoutesData["treegrid-column-resizing"],
        path: "treegrid-column-resizing"
    },
    {
        component: TreeGridFilteringSampleComponent,
        data: treeGridRoutesData["treegrid-filtering"],
        path: "treegrid-filtering"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(treeGridRoutes)
    ]
})
export class TreeGridRoutingModule { }
