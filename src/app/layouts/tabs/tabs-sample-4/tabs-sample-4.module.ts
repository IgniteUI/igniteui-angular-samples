import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IgxTabsModule } from "igniteui-angular";
import { ViewsModule } from "../views/views.module";
import { TabsRoutingModule } from "./tabs.routing.module";

@NgModule({
    exports: [
        IgxTabsModule
    ],
    imports: [
        TabsRoutingModule,
        CommonModule,
        ViewsModule
    ]
})
export class TabsSample4Module { }
