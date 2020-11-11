import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxCsvExporterService, IgxExcelExporterService,
    IgxGridModule, IgxProgressBarModule
} from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from '../../directives/prevent-scroll.directive';
import { GridCRMComponent } from "./grid-crm/grid-crm.component";

@NgModule({
    declarations: [
        GridCRMComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        // GridCRMRoutingModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxProgressBarModule
    ],
    providers: [IgxCsvExporterService, IgxExcelExporterService],
    exports: [
        GridCRMComponent
    ]
})
export class GridCRMModule { }
