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
        { name: "Month", ref: MonthSortingStrategy.instance() },
        { name: "Year", ref: YearSortingStrategy.instance() },
        { name: "Weekday", ref: WeekdaySortingStrategy.instance() }
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
                    return dateA === dateB ? 0 : -1;
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

    public formatWeekDay(val: Date) {
        return this.groupByMode === "Weekday"
            ? new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(val)
            : new Intl.DateTimeFormat("en-US").format(val);
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
    public getParsedDate(date: any) {}
    compareValues(a: any, b: any) {
        const dayA = this.getParsedDate(a);
        const dayB = this.getParsedDate(b);
        if (dayA > dayB) return 1;
        else if (dayA === dayB) return 0;
        else return -1;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    public getParsedDate(date: any) {
        return parseInt(
            new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date),
            10
        );
    }
}

class MonthSortingStrategy extends BaseSortingStrategy {
    public getParsedDate(date: any) {
        return parseInt(
            new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(date),
            10
        );
    }
}

class YearSortingStrategy extends BaseSortingStrategy {
    public getParsedDate(date: any) {
        return parseInt(
            new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date),
            10
        );
    }
}

class WeekdaySortingStrategy extends BaseSortingStrategy {
    public getParsedDate(date: any) {
        const weekDays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        return weekDays.indexOf(
            new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)
        );
    }
}
