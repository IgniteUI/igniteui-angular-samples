import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        loadChildren: () => import('./grid-crm/grid-crm.module').then(m => m.GridsCrmModule),
        path: 'grid-crm'
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
export class AppRoutingModule { }
