import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetCell } from "igniteui-angular-spreadsheet/ES5/SpreadsheetCell";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    selector: "app-spreadsheet-activation",
    styleUrls: ["./spreadsheet-activation.component.scss"],
    templateUrl: "./spreadsheet-activation.component.html"
})
export class SpreadsheetActivationComponent implements OnInit {

    public activeCellText: string;

    @ViewChild("spreadsheet")
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
        const excelFile = "assets/WeeklySalesReport.xlsx";

        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public onClick() {
        this.spreadsheet.activeCell = new SpreadsheetCell(this.activeCellText);
    }
}
