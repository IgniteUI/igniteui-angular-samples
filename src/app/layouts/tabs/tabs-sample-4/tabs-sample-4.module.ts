import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxTabsModule } from "igniteui-angular";
import { ViewsModule } from "../views/views.module";
import { TabsRouting1Module } from "./tabs.routing1.module";

@NgModule({
    exports: [
        IgxTabsModule
    ],
    imports: [
        CommonModule,
        FormsModule,
        TabsRouting1Module,
        ViewsModule
    ]
})
export class TabsSample4Module {

}
