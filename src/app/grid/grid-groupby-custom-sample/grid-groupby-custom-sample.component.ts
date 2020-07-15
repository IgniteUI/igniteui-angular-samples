import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    DefaultSortingStrategy,
    IgxGridComponent,
    SortingDirection
} from "igniteui-angular";
import { INVOICE_DATA } from "../../data/invoiceData";

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
                        return dateA.week === dateB.week ? 0 : -1;
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
            return new Intl.DateTimeFormat("en-US", { month: 'long', year: 'numeric' }).format(val);
        } else if (this.groupByMode === "Year") {
            return new Intl.DateTimeFormat("en-US", { year: 'numeric' }).format(val);
        } else if (this.groupByMode === "Week") {
            return new Intl.DateTimeFormat("en-US", { year: 'numeric' }).format(val) + " week " + this.sortingStrategy.getWeekOfDate(val);
        }
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
}

class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: parseInt(new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date), 10),
            month: parseInt(new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(date), 10),
            year: parseInt(new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date), 10),
            week: this.getWeekOfDate(date)
        };
    }

    public getWeekOfDate(a: any) {
        const firstJan = new Date(a.getFullYear(), 0, 1);
        const millisecsInDay = 86400000;
        return Math.ceil((((a.getTime() - firstJan.getTime()) / millisecsInDay) + firstJan.getDay() + 1) / 7);
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
   compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : dateA.week < dateB.week ? -1 : dateA.week > dateB.week ? 1 : 0;
   }
}
