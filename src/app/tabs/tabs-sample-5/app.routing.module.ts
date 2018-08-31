import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsSample5Component } from "./components/tabs-sample-5.component";

const routes: Routes = [
    {
        component: TabsSample5Component,
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
export class AppRouting2Module { }
