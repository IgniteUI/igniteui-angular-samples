import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    selector: "app-spreadsheet-configuring",
    styleUrls: ["./spreadsheet-configuring.component.scss"],
    templateUrl: "./spreadsheet-configuring.component.html"
})
export class SpreadsheetConfiguringComponent implements OnInit {

    @ViewChild("spreadsheet")
    public spreadsheet: IgxSpreadsheetComponent;

    public spreadsheetSelectionMode: string;
    public enterKeyNavDirection: string;
    public isProtected: boolean;
    public isFormulaBarVisible: boolean;
    public areGridlinesVisible: boolean;
    public areHeadersVisible: boolean;
    public isEnterKeyNavEnabled: boolean;

    public spreadsheetZoomLevel: number;

    constructor() {
        this.spreadsheetSelectionMode = "Normal";
        this.isProtected = false;
        this.isFormulaBarVisible = true;
        this.areGridlinesVisible = true;
        this.areHeadersVisible = true;
        this.isEnterKeyNavEnabled = false;
        this.enterKeyNavDirection = "Down";
        this.spreadsheetZoomLevel = 100;
    }

    public onProtectedChanged(e: any) {
        // ***DOES NOT CURRENTLY WORK WITH WORKBOOK.PROTECT***
        if (e.target.checked) {
            // this.spreadsheet.workbook.protect();
            this.spreadsheet.activeWorksheet.protect();
        } else {
            // this.spreadsheet.workbook.unprotect();
            this.spreadsheet.activeWorksheet.unprotect();
        }
    }

    public onTabBarAreaVisibilityChanged(e: any) {
        if (e.target.checked) {
            this.spreadsheet.workbook.windowOptions.tabBarVisible = true;
        } else {
            this.spreadsheet.workbook.windowOptions.tabBarVisible = false;
        }
    }

    public ngOnInit() {
        const excelFile = "../../assets/Sample1.xlsx";

        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            w.worksheets().removeAt(1);
            this.spreadsheet.workbook = w;
        });
    }
}
