// tslint:disable:max-line-length
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCardModule, IgxChipsModule, IgxCsvExporterService, IgxExcelExporterService, IgxExpansionPanelModule, IgxGridModule, IgxIconModule, IgxListModule, IgxTimePickerModule, IgxTransactionService, IgxTreeGridModule } from "igniteui-angular";
import { CsvExportSample1Component } from "./export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { TreeGridCsvExportSample1Component } from "./export-csv/csv-export-tree-grid-sample/csv-export-tree-grid-sample.component";
import { CsvExportComponent } from "./export-csv/csv-export.component";
import { ExcelExportSample1Component } from "./export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { TreeGridExcelExportSample1Component } from "./export-excel/excel-export-tree-grid-sample/excel-export-tree-grid-sample.component";
import { ExcelExportComponent } from "./export-excel/excel-export.component";
import { LocalizationSample1Component } from "./localization-samples/localization-sample-1/localization-sample-1.component";
import { LocalizationSample2Component } from "./localization-samples/localization-sample-2/localization-sample-2.component";
import { LocalizationSample3Component } from "./localization-samples/localization-sample-3/localization-sample-3.component";
import { ServicesRoutingModule } from "./services-routing.module";
import { TransactionBasePipe } from "./transaction/pipes/transaction-base.pipe";
import { TransactionBaseComponent } from "./transaction/transaction-base/transaction-base.component";
// tslint:enable:max-line-length

@NgModule({
    declarations: [
        CsvExportComponent,
        CsvExportSample1Component,
        TreeGridCsvExportSample1Component,
        ExcelExportComponent,
        ExcelExportSample1Component,
        TreeGridExcelExportSample1Component,
        LocalizationSample1Component,
        LocalizationSample2Component,
        LocalizationSample3Component,
        TransactionBaseComponent,
        TransactionBasePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ServicesRoutingModule,
        IgxGridModule,
        IgxTimePickerModule,
        IgxTreeGridModule,
        IgxListModule,
        IgxCardModule,
        IgxChipsModule,
        IgxExpansionPanelModule,
        IgxIconModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService,
        IgxTransactionService
    ]
})
export class ServicesModule { }
