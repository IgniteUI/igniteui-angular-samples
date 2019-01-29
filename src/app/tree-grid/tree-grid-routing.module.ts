import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridEmployeesSampleComponent } from "./tree-grid-employees/tree-grid-employees-sample.component";
import { TreeGridFinJSComponent } from "./tree-grid-finjs/tree-grid-finjs-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { treeGridRoutesData } from "./tree-grid-routes-data";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";

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
        component: TreeGridFinJSComponent,
        data: treeGridRoutesData["treegrid-finjs-sample"],
        path: "treegrid-finjs-sample"
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
