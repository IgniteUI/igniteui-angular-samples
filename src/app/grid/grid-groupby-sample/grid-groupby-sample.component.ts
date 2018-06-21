import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    IgxColumnComponent,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryOperand,
    IgxSummaryResult,
    SortingDirection,
    ISortingExpression
} from "igniteui-angular";
import { LOCAL_DATA } from "./data";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-groupby-sample",
    styleUrls: ["./grid-groupby-sample.component.scss"],
    templateUrl: "./grid-groupby-sample.component.html"
})
export class GridGroupBySampleComponent {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];

    constructor() {
        this.data = LOCAL_DATA;
        this.expr = [{fieldName:"ShipCountry", dir: SortingDirection.Asc, ignoreCase: false},{fieldName: "ShipCity", dir: SortingDirection.Asc, ignoreCase: false}];
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
    public calc2017(values: any[]) {
        const startDate = new Date("1/1/2017");
        const endDate = new Date("12/31/2017");
        return values.filter(x => x.OrderDate >= startDate && x.OrderDate <= endDate).length;
    }
}
