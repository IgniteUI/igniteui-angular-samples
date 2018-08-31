import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { View1Component } from "../views/view1/view1.component";
import { View2Component } from "../views/view2/view2.component";
import { View3Component } from "../views/view3/view3.component";

const routes: Routes = [
    {
        // children outlets
        children: [
            { path: "product1", component: View1Component, outlet: "product1" },
            { path: "product2", component: View2Component, outlet: "product2" },
            { path: "product3", component: View3Component, outlet: "product3" },
            { path: "", redirectTo: "product1", pathMatch: "full" }
        ],
        path: "productDetails"
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/productDetails"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class TabsRouting2Module { }
