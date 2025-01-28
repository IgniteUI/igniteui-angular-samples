import { Routes } from '@angular/router';
import { TreeGridFinJSComponent } from './tree-grid-finjs-sample.component';
import { treegridfinjsRoutesData } from './treegrid-finjs-routes-data';

export const TreegridfinjsRoutes: Routes = [
    {
        component: TreeGridFinJSComponent,
        data: treegridfinjsRoutesData['empty-path'],
        path: ''
    }
];
