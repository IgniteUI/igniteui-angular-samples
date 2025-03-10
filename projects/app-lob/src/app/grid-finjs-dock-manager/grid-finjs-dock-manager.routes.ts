import { Routes } from '@angular/router';
import { finJsDockManagerGridRoutes } from './grid-finjs-dock-manager-routes-data';
import { GridFinJSDockManagerComponent } from './grid-finjs-dock-manager.component';

export const GridFinJsDockManagerGridRoutes: Routes = [
    {
        component: GridFinJSDockManagerComponent,
        data: finJsDockManagerGridRoutes['grid-finjs-dock-manager'],
        path: ''
    }
];
