/* tslint:disable:max-line-length */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HGridColumnResizingSampleComponent } from "./hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { hierarchicalGridRoutesData } from "./hierarchical-grid-routes-data";

export const hierarchicalGridRoutes: Routes = [
    {
        component: HGridColumnResizingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-resizing"],
        path: "hierarchical-grid-resizing"
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
