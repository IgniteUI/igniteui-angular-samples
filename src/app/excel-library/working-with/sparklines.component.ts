import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
// importing IG components:
import { IgxGridComponent } from "igniteui-angular";
import { SparklineType } from "igniteui-angular-excel/ES5/SparklineType";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetRegion } from "igniteui-angular-excel/ES5/WorksheetRegion";
import {
    IWorkbookExportEndedEventArgs,
    IWorksheetCellExportingEventArgs,
    IWorksheetRowExportedEventArgs,
    WorkbookExportOptions,
    WorkbookExportService
} from "../../utilities/excel-exporter";
import { ExcelUtility } from "../../utilities/excel-utility";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ WorkbookExportService ],
    selector: "app-sparklines",
    styleUrls: ["./sparklines.component.scss"],
    templateUrl: "./sparklines.component.html"
})
export class ExcelLibraryWorkingWithSparklinesComponent implements OnInit {
    @ViewChild("grid", { static: true })
    public grid: IgxGridComponent;
    public data: any[];
    public exportAsTable: boolean = true;

    constructor(private exporter: WorkbookExportService) {
        exporter.onWorksheetCellExporting.subscribe({ next: (e: IWorksheetCellExportingEventArgs) => {
            if (e.dataColumnHeader === "Order History") {
                let wsOrderDetails: Worksheet;
                const details = e.cellValue as any[];
                e.cellValue = null;
                // the grid only contains flat data but we need the child data to provide
                // the values for the sparkline. to do that we will store those rows manually
                // on another worksheet
                if (!e.row.workbook.worksheets().exists("OrderDetails")) {
                    wsOrderDetails = e.row.workbook.worksheets().add("OrderDetails");
                    const headerRow = wsOrderDetails.rows(0);
                    headerRow.setCellValue(0, "Customer ID");
                    headerRow.setCellValue(1, "Order ID");
                    headerRow.setCellValue(2, "Freight");
                } else {
                    wsOrderDetails = e.row.workbook.worksheets("OrderDetails");
                }

                let rowIdx = wsOrderDetails.rows().count;
                const startRowIdx = rowIdx;
                for (const detail of details) {
                    const detailRow = wsOrderDetails.rows(rowIdx);
                    detailRow.setCellValue(0, detail.CustomerID);
                    detailRow.setCellValue(1, detail.OrderID);
                    detailRow.setCellValue(2, detail.Freight);
                    rowIdx++;
                }

                const region = new WorksheetRegion(wsOrderDetails, startRowIdx, 2, rowIdx - 1, 2, false);
                const dataRegion = region.toString(e.row.workbook.cellReferenceMode, true, true, true);

                if (e.row.worksheet.sparklineGroups().count === 0) {
                    const cells = e.row.cells(e.worksheetColumnIndex).toString();
                    e.row.worksheet.sparklineGroups().add(SparklineType.Column, cells, dataRegion);
                } else {
                    e.row.worksheet.sparklineGroups(0).sparklines().add(e.row.index,
                        e.worksheetColumnIndex, dataRegion);
                }
            }
        }});

        exporter.onWorksheetRowExported.subscribe({ next: (e: IWorksheetRowExportedEventArgs) => {
            e.row.height = 1000;
        }});

        exporter.onWorkbookExportEnded.subscribe({ next: (e: IWorkbookExportEndedEventArgs) => {
            for (let c = e.dataRegion.firstColumn; c <= e.dataRegion.lastColumn; c++) {
                e.worksheet.columns(c).autoFitWidth();
            }
            ExcelUtility.save(e.workbook, e.fileName);
        }});
    }

    public exportGrid() {
        const opt = new WorkbookExportOptions("grid_sparklines");
        opt.exportAsTable = this.exportAsTable;
        this.exporter.export(this.grid, opt);
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
