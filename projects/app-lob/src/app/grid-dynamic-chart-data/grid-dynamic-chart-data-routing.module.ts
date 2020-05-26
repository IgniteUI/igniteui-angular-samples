import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataAnalysisDockManagerComponent } from "./data-analysis-dock-manager/data-analysis-dock-manager.component";
import { gridDynamicChartRoutesData } from "./grid-dynamic-chart-data-routes-data";
import { GridDynamicChartDataComponent } from "./grid-dynamic-chart-data.component";

export const gridDynamicChartRoutes: Routes = [
    {
        component: GridDynamicChartDataComponent,
        data: gridDynamicChartRoutesData["data-analysis"],
        path: "data-analysis"
    },
    {
        component: DataAnalysisDockManagerComponent,
        data: gridDynamicChartRoutesData["data-analysis-dock-manager"],
        path: "data-analysis-dock-manager"
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
