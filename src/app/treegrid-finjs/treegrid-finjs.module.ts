import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxSliderModule, IgxSwitchModule, IgxTreeGridModule } from "igniteui-angular";
import { TreeGridFinJSComponent } from "./tree-grid-finjs-sample.component";
import { TreeGridFinjsRoutingModule } from "./treegrid-finjs-routing.module";
import { TreeLocalDataService } from "./treeLocalData.service";

@NgModule({
    declarations: [
        TreeGridFinJSComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        TreeGridFinjsRoutingModule,
        IgxTreeGridModule
    ],
    providers: [TreeLocalDataService]
})
export class TreeGridFinjsModule {}
