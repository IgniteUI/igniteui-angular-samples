import { Routes } from '@angular/router';
import { FinJSDemoComponent } from './main.component';
import { gridfinjsRoutesData } from './grid-finjs-routes-data';
import { GridFinJSComponent } from './grid-finjs.component';

export const GridfinjsRoutes: Routes = [
    {
        component: FinJSDemoComponent,
        data: gridfinjsRoutesData['empty-path'],
        path: ''
    },
    {
        component: GridFinJSComponent,
        data: gridfinjsRoutesData['grid-finjs-partial'],
        path: 'grid-finjs-partial'
    }
];
