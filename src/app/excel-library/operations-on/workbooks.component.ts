import {
    Component, ComponentFactoryResolver,
    Injector, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
// importing IG components:
import { IgxGridComponent } from "igniteui-angular";
import { TextFormatMode } from "igniteui-angular-excel/ES5/TextFormatMode";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";
// importing IG utilities:
import {
    WorkbookExportService
} from "../../utilities/excel-exporter";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    providers: [ WorkbookExportService ],
    selector: "app-workbooks",
    styleUrls: ["./workbooks.component.scss"],
    templateUrl: "./workbooks.component.html"
})
export class ExcelLibraryOperationsOnWorkbooksComponent implements OnInit {

    @ViewChild("gridContainer", {static: true})
    public gridContainerRef: ViewContainerRef;
    // openPlaceholder = "Choose Excel File:";
    public canSave = false;
    public wb: Workbook;
    public worksheetTables: string[];
    public selectedTable: string;
    // public data: any[];

    constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
    }

    public ngOnInit() {
        this.workbookCreate();
    }

    public workbookSave(): void {
        if (this.canSave) {
            // setting document properties to organize Excel files
            this.wb.documentProperties.author = "My Name";
            this.wb.documentProperties.company = "My Company";
            this.wb.documentProperties.title = "Employees and income";
            this.wb.documentProperties.status = "Completed";
            this.wb.documentProperties.category = "Financial";
            this.wb.documentProperties.keywords = "Financial;Company;Employees;income";

            // setting protection on workbook of Excel file
            this.wb.protection.allowEditStructure = true;
            this.wb.protection.allowEditWindows = true;

            this.wb.windowOptions.tabBarVisible = true;

            ExcelUtility.save(this.wb, "ExcelWorkbook").then((f) => {
                console.log("Saved:" + f);
            }, (e) => {
                console.error("ExcelUtility.Save Error:" + e);
            });
        }
    }

    public workbookLoad(input: HTMLInputElement): void {
        if (input.files == null || input.files.length === 0) {
            return;
        }
        console.log("Loaded:" + input.files[0].name);
        ExcelUtility.load(input.files[0]).then((w) => { this.workbookParse(w); },
            (e) => {
            console.error("ExcelUtility.Load Error:" + e);
        });
    }

    public workbookParse(wb: Workbook): void {
        if (wb === undefined) {
            this.worksheetTables = null;
            this.selectedTable = null;
        } else {
            const names = new Array<string>();
            for (const ws of wb.worksheets()) {
                for (const tbl of ws.tables()) {
                    names.push(ws.name + " - " + tbl.name);
                }
            }
            this.worksheetTables = names;
            this.selectedTable = names.length > 0 ? names[0] : null;
        }
        this.wb = wb;
        this.canSave = wb != null;
        this.onTableChange(this.selectedTable);
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
        const employeeColumns = ["Name", "Company", "Title", "Age", "Country", "Salary" ];
        for (let col = 0; col < employeeColumns.length; col++) {
            employeeSheet.columns(col).width = 5000;
            employeeHeader.setCellValue(col, employeeColumns[col]);
        }

        for (let i = 1; i < 20; i++) {
            const company = this.getItem(companies);
            const title = this.getItem(titles);
            const country = this.getItem(countries);
            const name = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const salary = this.getAmount(75000, 95000);
            const age = this.getRandom(20, 65);
            const wr = employeeSheet.rows(i);
            wr.setCellValue(0, name);
            wr.setCellValue(1, company);
            wr.setCellValue(2, title);
            wr.setCellValue(3, age);
            wr.setCellValue(4, country);
            wr.setCellValue(5, salary);
        }
        employeeSheet.tables().add("A1:F20", true);

        const expenseSheet = wb.worksheets().add("Expenses");
        const expanseHeader = expenseSheet.rows(0);
        const expanseNames = ["Year", "Computers", "Research", "Travel", "Salary", "Software" ];
        let expanseCol = 0;
        for (const key of expanseNames) {
            expenseSheet.columns(expanseCol).width = 5000;
            expanseHeader.setCellValue(expanseCol, key);
            for (let i = 1; i < 20; i++) {
                const wr = expenseSheet.rows(i);
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
        expenseSheet.tables().add("A1:F20", true);

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
        incomeSheet.tables().add("A1:F20", true);
        this.workbookParse(wb);
    }

    public onTableChange(newValue: string) {
        if (!newValue) {
            this.onTableSelected(null);
        } else {
            const parts = newValue.split(" - ");
            const worksheetName = parts[0];
            const tableName = parts[1];
            for (const ws of this.wb.worksheets()) {
                if (ws.name === worksheetName) {
                    for (const tbl of ws.tables()) {
                        if (tbl.name === tableName) {
                          this.onTableSelected(tbl);
                          return;
                        }
                    }
                }
            }
        }
    }

    public onTableSelected(table: WorksheetTable) {
        this.gridContainerRef.clear();

        if (table) {
            const headers = new Array<string>();
            // expanseCollect the keys for the data
            for (const expanseCol of table.columns()) {
                headers.push(expanseCol.name);
            }

            const ws = table.worksheet;
            const region = table.dataAreaRegion;
            const data = new Array<any>();

            for (let r = region.firstRow; r <= region.lastRow; r++) {
                const row = {};
                const excelRow = ws.rows(r);
                for (let c = 0; c < headers.length; c++) {
                    row[headers[c]] = excelRow.getCellText(c + region.firstColumn, TextFormatMode.IgnoreCellWidth);
                }
                data.push(row);
            }

            const gridFactory = this.resolver.resolveComponentFactory(IgxGridComponent);
            const gridRef = this.gridContainerRef.createComponent(gridFactory);
            gridRef.instance.autoGenerate = true;
            gridRef.instance.data = data;
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
        return "$" + s.replace(".00", "");
    }
}
