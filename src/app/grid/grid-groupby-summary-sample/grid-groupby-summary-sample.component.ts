import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    DefaultSortingStrategy,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryOperand,
    IgxSummaryResult,
    ISortingExpression,
    SortingDirection,
    GridSummaryPosition,
    GridSummaryCalculationMode
} from "igniteui-angular";
import { LOCAL_DATA } from "./data";

class AvgSummary extends IgxSummaryOperand {

    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        const avg = IgxNumberSummaryOperand.average(data);
        result.push({
            key: "avg",
            label: "Average",
            summaryResult: data.length ? "$" + avg.toFixed(2) : ""
        });
        return result;
    }
}

class SumSummary extends IgxSummaryOperand {

    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: "sum",
            label: "Sum",
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        return result;
    }
}

@Component({
    selector: "app-grid-groupby-summary-sample",
    styleUrls: ["./grid-groupby-summary-sample.component.scss"],
    templateUrl: "./grid-groupby-summary-sample.component.html"
})
export class GridGroupBySummarySampleComponent {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];
    public avgSummary = AvgSummary;
    public sumSummary = SumSummary;
    public summaryPositions;
    public summaryPosition = GridSummaryPosition.bottom;
    public summaryCalcModes;
    public summaryCalculationMode = GridSummaryCalculationMode.rootAndChildLevels;

    constructor() {
        this.data = LOCAL_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: "ShipCountry", ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];

        this.summaryPositions = [
            {
                label: GridSummaryPosition.top,
                selected: this.summaryPosition === GridSummaryPosition.top,
                togglable: true
            },
            {
                label: GridSummaryPosition.bottom,
                selected: this.summaryPosition === GridSummaryPosition.bottom,
                togglable: true
            }
        ];

        this.summaryCalcModes = [
            {
                label: GridSummaryCalculationMode.rootLevelOnly,
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly,
                togglable: true
            },
            {
                label: GridSummaryCalculationMode.childLevelsOnly,
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.childLevelsOnly,
                togglable: true
            },
            {
                label: GridSummaryCalculationMode.rootAndChildLevels,
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootAndChildLevels,
                togglable: true
            }
        ];
    }

    public selectSummaryPosition(event) {
        this.summaryPosition = this.summaryPositions[event.index].label;
        this.grid1.summaryPosition = this.summaryPosition;
    }

    public selectSummaryCalcMode(event) {
        this.summaryCalculationMode = this.summaryCalcModes[event.index].label;
        this.grid1.summaryCalculationMode = this.summaryCalculationMode;
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
}
