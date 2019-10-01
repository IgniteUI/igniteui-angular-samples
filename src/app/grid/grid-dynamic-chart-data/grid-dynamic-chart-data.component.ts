import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/core/grid-selection";
import { FinancialData } from "../services/financialData";

export interface IGridDataSelection {
    selectedData: any[];
    rowID: any;
}
@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"]
})
export class GridDynamicChartDataComponent implements OnInit {
    public data;

    @ViewChild(IgxGridComponent, {static: true})
    public grid: IgxGridComponent;

    public gridDataSelection = new Array<IGridDataSelection>();
    public selectedData = [];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public dataRows = [];
    public selectedCells = [];
    constructor() {
    }

    public ngOnInit() {
        this.data = new FinancialData().generateData(1000);

        this.grid.onRangeSelection.subscribe(range => {
            this.gridDataSelection = [];
            this.selectedData = this.grid.getSelectedData().map(this.dataMap).filter(r => Object.keys(r).length !== 0);
            this.dataRows = this.grid.data.slice(range.rowStart, range.rowEnd);

            for (let i = 0; i < this.dataRows.length ; i++) {
                this.gridDataSelection.push({selectedData: this.selectedData[i], rowID: this.dataRows[i]});
            }

        });

    }

    private negative = (rowData: any): boolean => {
        return rowData["Change(%)"] < 0;
    }
    private positive = (rowData: any): boolean => {
        return rowData["Change(%)"] > 0;
    }
    private changeNegative = (rowData: any): boolean => {
        return rowData["Change(%)"] < 0 && rowData["Change(%)"] > -1;
    }
    private changePositive = (rowData: any): boolean => {
        return rowData["Change(%)"] > 0 && rowData["Change(%)"] < 1;
    }
    private strongPositive = (rowData: any): boolean => {
        return rowData["Change(%)"] >= 1;
    }
    private strongNegative = (rowData: any, key: string): boolean => {
        return rowData["Change(%)"] <= -1;
    }

    private strongPositiveOnYear = (rowData: any): boolean => {
        return rowData["Change On Year(%)"] >= 1;
    }
    private positiveOnYear = (rowData: any): boolean => {
        return rowData["Change On Year(%)"] > 0;
    }

    private strongNegativeOnYear = (rowData: any, key: string): boolean => {
        return rowData["Change On Year(%)"] <= -1;
    }
    private negativeOnYear = (rowData: any, key: string): boolean => {
        return rowData["Change On Year(%)"] < 0;
    }

    // tslint:disable:member-ordering
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsOnYear = {
        changeNeg2: this.negativeOnYear,
        changePos2: this.positiveOnYear,
        strongNegative2: this.strongNegativeOnYear,
        strongPositive2: this.strongPositiveOnYear
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
    // tslint:disable-next-line: align
    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public percentage(value: number) {
        return value.toFixed(2) + "%";
    }

    private dataMap(dataRecord: any) {
        Object.keys(dataRecord).forEach(k => {
            switch (k) {
                case "Price":
                case "Change":
                case "Change(%)":
                case "Change On Year(%)":
                case "Open Price":
                case "Buy":
                case "Sell":
                break;
                default:
                    delete dataRecord[k];
            }
        });
        return dataRecord;
    }

    public rightClick(eventArgs: any) {
        eventArgs.event.preventDefault();
        this.selectedCells = [];
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid.getSelectedRanges().some((range) => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        });

        if (!isCellWithinRange) {
            this.disableContextMenu();

            const tempObj = {};
            tempObj[eventArgs.cell.column.field] = eventArgs.cell.value;
            // tslint:disable-next-line: max-line-length
            this.gridDataSelection = [{selectedData: this.dataMap(tempObj), rowID: eventArgs.cell.cellID.rowID}];
            this.grid.clearCellSelection();
            this.grid.selectionService.add(eventArgs.cell.selectionNode);
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;

    }

    public disableContextMenu() {
        if (this.contextmenu) {
            this.selectedCells = [];
            this.contextmenu = false;
        }
    }
}
