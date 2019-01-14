import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsSample4Component } from "./components/tabs-sample-4.component";

const routes: Routes = [
    {
        component: TabsSample4Component,
        path: "tabs"
    },
    { path: "", redirectTo: "/tabs", pathMatch: "full" }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRouting1Module { }
