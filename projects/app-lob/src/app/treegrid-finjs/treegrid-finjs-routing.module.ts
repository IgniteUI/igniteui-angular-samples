import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TreeGridFinJSComponent } from "./tree-grid-finjs-sample.component";
import { treegridfinjsRoutesData } from "./treegrid-finjs-routes-data";

export const treegridfinjsRoutes: Routes = [
    {
        component: TreeGridFinJSComponent,
        data: treegridfinjsRoutesData["empty-path"],
        path: ""
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(treegridfinjsRoutes)
    ]
})
export class TreeGridFinjsRoutingModule { }
