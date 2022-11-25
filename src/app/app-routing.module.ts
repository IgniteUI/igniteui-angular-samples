// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { NavigationStart, Router, RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';
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
        data: ['DataDisplayModule'],
        loadChildren: () => import('./data-display/data-display.module').then(m => m.DataDisplayModule),
        path: 'data-display'
    },
    {
        data: ['DataEntriesModule'],
        loadChildren: () => import('./data-entries/data-entries.module').then(m => m.DataEntriesModule),
        path: 'data-entries'
    },
    {
        data: ['InteractionsModule'],
        loadChildren: () => import('./interactions/interactions.module').then(m => m.InteractionsModule),
        path: 'interactions'
    },
    {
        data: ['NotificationsModule'],
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule),
        path: 'notifications'
    },
    {
        data: ['ListsModule'],
        loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule),
        path: 'lists'
    },
    {
        data: ['ThemingModule'],
        loadChildren: () => import('./theming/theming.module').then(m => m.ThemingModule),
        path: 'theming'
    },
    {
        data: ['SchedulingModule'],
        loadChildren: () => import('./scheduling/scheduling.module').then(m => m.SchedulingModule),
        path: 'scheduling'
    },
    {
        data: ['MenusModule'],
        loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule),
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
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes, {})]
})
export class AppRoutingModule {

    constructor(private router: Router) {
        router.events.pipe(
            filter((event) => event instanceof NavigationStart)
        )
            .subscribe((event: NavigationStart) => {
                this.setOverflow(event.url);
            });
    }

    public setOverflow(url: string) {
        if (url.endsWith('finjs')) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
}
