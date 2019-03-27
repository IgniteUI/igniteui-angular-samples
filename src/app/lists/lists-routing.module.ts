import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CascadingCombos } from "./combo/cascading-combos/cascading-combos.component";
import { ComboFeatures } from "./combo/combo-features/combo-features.component";
import { ComboMainComponent } from "./combo/combo-main/combo-main.component";
import { ComboRemoteComponent } from "./combo/combo-remote/combo-remote.component";
import { ComboTemplateComponent } from "./combo/combo-template/combo-template.component";
import { ListChatSampleComponent } from "./list/list-chat-sample/list-chat-sample.component";
import { ListSample1Component } from "./list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "./list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "./list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "./list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "./list/list-sample-5/list-sample-5.component";
import { ListSample6Component } from "./list/list-sample-6/list-sample-6.component";
import { ListSample7Component } from "./list/list-sample-7/list-sample-7.component";
import { ListComponent } from "./list/list.component";
import { listsRoutesData } from "./lists-routes-data";

export const listsRoutes: Routes = [
    {
        component: ComboMainComponent,
        path: "combo"
    },
    {
        component: ComboFeatures,
        data: listsRoutesData["combo-features"],
        path: "combo-features"
    },
    {
        component: ComboRemoteComponent,
        data: listsRoutesData["combo-remote"],
        path: "combo-remote"
    },
    {
        component: ComboTemplateComponent,
        data: listsRoutesData["combo-template"],
        path: "combo-template"
    },
    {
        component: CascadingCombos,
        data: listsRoutesData["cascading-combos"],
        path: "cascading-combos"
    },
    {
        component: ListComponent,
        // tslint:disable-next-line:no-string-literal
        data: listsRoutesData["list"],
        path: "list"
    },
    {
        component: ListSample1Component,
        path: "list-sample-1"
    },
    {
        component: ListSample2Component,
        data: listsRoutesData["list-sample-2"],
        path: "list-sample-2"
    },
    {
        component: ListSample3Component,
        data: listsRoutesData["list-sample-3"],
        path: "list-sample-3"
    },
    {
        component: ListSample4Component,
        data: listsRoutesData["list-sample-4"],
        path: "list-sample-4"
    },
    {
        component: ListSample5Component,
        data: listsRoutesData["list-sample-5"],
        path: "list-sample-5"
    },
    {
        component: ListSample6Component,
        data: listsRoutesData["list-sample-6"],
        path: "list-sample-6"
    },
    {
        component: ListSample7Component,
        data: listsRoutesData["list-sample-7"],
        path: "list-sample-7"
    },
    {
        component: ListChatSampleComponent,
        data: listsRoutesData["list-chat-sample"],
        path: "list-chat-sample"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(listsRoutes)
    ]
})
export class ListsRoutingModule { }
