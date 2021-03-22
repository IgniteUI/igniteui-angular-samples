import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { finJsDockManagerGridRoutes } from "./grid-finjs-dock-manager-routes-data";
import { GridFinJSDockManagerComponent } from "./grid-finjs-dock-manager.component";


export const gridFinJsDockManagerGridRoutes: Routes = [
    {
        component: GridFinJSDockManagerComponent,
        data: finJsDockManagerGridRoutes["grid-finjs-dock-manager"],
        path: "grid-finjs-dock-manager"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridFinJsDockManagerGridRoutes)
    ]
})
export class GridFinJSDockManagerRoutingModule { }
