import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    IgxColumnComponent,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryOperand,
    IgxSummaryResult,
    SortingDirection
} from "igniteui-angular";
import { LOCAL_DATA } from "./data";
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-groupby-sample",
    styleUrls: ["./grid-groupby-sample.component.scss"],
    templateUrl: "./grid-groupby-sample.component.html"
})
export class GridGroupBySampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    public data;

    constructor() {
        this.data = LOCAL_DATA;
    }

    public ngOnInit() {
    }

    public ngAfterViewInit() {
        this.grid1.groupBy({ fieldName: "ShipCountry", dir: SortingDirection.Asc, ignoreCase: false });
        this.grid1.groupBy({ fieldName: "ShipCity", dir: SortingDirection.Asc, ignoreCase: false });
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }
    public func(values: any[]) {
        let count = 0;
        const startDate = new Date("1/1/2017");
        const endDate = new Date("12/31/2017");
        values.forEach((val) => {
            if (val.OrderDate >= startDate && val.OrderDate <= endDate) {
                count++;
            }
        });
        return count;
    }
}
