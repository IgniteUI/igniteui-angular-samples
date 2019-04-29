import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
// importing IG components:
import { IgxGridComponent } from "igniteui-angular";
import { SparklineType } from "igniteui-angular-excel/ES5/SparklineType";
import {
    WorkbookExportService
} from "../../utilities/excel-exporter";
import { ExcelUtility } from "../../utilities/excel-utility";
import { Workbook } from 'igniteui-angular-excel/ES5/Workbook';
import { WorkbookFormat } from 'igniteui-angular-excel/ES5/excel.core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ WorkbookExportService ],
    selector: "app-sparklines",
    styleUrls: ["./sparklines.component.scss"],
    templateUrl: "./sparklines.component.html"
})
export class ExcelLibraryWorkingWithSparklinesComponent implements OnInit {

    @ViewChild("grid", { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public data: any[];
    public exportAsTable: boolean = true;

    constructor() {
    }

    public exportGrid() {
        const headers = ["Orders", "Company Name", "Contact Name", "Contact Title", "Country"];
        const keys = ["Orders", "CompanyName", "ContactName", "ContactTitle", "Country"];
        const orderHeaders = ["Customer ID", "Order ID", "Freight"];

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const exportSheet = wb.worksheets().add("Sheet1");
        const ordersSheet = wb.worksheets().add("Orders");

        exportSheet.defaultColumnWidth = 300 * 20;
        exportSheet.defaultRowHeight = 50 * 20;

        for(let i = 0; i < headers.length; i++) {
            exportSheet.rows(0).cells(i).value = headers[i];
        }

        for(let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            const orders = item.Orders;

            for(let j = 0; j < orders.length; j++){
                ordersSheet.rows(i).cells(j).value = orders[j].Freight;
            }
        }

        for(let i = 0; i < this.data.length; i++) {

            const index = (i + 1).toString();
            const dataItem = this.data[i];

            for (let j = 0; j < headers.length; j++) {
                if (j === 0) {
                    exportSheet.sparklineGroups().add(SparklineType.Column,
                         "A" + (i + 2).toString(), "Orders!A" + index + ":F" + index);
                } else {
                    exportSheet.rows(i + 1).cells(j).value = dataItem[keys[j]];
                }
            }
        }

        ExcelUtility.save(wb, "myWorksheet");
    }

    public ngOnInit(): void {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" ];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" ];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams", "Novak" ];
        const cities = ["London", "Paris", "Boston", "Berlin" ];
        const countries = ["UK", "France", "USA", "Germany" ];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager" ];
        const streets = ["Main St", "Madison St", "Broad Way" ];
        const shippings = ["Federal Ex", "UPS Air", "UPS Ground" ];

        const data = new Array<any>();
        // generating excel data source
        for (let i = 0; i < 10; i++) {
            const companyName = this.getItem(companies);
            const contactTitle = this.getItem(titles);
            const country = this.getItem(countries);
            const city = this.getItem(cities);
            const shipping = this.getItem(shippings);
            const contactName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const employeeName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const address = this.getRandom(10, 60) + " " + this.getItem(streets);
            const postalCode = this.getRandom(100, 400) + " " + this.getRandom(50, 90);
            const customerID = "CID-" + this.getRandom(500, 900);
            const phone = this.getRandom(500, 900) + "-" + this.getRandom(200, 900) + "-" + this.getRandom(2000, 9000);
            const fax = this.getRandom(500, 900) + "-" + this.getRandom(200, 900) + "-" + this.getRandom(2000, 9000);

            const companyOrders = new Array<any>();
            for (let o = 0; o < 6; o++) {
                const reqDate = "2020-06-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const shipDate = "2020-06-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const orderDate = "2020-05-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const order = {
                    ContactName: contactName,
                    CustomerID: customerID,
                    EmployeeID: this.getRandom(1000, 8000),
                    EmployeeName: employeeName,
                    Freight: this.getRandom(1, 10),
                    OrderDate: orderDate,
                    OrderID: this.getRandom(3000, 5000),
                    RequiredDate: reqDate,
                    ShipAddress: address,
                    ShipCity: city,
                    ShipCountry: country,
                    ShipName: companyName,
                    ShipPostalCode: postalCode,
                    ShipRegion: null,
                    ShipVia: this.getRandom(1, 10),
                    ShippedDate: shipDate,
                    ShipperID: this.getRandom(1, 10),
                    ShipperName: shipping,
                    TotalItems: this.getRandom(10, 20),
                    TotalPrice: this.getRandom(400, 600)
                };
                companyOrders.push(order);
            }
            const dataItem = {
                Address: address,
                City: city,
                CompanyName: companyName,
                ContactName: contactName,
                ContactTitle: contactTitle,
                Country: country,
                Fax: fax,
                ID: customerID,
                Orders: companyOrders,
                Phone: phone,
                PostalCode: postalCode,
                Region: null
            };
            data.push(dataItem);
        }
        this.data = data;

    }
    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }
}
