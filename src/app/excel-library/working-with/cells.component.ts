import {
    Component, ComponentFactoryResolver,
    Injector, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
// importing IG components:
import { CellReferenceMode } from "igniteui-angular-excel/ES5/CellReferenceMode";
import { WorksheetMergedCellsRegion} from "igniteui-angular-excel/ES5/excel.core";
import { FormattedString } from "igniteui-angular-excel/ES5/FormattedString";
import { Formula } from "igniteui-angular-excel/ES5/Formula";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetCellComment } from "igniteui-angular-excel/ES5/WorksheetCellComment";
import {
    WorkbookExportService
} from "../../utilities/excel-exporter";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    providers: [ WorkbookExportService ],
    selector: "app-cells",
    styleUrls: ["./cells.component.scss"],
    templateUrl: "./cells.component.html"
})
export class ExcelLibraryWorkingWithCellsComponent implements OnInit {

    @ViewChild("gridContainer", {read: ViewContainerRef})
    public gridContainerRef: ViewContainerRef;
    public canSave = false;
    public wb: Workbook;
    public ws: Worksheet;
    public worksheetRegion: string[];
    public selectedRegion: string;
    public cellFeatures: string[];

    constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
    }

    public ngOnInit() {
        this.workbookCreate();
    }
    public workbookSave(): void {
        if (this.canSave) {
            ExcelUtility.save(this.wb, "ExcelWorkbook").then((f) => {
                console.log("Saved:" + f);
            }, (e) => {
                console.error("ExcelUtility.Save Error:" + e);
            });
        }
    }
    public workbookParse(wb: Workbook): void {
        if (wb === undefined) {
            this.worksheetRegion = null;
            this.selectedRegion = null;
        } else {
            const names = new Array<string>();
            for (const ws of wb.worksheets()) {
                for (const tbl of ws.tables()) {
                    names.push(ws.name + " - " + tbl.name);
                }
            }
            this.worksheetRegion = names;
            this.selectedRegion = names.length > 0 ? names[0] : null;
        }
        this.wb = wb;
        this.canSave = wb != null;
    }
    public workbookCreate(): void {
        const wb = new Workbook(WorkbookFormat.Excel2007);
        const employeeSheet = wb.worksheets().add("Employees");
        const employeeHeader = employeeSheet.rows(0);
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" ];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" ];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams" ];
        const countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil" ];
        const titles = ["Sales Rep.", "Engineer", "Administrator", "Manager" ];
        const employeeColumns = ["Name", "Company", "Title", "Age", "Country"];
        for (let col = 0; col < employeeColumns.length; col++) {
            employeeSheet.columns(col).width = 5000;
            employeeHeader.setCellValue(col, employeeColumns[col]);
        }
        for (let i = 1; i < 20; i++) {
            const company = this.getItem(companies);
            const title = this.getItem(titles);
            const country = this.getItem(countries);
            const name = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const salary = this.getRandom(45000, 95000);
            const age = this.getRandom(20, 65);
            const wr = employeeSheet.rows(i);
            wr.setCellValue(0, name);
            wr.setCellValue(1, company);
            wr.setCellValue(2, title);
            wr.setCellValue(3, age);
            wr.setCellValue(4, country);
            wr.setCellValue(5, salary);
        }
        const expanseSheet = wb.worksheets().add("Expanses");
        const expanseHeader = expanseSheet.rows(0);
        const expanseNames = ["Year", "Computers", "Research", "Travel", "Salary", "Software" ];
        let expanseCol = 0;
        for (const key of expanseNames) {
            expanseSheet.columns(expanseCol).width = 5000;
            expanseHeader.setCellValue(expanseCol, key);
            for (let i = 1; i < 20; i++) {
                const wr = expanseSheet.rows(i);
                if (key === "Year") {
                    wr.setCellValue(expanseCol, 2010 + i);
                } else if (key === "Computers") {
                    wr.setCellValue(expanseCol, this.getAmount(50000, 65000));
                } else if (key === "Research") {
                    wr.setCellValue(expanseCol, this.getAmount(150000, 165000));
                } else if (key === "Travel") {
                    wr.setCellValue(expanseCol, this.getAmount(20000, 25000));
                } else if (key === "Salary") {
                    wr.setCellValue(expanseCol, this.getAmount(4000000, 450000));
                } else if (key === "Software") {
                    wr.setCellValue(expanseCol, this.getAmount(100000, 150000));
                }
            }
            expanseCol++;
        }
        const incomeSheet = wb.worksheets().add("Income");
        const incomeHeader = incomeSheet.rows(0);
        const incomeNames = ["Year", "Phones", "Computers", "Software", "Services", "Royalties" ];
        let incomeCol = 0;
        for (const key of incomeNames) {
            incomeSheet.columns(incomeCol).width = 5000;
            incomeHeader.setCellValue(incomeCol, key);
            for (let i = 1; i < 20; i++) {
                const wr = incomeSheet.rows(i);
                if (key === "Year") {
                    wr.setCellValue(incomeCol, 2010 + i);
                } else if (key === "Software") {
                    wr.setCellValue(incomeCol, this.getAmount(700000, 850000));
                } else if (key === "Computers") {
                    wr.setCellValue(incomeCol, this.getAmount(250000, 265000));
                } else if (key === "Royalties") {
                    wr.setCellValue(incomeCol, this.getAmount(400000, 450000));
                } else if (key === "Phones") {
                    wr.setCellValue(incomeCol, this.getAmount(6000000, 650000));
                } else if (key === "Services") {
                    wr.setCellValue(incomeCol, this.getAmount(700000, 750000));
                }
            }
            incomeCol++;
        }
        this.workbookParse(wb);
    }
    public onCommentChanged(input: HTMLInputElement): void {
        const ws = this.wb.worksheets(0);
        const wr = ws.rows(0);
        const d = new WorksheetCellComment();
        const formatted = new FormattedString("This cell has a reference name.");
        if (input.checked === true) {
            // Cell Comment
            d.text = formatted;
            wr.cells(0).comment = d;
        } else {
            wr.cells(0).comment = null;
        }
    }
    public onFormulaChanged(input: HTMLInputElement): void {
        // Cell Formula
        const ws = this.wb.worksheets(0);
        let formula: Formula;
        if (input.checked === true) {
            // Using a Formula object to apply a formula
            formula = Formula.parse("=AVERAGE(F2:F20)", CellReferenceMode.A1);
            formula.applyTo(ws.rows(21).cells(5));
            ws.rows(20).cells(5).value = "Average Salary";
        } else {
            if (ws.rows(21).cells(5).formula != null) {
                formula = ws.rows(21).cells(5).formula;
            }
            if (formula != null) {
                ws.rows(21).cells(5).value = null;
                ws.rows(20).cells(5).value = null;
            }
        }
    }
    public onMergeChanged(input: HTMLInputElement): void {
        let mergedRegion: WorksheetMergedCellsRegion;
        if (input.checked === true) {
            // Using merge cells
             this.wb.worksheets(0).rows(2).cells(2).value = "Engineer";
             this.wb.worksheets(0).rows(3).cells(2).value = "Engineer";
             this.wb.worksheets(0).rows(4).cells(2).value = "Engineer";
             this.wb.worksheets(0).mergedCellsRegions().add(2, 2, 4, 2);
             mergedRegion = this.wb.worksheets(0).mergedCellsRegions(0);
        } else {
            if (this.wb.worksheets(0).mergedCellsRegions().count === 1) {
                    mergedRegion = this.wb.worksheets(0).mergedCellsRegions(0);
                }
            if (mergedRegion != null) {
                this.wb.worksheets(0).mergedCellsRegions().removeAt(0);
                this.wb.worksheets(0).rows(2).cells(2).value = "Engineer";
                this.wb.worksheets(0).rows(3).cells(2).value = "Engineer";
                this.wb.worksheets(0).rows(4).cells(2).value = "Engineer";
            }
        }
    }
    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }
    public getAmount(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return s;
    }
}
