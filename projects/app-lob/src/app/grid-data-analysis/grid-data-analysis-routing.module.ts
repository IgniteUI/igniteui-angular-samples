import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { gridDARoutesData } from "./grid-data-analysis-routes-data";
import { GridDataAnalysisComponent } from "./grid-data-analysis/grid-data-analysis.component";

export const gridDARoutes: Routes = [
    {
        component: GridDataAnalysisComponent,
        data: gridDARoutesData["empty-path"],
        path: ""
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridDARoutes)
    ]
})
export class GridDataAnalysisRoutingModule { }
