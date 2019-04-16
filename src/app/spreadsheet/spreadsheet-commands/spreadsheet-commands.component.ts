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
    @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
        const excelFile = "assets/Sample1.xlsx";
        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public zoomIn(): void {
        // Spreadsheet function changed from 'executeCommand' to 'executeAction'
        this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
    }

    public zoomOut(): void {
        // Spreadsheet function changed from 'executeCommand' to 'executeAction'
        this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
    }
}
