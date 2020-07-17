import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    DefaultSortingStrategy,
    IgxGridComponent,
    SortingDirection
} from "igniteui-angular";
import { INVOICE_DATA } from "../../data/invoiceData";
import { DatePipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-groupby-custom-sample",
    styleUrls: ["./grid-groupby-custom-sample.component.scss"],
    templateUrl: "./grid-groupby-custom-sample.component.html"
})
export class GridGroupByCustomSampleComponent {
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public sortingStrategy;
    public groupByOptions = [
        { name: "Day", ref: DaySortingStrategy.instance() },
        { name: "Week", ref: WeekSortingStrategy.instance() },
        { name: "Month", ref: BaseSortingStrategy.instance() },
        { name: "Year", ref: BaseSortingStrategy.instance() }
    ];

    public groupByMode = this.groupByOptions[0].name;
    public initialExpr;

    constructor() {
        this.data = INVOICE_DATA;
        this.sortingStrategy = this.groupByOptions[0].ref;

        this.initialExpr = [
            {
                dir: SortingDirection.Asc,
                fieldName: "OrderDate",
                ignoreCase: true,
                strategy: this.sortingStrategy,
                groupingComparer: (a, b) => {
                    const dateA = this.sortingStrategy.getParsedDate(a);
                    const dateB = this.sortingStrategy.getParsedDate(b);
                    if (this.groupByMode === 'Month') {
                        return dateA.month === dateB.month ? 0 : -1;
                    } else if (this.groupByMode === "Year") {
                        return dateA.year === dateB.year ? 0 : -1;
                    } else if (this.groupByMode === "Week") {
                       return this.sortingStrategy.getWeekOfDate(a) === this.sortingStrategy.getWeekOfDate(b) ? 0 : -1;
                    }
                    return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
                }
            }
        ];
    }

    public selectionChange(event: any) {
        this.groupByMode = event.newSelection.value.name;
        this.sortingStrategy = event.newSelection.value.ref;

        // Changing groupingExpression and calling the setter again
        const expr = this.grid1.groupingExpressions.find(
            (e) => e.fieldName === "OrderDate"
        );
        if (expr) {
            expr.strategy = this.sortingStrategy;
            const gexpr = this.grid1.groupingExpressions;
            this.grid1.groupingExpressions = [];
            this.grid1.groupingExpressions = gexpr;
        }
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public formatGroupByRow(val: Date) {
        if (this.groupByMode === "Month") {
            const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
            return months[val.getMonth()] + ` ${val.getFullYear()} `;
        } else if (this.groupByMode === "Year") {
            return val.getFullYear();
        } else if (this.groupByMode === "Week") {
            return val.getFullYear() + ` week ${this.sortingStrategy.getWeekOfDate(val)}`;
        }
        return val.toLocaleDateString("en-US")
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
}

class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : dateA.month  < dateB.month ? -1 : dateA.month > dateB.month ? 1 : 0;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : dateA.month  < dateB.month ? -1 : dateA.month > dateB.month ? 1 :
                dateA.day < dateB.day ? -1 : dateA.day > dateB.day ? 1 : 0;
    }
}

class WeekSortingStrategy extends BaseSortingStrategy {

    public getWeekOfDate(a: any) {
       return parseInt(new DatePipe("en-US").transform(a, 'w'), 10);
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        const weekA = this.getWeekOfDate(a);
        const weekB = this.getWeekOfDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : weekA < weekB ? -1 : weekA > weekB ? 1 : 0;
    }
}
