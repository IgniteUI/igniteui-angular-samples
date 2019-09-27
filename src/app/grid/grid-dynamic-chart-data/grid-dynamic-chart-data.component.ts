import { Component, OnInit, ViewChild } from "@angular/core";
import { FinancialData } from "../services/financialData";
import { IgxGridComponent } from 'igniteui-angular';
import { GridSelectionRange } from 'igniteui-angular/lib/core/grid-selection';
@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"]
})
export class GridDynamicChartDataComponent implements OnInit {
    public data;

    @ViewChild(IgxGridComponent, {static: true})
    public grid: IgxGridComponent;

    public selectedData = [];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public dataRows = []
    constructor() {
    }

    public ngOnInit() {
        this.data = new FinancialData().generateData(1000);

        this.grid.onRangeSelection.subscribe( range => {
            this.selectedData = this.grid.getSelectedData().map(this.dataMap).filter(r => Object.keys(r).length !== 0);
            this.dataRows = this.grid.data.slice(range.rowStart, range.rowEnd);

            console.log(this.dataRows);
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

    private positiveBuy = (rowData: any, key: string): boolean => {
        return rowData["Buy"] <= rowData["Sell"];
    }
    private negativeBuy = (rowData: any, key: string): boolean => {
        return rowData["Sell"] > rowData["Sell"];
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

    public rightClick(eventArgs) {
        debugger;
        eventArgs.event.preventDefault();
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;
    }

    public disableContextMenu() {
        if (this.contextmenu) {
            this.contextmenu = false;
        }
    }
}
