import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxExcelExporterService, IgxGridModule, IgxProgressBarModule } from "igniteui-angular";
import { GridCRMRoutingModule } from "./grid-crm-routing.module";
import { GridCRMComponent } from "./grid-crm/grid-crm.component";

@NgModule({
    declarations: [
        GridCRMComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GridCRMRoutingModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxProgressBarModule
    ],
    providers: [IgxExcelExporterService]
})
export class GridCRMModule {}
