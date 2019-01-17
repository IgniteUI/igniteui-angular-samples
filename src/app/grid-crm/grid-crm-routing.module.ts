import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridCRMComponent } from "./grid-crm/grid-crm.component";

export const gridcrmRoutes: Routes = [
    {
        component: GridCRMComponent,
        data: { displayName: "Grid CRM", parentName: "Grid" },
        path: "grid-crm"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridcrmRoutes)
    ]
})
export class GridCRMRoutingModule { }
