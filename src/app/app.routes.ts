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
        loadChildren: () => import('./data-display/data-display.routes').then(m => m.DataDisplayRoutes),
        path: 'data-display'
    },
    {
        loadChildren: () => import('./data-entries/data-entries.routes').then(m => m.DataEntriesRoutes),
        path: 'data-entries'
    },
    {
        loadChildren: () => import('./interactions/interactions.routes').then(m => m.InteractionsRoutes),
        path: 'interactions'
    },
    {
        loadChildren: () => import('./notifications/notifications.routes').then(m => m.NotificationsRoutes),
        path: 'notifications'
    },
    {
        loadChildren: () => import('./lists/lists.routes').then(m => m.ListsRoutes),
        path: 'lists'
    },
    {
        loadChildren: () => import('./theming/theming.routes').then(m => m.ThemingRoutes),
        path: 'theming'
    },
    {
        loadChildren: () => import('./scheduling/scheduling.routes').then(m => m.SchedulingRoutes),
        path: 'scheduling'
    },
    {
        loadChildren: () => import('./menus/menus.routes').then(m => m.MenusRoutes),
        path: 'menus'
    },
    {
        loadChildren: () => import('./layouts/layouts.routes').then(m => m.LayoutsRoutes),
        path: 'layouts'
    },
    {
        loadChildren: () => import('./services/services.routes').then(m => m.ServicesRoutes),
        path: 'services'
    },
    {
        loadChildren: () => import('./tree-grid/tree-grid.routes').then(m => m.TreeGridRoutes),
        path: 'tree-grid'
    },
    {
        loadChildren: () => import('./grid/grids.routes').then(m => m.GridsRoutes),
        path: 'grid'
    },
    {
        loadChildren: () => import('./grid-lite/grid-lite.routes').then(m => m.GridLiteRoutes),
        path: 'grid-lite'
    },
    {
        loadChildren: () => import('./pivot-grid/pivot-grids.routes').then(m => m.PivotGridsRoutes),
        path: 'pivot-grid'
    },
    {
        loadChildren: () => import('./hierarchical-grid/hierarchical-grid.routes').then(m => m.HierarchicalGridRoutes),
        path: 'hierarchical-grid'
    },
    {
        loadChildren: () => import('./pagination/pagination.routes').then(m => m.PaginatorRoutes),
        path: 'pagination'
    }
];

export const AppRoutes: Routes = [
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
