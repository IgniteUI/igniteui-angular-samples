import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsLayoutComponent } from './index/docs-layout.component';
import { IndexComponent } from './index/index.component';

export const SamplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: 'Home' },
        path: 'home'
    },
    {
        data: ['GridFinjsModule'],
        loadChildren: () => import('./grid-finjs/grid-finjs.routes').then(m => m.GridfinjsRoutes),
        path: 'grid-finjs'
    },
    {
        data: ['TreeGridFinjsModule'],
        loadChildren: () => import('./treegrid-finjs/treegrid-finjs.routes').then(m => m.TreegridfinjsRoutes),
        path: 'treegrid-finjs'
    },
    {
        data: ['TreeGridDVModule'],
        loadChildren: () => import('./tree-grid/tree-grid.routes').then(m => m.TreeGridDVRoutes),
        path: 'tree-grid'
    },
    {
        data: ['GridsDVModule'],
        loadChildren: () => import('./grid/grids.routes').then(m => m.GridsDVRoutes),
        path: 'grid'
    },
    {
        data: ['GridFinJSDockManagerModule'],
        loadChildren: () => import('./grid-finjs-dock-manager/grid-finjs-dock-manager.routes').then(m => m.GridFinJsDockManagerGridRoutes),
        path: 'grid-finjs-dock-manager'
    },
    {
        data: ['HierarchicalGridDVModule'],
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('./hierarchical-grid/hierarchical-grid.routes').then(m => m.HierarchicalGridDVRoutes),
        path: 'hierarchical-grid'
    },
    {
        data: ['GridDynamicChartDataModule'],
        loadChildren: () => import('./grid-dynamic-chart-data/grid-dynamic-chart-data.routes')
        .then(m => m.GridDynamicChartRoutes),
        path: 'grid-dynamic-chart-data'
    }
];

export const AppLobRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/samples/home'
    },
    {
        children: SamplesRoutes,
        component: DocsLayoutComponent,
        path: ''
    },
    {
        children: SamplesRoutes,
        component: IndexComponent,
        path: 'samples'
    }
];
