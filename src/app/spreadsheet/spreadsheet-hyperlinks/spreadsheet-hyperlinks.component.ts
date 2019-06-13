import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetCell } from "igniteui-angular-spreadsheet/ES5/SpreadsheetCell";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    selector: "app-spreadsheet-hyperlinks",
    styleUrls: ["./spreadsheet-hyperlinks.component.scss"],
    templateUrl: "./spreadsheet-hyperlinks.component.html"
})
export class SpreadsheetHyperlinksComponent implements OnInit {

    @ViewChild("spreadsheet", {static: true})
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
        const excelFile = "assets/HyperlinkWorkbook.xlsx";

        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}
