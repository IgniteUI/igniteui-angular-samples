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

export const listsRoutes: Routes = [
    {
        component: ComboMainComponent,
        path: "combo"
    },
    {
        component: ComboFeatures,
        data: { displayName: "Combos Features", parentName: "Combo" },
        path: "combo-features"
    },
    {
        component: ComboRemoteComponent,
        data: { displayName: "Remote Combo", parentName: "Combo" },
        path: "combo-remote"
    },
    {
        component: ComboTemplateComponent,
        data: { displayName: "Templating Combo", parentName: "Combo" },
        path: "combo-template"
    },
    {
        component: CascadingCombos,
        data: { displayName: "Cascading Combos", parentName: "Combo" },
        path: "cascading-combos"
    },
    {
        component: ListComponent,
        data: { displayName: "List Overview", parentName: "List" },
        path: "list"
    },
    {
        component: ListSample1Component,
        path: "list-sample-1"
    },
    {
        component: ListSample2Component,
        data: { displayName: "List Item Header", parentName: "List" },
        path: "list-sample-2"
    },
    {
        component: ListSample3Component,
        data: { displayName: "List Item Template", parentName: "List" },
        path: "list-sample-3"
    },
    {
        component: ListSample4Component,
        data: { displayName: "List Search", parentName: "List" },
        path: "list-sample-4"
    },
    {
        component: ListSample5Component,
        data: { displayName: "Empty List Template", parentName: "List" },
        path: "list-sample-5"
    },
    {
        component: ListSample6Component,
        data: { displayName: "List Loading", parentName: "List" },
        path: "list-sample-6"
    },
    {
        component: ListSample7Component,
        data: { displayName: "List Item Panning", parentName: "List" },
        path: "list-sample-7"
    },
    {
        component: ListChatSampleComponent,
        data: { displayName: "Chat Component", parentName: "List" },
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
