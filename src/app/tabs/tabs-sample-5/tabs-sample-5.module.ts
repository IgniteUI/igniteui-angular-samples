import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxTabsModule } from "igniteui-angular";
import { ViewsModule } from "../views/views.module";
import { TabsRouting2Module } from "./tabs.routing2.module";

@NgModule({
    exports: [
        IgxTabsModule
    ],
    imports: [
        CommonModule,
        FormsModule,
        TabsRouting2Module,
        ViewsModule
    ]
})
export class TabsSample5Module { }
