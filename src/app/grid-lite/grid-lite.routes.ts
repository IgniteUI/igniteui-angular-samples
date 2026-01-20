/* eslint-disable max-len */
import { Routes } from '@angular/router';
import { GridLiteOverviewComponent } from './grid-lite-overview/grid-lite-overview.component';
import { GridLiteColumnConfigSimpleComponent } from './grid-lite-column-config-simple/grid-lite-column-config-simple.component';
import { GridLiteColumnConfigDynamicComponent } from './grid-lite-column-config-dynamic/grid-lite-column-config-dynamic.component';
import { GridLiteColumnConfigHeadersComponent } from './grid-lite-column-config-headers/grid-lite-column-config-headers.component';
import { GridLiteDataBindingDynamicComponent } from './grid-lite-data-binding-dynamic/grid-lite-data-binding-dynamic.component';
import { GridLiteFilteringSimpleComponent } from './grid-lite-filtering-simple/grid-lite-filtering-simple.component';
import { GridLiteFilteringEventsComponent } from './grid-lite-filtering-events/grid-lite-filtering-events.component';
import { GridLiteFilteringPipelineComponent } from './grid-lite-filtering-pipeline/grid-lite-filtering-pipeline.component';
import { GridLiteSortingSimpleComponent } from './grid-lite-sorting-simple/grid-lite-sorting-simple.component';
import { GridLiteSortingEventsComponent } from './grid-lite-sorting-events/grid-lite-sorting-events.component';
import { GridLiteSortingGridConfigComponent } from './grid-lite-sorting-grid-config/grid-lite-sorting-grid-config.component';
import { GridLiteSortingPipelineComponent } from './grid-lite-sorting-pipeline/grid-lite-sorting-pipeline.component';
import { GridLiteStylingCustomComponent } from './grid-lite-styling-custom/grid-lite-styling-custom.component';
import { GridLiteStylingThemesComponent } from './grid-lite-styling-themes/grid-lite-styling-themes.component';
import { gridLiteRoutesData } from './grid-lite-routes-data';

export const GridLiteRoutes: Routes = [
    {
        path: 'overview',
        component: GridLiteOverviewComponent,
        data: gridLiteRoutesData['overview']
    },
    {
        path: 'column-config-simple',
        component: GridLiteColumnConfigSimpleComponent,
        data: gridLiteRoutesData['column-config-simple']
    },
    {
        path: 'column-config-dynamic',
        component: GridLiteColumnConfigDynamicComponent,
        data: gridLiteRoutesData['column-config-dynamic']
    },
    {
        path: 'column-config-headers',
        component: GridLiteColumnConfigHeadersComponent,
        data: gridLiteRoutesData['column-config-headers']
    },
    {
        path: 'data-binding-dynamic',
        component: GridLiteDataBindingDynamicComponent,
        data: gridLiteRoutesData['data-binding-dynamic']
    },
    {
        path: 'filtering-simple',
        component: GridLiteFilteringSimpleComponent,
        data: gridLiteRoutesData['filtering-simple']
    },
    {
        path: 'filtering-events',
        component: GridLiteFilteringEventsComponent,
        data: gridLiteRoutesData['filtering-events']
    },
    {
        path: 'filtering-pipeline',
        component: GridLiteFilteringPipelineComponent,
        data: gridLiteRoutesData['filtering-pipeline']
    },
    {
        path: 'sorting-simple',
        component: GridLiteSortingSimpleComponent,
        data: gridLiteRoutesData['sorting-simple']
    },
    {
        path: 'sorting-events',
        component: GridLiteSortingEventsComponent,
        data: gridLiteRoutesData['sorting-events']
    },
    {
        path: 'sorting-grid-config',
        component: GridLiteSortingGridConfigComponent,
        data: gridLiteRoutesData['sorting-grid-config']
    },
    {
        path: 'sorting-pipeline',
        component: GridLiteSortingPipelineComponent,
        data: gridLiteRoutesData['sorting-pipeline']
    },
    {
        path: 'styling-custom',
        component: GridLiteStylingCustomComponent,
        data: gridLiteRoutesData['styling-custom']
    },
    {
        path: 'styling-themes',
        component: GridLiteStylingThemesComponent,
        data: gridLiteRoutesData['styling-themes']
    }
];
