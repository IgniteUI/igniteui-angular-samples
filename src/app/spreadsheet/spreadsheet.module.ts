import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-module";

import { SpreadsheetRoutingModule } from "./spreadsheet-routing.module";

import { SpreadsheetActivationComponent } from "./spreadsheet-activation/spreadsheet-activation.component";
import { SpreadsheetClipboardComponent } from "./spreadsheet-clipboard/spreadsheet-clipboard.component";
import { SpreadsheetCommandsComponent } from "./spreadsheet-commands/spreadsheet-commands.component";
import { SpreadsheetCondFormatComponent } from "./spreadsheet-cond-formatting/spreadsheet-cond-formatting.component";
import { SpreadsheetConfiguringComponent } from "./spreadsheet-configuring/spreadsheet-configuring.component";
import { SpreadsheetDataValidComponent } from "./spreadsheet-data-validation/spreadsheet-data-validation.component";
import { SpreadsheetFilterDialogComponent } from "./spreadsheet-filter-dialog/spreadsheet-filter-dialog.component";
import { SpreadsheetFormatDialogComponent } from "./spreadsheet-format-dialog/spreadsheet-format-dialog.component";
import { SpreadsheetHyperlinksComponent } from "./spreadsheet-hyperlinks/spreadsheet-hyperlinks.component";
import { SpreadsheetOverviewComponent } from "./spreadsheet-overview/spreadsheet-overview.component";
import { SpreadsheetSortDialogComponent } from "./spreadsheet-sort-dialog/spreadsheet-sort-dialog.component";

@NgModule({
    declarations: [
        SpreadsheetActivationComponent,
        SpreadsheetClipboardComponent,
        SpreadsheetCommandsComponent,
        SpreadsheetCondFormatComponent,
        SpreadsheetDataValidComponent,
        SpreadsheetFilterDialogComponent ,
        SpreadsheetFormatDialogComponent,
        SpreadsheetHyperlinksComponent,
        SpreadsheetOverviewComponent,
        SpreadsheetSortDialogComponent,
        SpreadsheetConfiguringComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SpreadsheetRoutingModule,
        IgxExcelModule,
        IgxSpreadsheetModule
    ]
})
export class SpreadsheetModule { }
