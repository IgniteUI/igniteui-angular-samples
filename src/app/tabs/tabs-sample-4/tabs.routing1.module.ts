import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { View1Component } from "../views/view1/view1.component";
import { View2Component } from "../views/view2/view2.component";
import { View3Component } from "../views/view3/view3.component";

const routes: Routes = [
    // simple links
    { path: "view1", component: View1Component },
    { path: "view2", component: View2Component },
    { path: "view3", component: View3Component },
    { path: "", redirectTo: "view1", pathMatch: "full" }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class TabsRouting1Module { }
