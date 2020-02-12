import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinJSDemoComponent } from "./grid-finjs-demo.component";
import { gridfinjsRoutesData } from "./grid-finjs-routes-data";

export const gridfinjsRoutes: Routes = [
    {
        component: FinJSDemoComponent,
        data: gridfinjsRoutesData["empty-path"],
        path: ""
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
