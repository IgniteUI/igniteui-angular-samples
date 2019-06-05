import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    selector: "app-spreadsheet-configuring",
    styleUrls: ["./spreadsheet-configuring.component.scss"],
    templateUrl: "./spreadsheet-configuring.component.html"
})
export class SpreadsheetConfiguringComponent implements OnInit {

    @ViewChild("spreadsheet", { static: true })
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
        if (e.target.checked) {
            this.spreadsheet.activeWorksheet.protect();
        } else {
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

    public spreadsheetSelectionChanged(args: any) {
        const value = args.target.value;

        switch (value) {
            case "Normal": {
                this.spreadsheet.selectionMode = 0;
                break;
            }
            case "ExtendSelection": {
                this.spreadsheet.selectionMode = 1;
                break;
            }
            case "AddToSelection": {
                this.spreadsheet.selectionMode = 2;
                break;
            }
        }
    }

    public enterKeyNavDirectionChanged(args: any) {
        const value = args.target.value;

        switch (value) {
            case "Down": {
                this.spreadsheet.enterKeyNavigationDirection = 0;
                break;
            }
            case "Up": {
                this.spreadsheet.enterKeyNavigationDirection = 2;
                break;
            }
            case "Left": {
                this.spreadsheet.enterKeyNavigationDirection = 3;
                break;
            }
            case "Right": {
                this.spreadsheet.enterKeyNavigationDirection = 1;
                break;
            }
        }
    }

    public ngOnInit() {
        const excelFile = "assets/WeeklySalesReport.xlsx";

        ExcelUtility.loadFromUrl(excelFile).then((w) => {
            w.worksheets().removeAt(1);
            this.spreadsheet.workbook = w;
        });
    }
}
