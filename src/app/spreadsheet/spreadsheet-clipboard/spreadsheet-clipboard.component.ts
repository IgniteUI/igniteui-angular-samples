import { Component, OnInit, ViewChild } from "@angular/core";
import { ExcelUtility } from "../../utilities/excel-utility";

import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet/ES5/SpreadsheetAction";

@Component({
  selector: "app-spreadsheet-clipboard",
  styleUrls: ["./spreadsheet-clipboard.component.scss"],
  templateUrl: "./spreadsheet-clipboard.component.html"
})
export class SpreadsheetClipboardComponent implements OnInit {
    @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
        const excelFile = "assets/Sample1.xlsx";
        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public cut(): void {
        this.spreadsheet.executeAction(SpreadsheetAction.Cut);
    }

    public copy(): void {
        this.spreadsheet.executeAction(SpreadsheetAction.Copy);
    }

    public paste(): void {
        this.spreadsheet.executeAction(SpreadsheetAction.Paste);
    }

}
