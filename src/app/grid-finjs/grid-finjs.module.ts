import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxCsvExporterService, IgxExcelExporterService, IgxGridModule,
    IgxSliderModule, IgxSwitchModule } from "igniteui-angular";
import { FinJSDemoComponent } from "./grid-finjs-demo.component";
import { GridFinjsRoutingModule } from "./grid-finjs-routing.module";
import { LocalDataService } from "./localData.service";

@NgModule({
    declarations: [
        FinJSDemoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        GridFinjsRoutingModule,
        IgxGridModule
    ],
    providers: [LocalDataService, IgxExcelExporterService, IgxCsvExporterService]
})
export class GridFinjsModule {}
