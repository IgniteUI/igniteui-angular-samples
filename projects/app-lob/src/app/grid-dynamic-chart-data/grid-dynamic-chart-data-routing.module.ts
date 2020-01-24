import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { gridDynamicChartRoutesData } from "./grid-dynamic-chart-data-routes-data";
import { GridDynamicChartDataComponent } from "./grid-dynamic-chart-data.component";

export const gridDynamicChartRoutes: Routes = [
    {
        component: GridDynamicChartDataComponent,
        data: gridDynamicChartRoutesData["empty-path"],
        path: ""
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridDynamicChartRoutes)
    ]
})
export class GridDynamicChartDataRoutingModule { }
