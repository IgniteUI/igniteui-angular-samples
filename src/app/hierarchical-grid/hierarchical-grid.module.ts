import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxHierarchicalGridModule
} from "igniteui-angular";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HierarchicalGridRoutingModule } from "./hierarchical-grid-routing.module";

@NgModule({
    declarations: [
        HierarchicalGridLoDSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HierarchicalGridRoutingModule,
        IgxHierarchicalGridModule
    ]
})
export class HierarchicalGridModule { }
