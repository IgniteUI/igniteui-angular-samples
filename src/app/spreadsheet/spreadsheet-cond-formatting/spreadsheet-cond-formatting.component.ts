import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    selector: "app-spreadsheet-cond-formatting",
    styleUrls: ["./spreadsheet-cond-formatting.component.scss"],
    templateUrl: "./spreadsheet-cond-formatting.component.html"
})
export class SpreadsheetCondFormatComponent implements OnInit {

    @ViewChild("spreadsheet")
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
        const excelFile = "assets/ConditionalFormatData.xlsx";

        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

}
