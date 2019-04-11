import { Component, OnInit, ViewChild } from "@angular/core";
import { ExcelUtility } from "../../utilities/excel-utility";

import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";

@Component({
  selector: "app-spreadsheet-overview",
  styleUrls: ["./spreadsheet-overview.component.scss"],
  templateUrl: "./spreadsheet-overview.component.html"
})
export class SpreadsheetOverviewComponent implements OnInit {
    @ViewChild("ss", { read: IgxSpreadsheetComponent })
    public ss: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {
    }

    public openFile(input: HTMLInputElement): void {
        if (input.files == null || input.files.length === 0) {
        return;
        }

        console.log("Files:" + input.files[0].name);

        ExcelUtility.load(input.files[0]).then((w) => {
        this.ss.workbook = w;
        }, (e) => {
            console.error("Workbook Load Error:" + e);
        });
    }
}
