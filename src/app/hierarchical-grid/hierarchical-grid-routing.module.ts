import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid-lod/hierarchical-grid-lod.component";
import { hierarchicalGridRoutesData } from "./hierarchical-grid-routes-data";

export const hierarchicalGridRoutes: Routes = [
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
