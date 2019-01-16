import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridFinJSComponent } from "./tree-grid-finjs/tree-grid-finjs-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";

export const treeGridRoutes: Routes = [
    {
        component: TreeGridChilddatakeySampleComponent,
        data: { displayName: "TreeGrid ChildDataKey", parentName: "TreeGrid" },
        path: "treegrid-childdatakey"
    },
    {
        component: TreeGridPrimaryforeignkeySampleComponent,
        data: { displayName: "TreeGrid Primary/Foreign key", parentName: "TreeGrid" },
        path: "treegrid-primaryforeignkey"
    },
    {
        component: TreeGridRowEditSampleComponent,
        data: { displayName: "TreeGrid Row Editing", parentName: "TreeGrid" },
        path: "treegrid-row-edit"
    },
    {
        component: TreeGridFinJSComponent,
        data: { displayName: "TreeGrid Finance demo sample", parentName: "TreeGrid" },
        path: "treegrid-finjs-sample"
    },
    {
        component: TreeGridBatchEditingSampleComponent,
        data: { displayName: "TreeGrid Batch Editing", parentName: "TreeGrid" },
        path: "treegrid-batchediting"
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
