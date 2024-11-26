import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsLayoutComponent } from './index/docs-layout.component';
import { IndexComponent } from './index/index.component';

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: 'Home' },
        path: 'home'
    },
    {
        path: 'data-display',
        loadChildren: () => import('./data-display/data-display.routes').then(m => m.DataDisplayRoutes)
    },
    {
        data: ['DataEntriesModule'],
        loadChildren: () => import('./data-entries/data-entries.routes').then(m => m.DataEntriesRoutes),
        path: 'data-entries'
    },
    {
        data: ['InteractionsModule'],
        loadChildren: () => import('./interactions/interactions.routes').then(m => m.InteractionsRoutes),
        path: 'interactions'
    },
    {
        data: ['NotificationsModule'],
        loadChildren: () => import('./notifications/notifications.routes').then(m => m.NotificationsRoutes),
        path: 'notifications'
    },
    {
        data: ['ListsModule'],
        loadChildren: () => import('./lists/lists.routes').then(m => m.ListsRoutes),
        path: 'lists'
    },
    {
        data: ['ThemingModule'],
        loadChildren: () => import('./theming/theming.routes').then(m => m.ThemingRoutes),
        path: 'theming'
    },
    {
        data: ['SchedulingModule'],
        loadChildren: () => import('./scheduling/scheduling.routes').then(m => m.SchedulingRoutes),
        path: 'scheduling'
    },
    {
        data: ['MenusModule'],
        loadChildren: () => import('./menus/menus.routes').then(m => m.MenusRoutes),
        path: 'menus'
    },
    {
        data: ['LayoutsModule'],
        loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
        path: 'layouts'
    },
    {
        data: ['ServicesModule'],
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
        path: 'services'
    },

    {
        data: ['TreeGridModule'],
        loadChildren: () => import('./tree-grid/tree-grid.module').then(m => m.TreeGridModule),
        path: 'tree-grid'
    },
    {
        data: ['GridsModule'],
        loadChildren: () => import('./grid/grids.module').then(m => m.GridsModule),
        path: 'grid'
    },
    {
        data: ['PivotGridsModule'],
        loadChildren: () => import('./pivot-grid/pivot-grids.module').then(m => m.PivotGridsModule),
        path: 'pivot-grid'
    },
    {
        data: ['HierarchicalGridModule'],
        loadChildren: () => import('./hierarchical-grid/hierarchical-grid.module').then(m => m.HierarchicalGridModule),
        path: 'hierarchical-grid'
    },
    {
        data: ['PaginationModule'],
        loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule),
        path: 'pagination'
    }
];
export const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/samples/home'
    },
    {
        children: samplesRoutes,
        component: DocsLayoutComponent,
        path: ''
    },
    {
        children: samplesRoutes,
        component: IndexComponent,
        path: 'samples'
    }
];
