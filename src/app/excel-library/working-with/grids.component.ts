import { Component, OnInit, ViewChild } from "@angular/core";
// importing IG components:
import { IgxGridComponent, SortingDirection, DefaultSortingStrategy } from "igniteui-angular";
import { FormatConditionIconSet } from "igniteui-angular-excel/ES5/FormatConditionIconSet";
// importing IG utilities:
import {
    IWorkbookExportEndedEventArgs,
    WorkbookExportOptions,
    WorkbookExportService
} from "../../utilities/excel-exporter";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    providers: [ WorkbookExportService ],
    selector: "app-grids",
    styleUrls: ["./grids.component.scss"],
    templateUrl: "./grids.component.html"
})
export class ExcelLibraryWorkingWithGridsComponent implements OnInit {

    @ViewChild("grid", { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public data: any[];

    constructor(private exporter: WorkbookExportService) {
        this.initData();

        exporter.onWorkbookExportEnded.subscribe({ next: (e: IWorkbookExportEndedEventArgs) => {
            // the discontinued column shows a check/x icon so we can do that in the workbook
            // using an icon conditional format
            const iconRegion = e.getDataRegionFromHeader("Euro");
            if (iconRegion != null) {
                const iconFormat = e.worksheet.conditionalFormats().addIconSetCondition(iconRegion.toString(),
                FormatConditionIconSet.IconSet3Symbols);
                iconFormat.showValue = false;
            }
            ExcelUtility.save(e.workbook, e.fileName);
        }});
    }

    public exportGrid() {
        const opt = new WorkbookExportOptions("ExcelWorkbooks");
        opt.exportAsTable = true;
        // we want to create an icon set for the Euro field and excel
        // conditional formatting doesn't work on boolean
        opt.columnOptions = {
            Euro : { valueFormatter: (v) => v === true ? 1 : v === false ? 0 : v }
        };
        this.exporter.export(this.grid, opt);
    }

    public ngOnInit() {
        this.grid.sortingExpressions = [
            // tslint:disable-next-line:object-literal-sort-keys
            { fieldName: "ContactTitle", dir: SortingDirection.Asc, ignoreCase: true,
              strategy: DefaultSortingStrategy.instance() },
            // tslint:disable-next-line:object-literal-sort-keys
            { fieldName: "Country", dir: SortingDirection.Desc, ignoreCase: true,
              strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public initData(): void {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" ];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" ];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams" ];
        const cities = ["London", "Paris", "Boston", "Berlin" ];
        const countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil" ];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager" ];
        const streets = ["Main St", "Madison St", "Broad Way" ];

        const dataSource = new Array<any>();
        // generating excel data source
        for (let i = 0; i < 20; i++) {
            const companyName = this.getItem(companies);
            const contactTitle = this.getItem(titles);
            const country = this.getItem(countries);
            const city = this.getItem(cities);
            const contactName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const address = this.getRandom(10, 60) + " " + this.getItem(streets);
            const postalCode = this.getRandom(100, 400) + " " + this.getRandom(50, 90);
            const customerID = "CID-" + this.getRandom(500, 900);
            const salary = this.getSalary(85000, 200000);
            const age = this.getRandom(20, 65);
            const isEuropean = country !== "USA" && country !== "Brazil";
            const dataItem = {
                Address: address,
                Age: age,
                City: city,
                CompanyName: companyName,
                ContactName: contactName,
                ContactTitle: contactTitle,
                Country: country,
                Euro: isEuropean,
                ID: customerID,
                PostalCode: postalCode,
                Salary: salary
            };
            dataSource.push(dataItem);
        }
        this.data = dataSource;
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }

    public getSalary(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return "$" + s.replace(".00", "");
    }
}
