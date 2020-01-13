import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { gridsRoutesData } from "./grid-routes-data";

export const gridsRoutes: Routes = [
    {
        component: GridComponent,
        data: gridsRoutesData["grid"],
        path: ""
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
