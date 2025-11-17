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

export const GridLiteRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
    },
    {
        path: 'overview',
        component: GridLiteOverviewComponent,
        data: {
            displayName: 'Grid Lite Overview'
        }
    },
    {
        path: 'column-config-simple',
        component: GridLiteColumnConfigSimpleComponent,
        data: {
            displayName: 'Column Configuration - Simple'
        }
    },
    {
        path: 'column-config-dynamic',
        component: GridLiteColumnConfigDynamicComponent,
        data: {
            displayName: 'Column Configuration - Dynamic'
        }
    },
    {
        path: 'column-config-headers',
        component: GridLiteColumnConfigHeadersComponent,
        data: {
            displayName: 'Column Configuration - Headers'
        }
    },
    {
        path: 'data-binding-dynamic',
        component: GridLiteDataBindingDynamicComponent,
        data: {
            displayName: 'Data Binding - Dynamic'
        }
    },
    {
        path: 'filtering-simple',
        component: GridLiteFilteringSimpleComponent,
        data: {
            displayName: 'Filtering - Simple'
        }
    },
    {
        path: 'filtering-events',
        component: GridLiteFilteringEventsComponent,
        data: {
            displayName: 'Filtering - Events'
        }
    },
    {
        path: 'filtering-pipeline',
        component: GridLiteFilteringPipelineComponent,
        data: {
            displayName: 'Filtering - Pipeline'
        }
    },
    {
        path: 'sorting-simple',
        component: GridLiteSortingSimpleComponent,
        data: {
            displayName: 'Sorting - Simple'
        }
    },
    {
        path: 'sorting-events',
        component: GridLiteSortingEventsComponent,
        data: {
            displayName: 'Sorting - Events'
        }
    },
    {
        path: 'sorting-grid-config',
        component: GridLiteSortingGridConfigComponent,
        data: {
            displayName: 'Sorting - Grid Configuration'
        }
    },
    {
        path: 'sorting-pipeline',
        component: GridLiteSortingPipelineComponent,
        data: {
            displayName: 'Sorting - Pipeline'
        }
    },
    {
        path: 'styling-custom',
        component: GridLiteStylingCustomComponent,
        data: {
            displayName: 'Styling - Custom'
        }
    },
    {
        path: 'styling-themes',
        component: GridLiteStylingThemesComponent,
        data: {
            displayName: 'Styling - Themes'
        }
    }
];
