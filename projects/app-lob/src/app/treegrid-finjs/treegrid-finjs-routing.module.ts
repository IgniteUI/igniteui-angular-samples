import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeGridFinJSLoadOnDemandComponent } from './tree-grid-finjs-lod-sample.component';
import { TreeGridFinJSComponent } from './tree-grid-finjs-sample.component';
import { treegridfinjsRoutesData } from './treegrid-finjs-routes-data';

export const treegridfinjsRoutes: Routes = [
    {
        component: TreeGridFinJSComponent,
        data: treegridfinjsRoutesData['empty-path'],
        path: ''
    },
    {
        component: TreeGridFinJSLoadOnDemandComponent,
        data: treegridfinjsRoutesData['treegrid-finjs-lod'],
        path: 'treegrid-finjs-lod'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(treegridfinjsRoutes)
    ]
})
export class TreeGridFinjsRoutingModule { }
