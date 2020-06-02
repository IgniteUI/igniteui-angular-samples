import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IgxBottomNavModule } from "igniteui-angular";
import { TabbarViewsModule } from "../views/views.module";
import { TabbarRoutingModule } from "./tabbar.routing.module";

@NgModule({
    exports: [
        IgxBottomNavModule
    ],
    imports: [
        TabbarRoutingModule,
        CommonModule,
        TabbarViewsModule
    ]
})
export class TabbarSample3Module { }
