import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { gridcrmRoutesData } from "./grid-crm-routes-data";
import { GridCRMComponent } from "./grid-crm/grid-crm.component";

export const gridcrmRoutes: Routes = [
    {
        component: GridCRMComponent,
        data: gridcrmRoutesData["empty-path"],
        path: ""
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridcrmRoutes)
    ]
})
export class GridCRMRoutingModule { }
