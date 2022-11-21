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
        data: ['GridFinjsModule'],
        loadChildren: () => import('./grid-finjs/grid-finjs.module').then(m => m.GridFinjsModule),
        path: 'grid-finjs'
    },
    {
        data: ['TreeGridFinjsModule'],
        loadChildren: () => import('./treegrid-finjs/treegrid-finjs.module').then(m => m.TreeGridFinjsModule),
        path: 'treegrid-finjs'
    },
    {
        data: ['TreeGridDVModule'],
        loadChildren: () => import('./tree-grid/tree-grid.module').then(m => m.TreeGridDVModule),
        path: 'tree-grid'
    },
    {
        data: ['GridsDVModule'],
        loadChildren: () => import('./grid/grids.module').then(m => m.GridsDVModule),
        path: 'grid'
    },
    {
        data: ['GridFinJSDockManagerModule'],
        loadChildren: () => import('./grid-finjs-dock-manager/grid-finjs-dock-manager.module').then(m => m.GridFinJSDockManagerModule),
        path: 'grid-finjs-dock-manager'
    },
    {
        data: ['HierarchicalGridDVModule'],
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('./hierarchical-grid/hierarchical-grid.module').then(m => m.HierarchicalGridDVModule),
        path: 'hierarchical-grid'
    },
    {
        data: ['GridDynamicChartDataModule'],
        loadChildren: () => import('./grid-dynamic-chart-data/grid-dynamic-chart-data.module')
        .then(m => m.GridDynamicChartDataModule),
        path: 'grid-dynamic-chart-data'
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
  imports: [RouterModule.forRoot(appRoutes, {})],
  exports: [RouterModule]
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
