import {
    AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef
} from "@angular/core";
import { CustomFilterCondition, ExcelComparisonOperator, OrderedSortCondition, SortDirection
} from "igniteui-angular-excel/ES5/excel.core";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";

import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-tables",
    styleUrls: ["./tables.component.scss"],
    templateUrl: "./tables.component.html"
})
export class ExcelLibraryWorkingWithTablesComponent implements AfterViewInit {

    public data: any;
    public isSorted: boolean;
    public isFiltered: boolean;
    public workbook: Workbook;

    constructor() {
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
        // TODO bind excel data to the chart
        // this.chart.dataSource = this.data;
    }

    public initData(): void {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams"];
        const cities = ["London", "Paris", "Boston", "Berlin"];
        const countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil"];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager"];
        const streets = ["Main St", "Madison St", "Broad Way"];
        const headers = ["Company Name",
            "Contact Title",
            "Country",
            "City",
            "Contact Name",
            "Address",
            "Postal Code",
            "Customer ID",
            "Salary",
            "Age"];
        const dataSource = new Array<any>();
        // generating excel data source
        this.workbook = new Workbook(WorkbookFormat.Excel2007);
        const sheet = this.workbook.worksheets().add("Sheet1");

        for (let i = 0; i < headers.length; i++) {
            sheet.rows(0).cells(i).value = headers[i];
        }

        for (let i = 1; i < 20; i++) {
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
            const dataItem = [
                companyName,
                contactTitle,
                country,
                city,
                contactName,
                address,
                postalCode,
                customerID,
                salary,
                age
            ];

            for (let j = 0; j < dataItem.length; j++) {
                sheet.rows(i).cells(j).value = dataItem[j];
            }
        }
    }

    public exportData() {

        this.initData();

        const sheet = this.workbook.worksheets(0);
        sheet.defaultColumnWidth = 220 * 20;
        const table = sheet.tables().add("A1:J20", true);

        if (this.isSorted) {
            table.sortSettings.sortConditions().addItem(table.columns(0),
            new OrderedSortCondition(SortDirection.Ascending));
        }

        if (this.isFiltered) {
            table.columns(2).applyCustomFilter(new CustomFilterCondition(ExcelComparisonOperator.Equals, "USA"));
        }

        ExcelUtility.save(this.workbook, "tableSample");
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
