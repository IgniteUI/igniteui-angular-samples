import { Routes } from '@angular/router';
import { DataAnalysisDockManagerComponent } from './data-analysis-dock-manager/data-analysis-dock-manager.component';
import { gridDynamicChartRoutesData } from './grid-dynamic-chart-data-routes-data';
import { GridDynamicChartDataComponent } from './grid-dynamic-chart-data.component';

export const GridDynamicChartRoutes: Routes = [
    {
        component: GridDynamicChartDataComponent,
        data: gridDynamicChartRoutesData['data-analysis'],
        path: 'data-analysis'
    },
    {
        component: DataAnalysisDockManagerComponent,
        data: gridDynamicChartRoutesData['data-analysis-dock-manager'],
        path: 'data-analysis-dock-manager'
    }
];
