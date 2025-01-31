/* eslint-disable max-len */
import { Routes } from '@angular/router';

import { HGridColumnResizingSampleComponent } from './hierarchical-grid-column-resizing/hierarchical-grid-resizing.component';
import { hierarchicalGridRoutesData } from './hierarchical-grid-routes-data';

export const HierarchicalGridDVRoutes: Routes = [
    {
        component: HGridColumnResizingSampleComponent,
        // eslint-disable-next-line @typescript-eslint/dot-notation
        data: hierarchicalGridRoutesData['hierarchical-grid-resizing'],
        path: 'hierarchical-grid-resizing'
    }
];
