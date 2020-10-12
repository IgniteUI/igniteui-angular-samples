import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinJSDemoComponent } from "./grid-finjs-demo.component";
import { gridfinjsRoutesData } from "./grid-finjs-routes-data";
import { GridFinjsPartialComponent } from './partial/grid-finjs-partial.component';

export const gridfinjsRoutes: Routes = [
    {
        component: FinJSDemoComponent,
        data: gridfinjsRoutesData["empty-path"],
        path: ""
    },
    {
        component: GridFinjsPartialComponent,
        data: gridfinjsRoutesData["grid-finjs-partial"],
        path: "grid-finjs-partial"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridfinjsRoutes)
    ]
})
export class GridFinjsRoutingModule { }
