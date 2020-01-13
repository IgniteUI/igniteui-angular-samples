import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxCsvExporterService, IgxExcelExporterService, IgxGridModule,
    IgxProgressBarModule } from "igniteui-angular";
import { IgxSparklineCoreModule } from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule } from "igniteui-angular-charts/ES5/igx-sparkline-module";
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
        IgxProgressBarModule,
        IgxSparklineModule,
        IgxSparklineCoreModule
    ],
    providers: [IgxCsvExporterService, IgxExcelExporterService]
})
export class GridCRMModule {}
