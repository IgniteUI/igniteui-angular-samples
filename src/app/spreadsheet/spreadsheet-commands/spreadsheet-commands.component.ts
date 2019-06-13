import { Component, OnInit, ViewChild } from "@angular/core";
import { ExcelUtility } from "../../utilities/excel-utility";

import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet/ES5/SpreadsheetAction";

@Component({
  selector: "app-spreadsheet-commands",
  styleUrls: ["./spreadsheet-commands.component.scss"],
  templateUrl: "./spreadsheet-commands.component.html"
})
export class SpreadsheetCommandsComponent implements OnInit {
    @ViewChild("spreadsheet", {static: true})
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
        const excelFile = "assets/Sample1.xlsx";
        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public zoomIn(): void {
        this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
    }

    public zoomOut(): void {
        this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
    }
}
