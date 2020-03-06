import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabbarView1Component } from "../views/view1/view1.component";
import { TabbarView2Component } from "../views/view2/view2.component";
import { TabbarView3Component } from "../views/view3/view3.component";
import { TabbarSample3Component } from "./components/tabbar-sample-3.component";

const routes: Routes = [
    {
        path: "tabbar-sample-3",
        component: TabbarSample3Component,
        children: [
            { path: "tabbar-view1", component: TabbarView1Component },
            { path: "tabbar-view2", component: TabbarView2Component },
            { path: "tabbar-view3", component: TabbarView3Component }
        ]
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
export class TabbarRoutingModule { }
