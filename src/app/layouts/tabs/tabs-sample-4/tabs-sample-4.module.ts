import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IgxTabsModule } from "igniteui-angular";
import { ViewsModule } from "../views/views.module";

@NgModule({
    exports: [
        IgxTabsModule
    ],
    imports: [
        CommonModule,
        ViewsModule
    ]
})
export class TabsSample4Module { }
