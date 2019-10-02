import { ChangeDetectorRef, Component, Directive, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { IgxDialogComponent, IgxGridComponent } from "igniteui-angular";
import {IgxItemLegendComponent} from "igniteui-angular-charts/ES5/igx-item-legend-component";
import { FinancialData } from "../services/financialData";
import { ChartService } from "./chart.service";
import { IChartArgs } from "./context-menu/context-menu.component";

export interface IGridDataSelection {
    selectedData: any[];
    subjectArea: string;
    rowID: any;
}

@Directive({
    selector: "[chartHost]"
})
export class ChartHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"],
    providers: [ChartService]
})
export class GridDynamicChartDataComponent implements OnInit {
    public data;

    @ViewChild(IgxGridComponent, {static: true})
    public grid: IgxGridComponent;

    @ViewChild(ChartHostDirective, {static: true})
    public chartHost: ChartHostDirective;

    @ViewChild(IgxDialogComponent, {static: true})
    public dialog: IgxDialogComponent;

    @ViewChild(IgxItemLegendComponent, {static: true})
    public itemLegend: IgxItemLegendComponent;

    public gridDataSelection = new Array<IGridDataSelection>();
    public selectedData = [];
    public colForSubjectArea = null;
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public dataRows = [];
    public selectedCells = [];

    constructor(private chartService: ChartService, private cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.data = new FinancialData().generateData(1000);
        this.grid.onRangeSelection.subscribe(range => {
            debugger;
            this.gridDataSelection = [];
            this.colForSubjectArea = null;
            this.selectedData = this.grid.getSelectedData().map(this.dataMap).filter(r => Object.keys(r).length !== 0);
            this.dataRows = this.grid.filteredSortedData.slice(range.rowStart, range.rowEnd + 1 );
                // tslint:disable-next-line: max-line-length
            this.colForSubjectArea = this.grid.visibleColumns[range.columnStart].dataType !== "number" ? this.grid.visibleColumns[range.columnStart].field : this.grid.visibleColumns[1].field;

            for (let i = 0; i < this.dataRows.length ; i++) {
                // tslint:disable-next-line: max-line-length
                this.gridDataSelection.push({selectedData: this.selectedData[i], subjectArea: this.colForSubjectArea, rowID: this.dataRows[i]});
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
            this.gridDataSelection = [{selectedData: this.dataMap(tempObj), subjectArea: this.colForSubjectArea = eventArgs.cell.column.field,  rowID: eventArgs.cell.cellID.rowID}];
            this.grid.clearCellSelection();
            this.grid.selectionService.add(eventArgs.cell.selectionNode);
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;

    }

    public openChart(args: IChartArgs) {
        this.chartService.chartFactory(args.type, args.chartData, this.chartHost.viewContainerRef, this.itemLegend);
        this.cdr.detectChanges();
        this.dialog.open();
    }

    public disableContextMenu() {
        if (this.contextmenu) {
            this.selectedCells = [];
            this.contextmenu = false;
        }
    }
}
