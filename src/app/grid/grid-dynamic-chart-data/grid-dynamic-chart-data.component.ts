// tslint:disable: max-line-length
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, HostListener, NgZone, OnInit, Pipe, PipeTransform, ViewChild, ViewContainerRef } from "@angular/core";
import { CloseScrollStrategy, IgxDialogComponent, IgxGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { FinancialData } from "../services/financialData";
import { ChartService, IGridDataSelection } from "./chart.service";
import { IChartArgs } from "./context-menu/context-menu.component";
import { IChartComponentOptions, IChartOptions, IChartSeriesOptions, IXAxesOptions, IYAxesOptions} from "./initializers";
@Directive({
    selector: "[chartHost]"
})
export class ChartHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

@Pipe({
    name: "getChartArgs"
})
export class ChartArgsPipe implements PipeTransform {
    public transform(value: string): IChartArgs[] {
        switch (value) {
            case "column":
            case "area":
            case "line":
            case "bar":
                return [
                    {chartType: value, seriesType: "Grouped"},
                    {chartType: value, seriesType: "Stacked"},
                    {chartType: value, seriesType: "100Stacked"}
                ];
            case "scatter":
                return [
                    {chartType: value, seriesType: "Bubble"},
                    {chartType: value, seriesType: "Point"},
                    {chartType: value, seriesType: "Line"}
                ];
        }
    }
}
@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"],
    providers: [ChartService]
})
export class GridDynamicChartDataComponent implements OnInit {

    public data;

    @ViewChild(IgxGridComponent, { static: true })
    public grid: IgxGridComponent;

    @ViewChild(ChartHostDirective, { static: true })
    public chartHost: ChartHostDirective;

    @ViewChild(IgxDialogComponent, { static: true })
    public dialog: IgxDialogComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    public gridDataSelection = new Array<IGridDataSelection>();
    public selectedData = [];
    public colForSubjectArea = null;
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public dataRows = [];
    public selectedCells = [];
    public currentChart;

    private currentChartArg: IChartArgs = {chartType: undefined, seriesType: undefined};
    private bubbleChartSizeScale = new IgxSizeScaleComponent();

    private _dialogOverlaySettings = {
        closeOnOutsideClick: true,
        modal: true,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy()
    };

    private dataChartSeriesOptionsModel: IChartSeriesOptions = {
        isHighlightingEnabled: true,
        areaFillOpacity: .4,
        markerType: 3,
        showDefaultTooltip: true,
        isTransitionInEnabled: true
    };

    private scatterChartSeriesOptionsModel: IChartSeriesOptions = {
        yMemberPath: "Price",
        markerType: 3,
        showDefaultTooltip: true
    };

    private bubbleChartSeriesOptionsModel: IChartSeriesOptions = {
        yMemberPath: "Price",
        radiusMemberPath: "Open Price",
        markerType: 3,
        showDefaultTooltip: true,
        radiusScale: this.bubbleChartSizeScale
    };

    private scatterChartXAxisOptions: IXAxesOptions = {
        formatLabel: (value) => this.formatCurrency(value)
    };

    private scatterChartYAxisOptions: IYAxesOptions = {
        formatLabel: (value) => this.formatCurrency(value)
    };

    private dataChartOptions: IChartOptions = {
        width: "100%",
        height: "400px",
        transitionDuration: 300,
        isVerticalZoomEnabled: true,
        isHorizontalZoomEnabled: true,
        animateSeriesWhenAxisRangeChanges: true
    };

    private dataChartComponentOptions: IChartComponentOptions = {
        chartOptions: this.dataChartOptions
    };

    private scatterChartComponentOptions =  {
        chartOptions: this.dataChartOptions,
        xAxisOptions: this.scatterChartXAxisOptions,
        yAxisOptions: this.scatterChartYAxisOptions
    };

    private chartComponentOptions: IChartComponentOptions;

    constructor(private chartService: ChartService, private cdr: ChangeDetectorRef, private zone: NgZone) {
        this.bubbleChartSizeScale.maximumValue = 60;
        this.bubbleChartSizeScale.minimumValue = 10;
    }

    public ngOnInit() {
        this.chartService.chartData.subscribe(chart => {
            this.currentChart  = chart;
            if (!this.dialog.isOpen) {
                this.currentChartArg = {chartType: undefined, seriesType: undefined};
                this._dialogOverlaySettings.outlet = this.outlet;
                this.dialog.open(this._dialogOverlaySettings);
            }
        });
        this.data = new FinancialData().generateData(1000);
        this.grid.onRangeSelection.subscribe(range => {
            this.gridDataSelection = [];
            this.colForSubjectArea = null;
            this.selectedData = this.grid.getSelectedData().map(this.dataMap).filter(r => Object.keys(r).length !== 0);
            this.dataRows = this.grid.filteredSortedData.slice(range.rowStart, range.rowEnd + 1);
            // tslint:disable-next-line: max-line-length
            this.colForSubjectArea = this.grid.visibleColumns[range.columnStart].dataType !== "number" ? this.grid.visibleColumns[range.columnStart].field : this.grid.visibleColumns[1].field;

            for (let i = 0; i < this.dataRows.length; i++) {
                // tslint:disable-next-line: max-line-length
                this.gridDataSelection.push({ selectedData: this.selectedData[i], subjectArea: this.colForSubjectArea, rowID: this.dataRows[i] });
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

    public chartTypes = ["column", "area", "bar", "line", "scatter"];

    private dataMap(dataRecord: any) {
        Object.keys(dataRecord).forEach(k => {
            switch (k) {
                case "Price":
                case "Open Price":
                case "Buy":
                case "Sell":
                case "Start(Y)":
                case "High(Y)":
                case "Low(Y)":
                case "High(D)":
                case "Low(D)":
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
            this.gridDataSelection = [{ selectedData: this.dataMap(tempObj), subjectArea: this.colForSubjectArea = eventArgs.cell.column.field, rowID: eventArgs.cell.cellID.rowID }];
            this.grid.clearCellSelection();
            this.grid.selectionService.add(eventArgs.cell.selectionNode);
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;

    }

    public createChart(args: IChartArgs) {
        if (this.currentChartArg.chartType === args.chartType && this.currentChartArg.seriesType === args.seriesType) {
            return;
        }
        this.currentChartArg = args;
        let seriesOptionModel: IChartSeriesOptions;
        switch (`${args.seriesType}`) {
            case "Grouped":
            case "Stacked":
            case "100Stacked":
                this.chartComponentOptions = this.dataChartComponentOptions;
                seriesOptionModel = this.dataChartSeriesOptionsModel;
                break;
            case "Line":
            case "Point":
                this.chartComponentOptions = this.scatterChartComponentOptions;
                seriesOptionModel = this.scatterChartSeriesOptionsModel;
                break;
            case "Bubble":
                this.chartComponentOptions = this.scatterChartComponentOptions;
                seriesOptionModel = this.bubbleChartSeriesOptionsModel;
            }

        this.zone.runOutsideAngular(() => {
                this.chartService.chartFactory(args.chartType, this.gridDataSelection, this.chartHost.viewContainerRef, this.chartComponentOptions, {seriesModel: seriesOptionModel, seriesType: args.seriesType});
            });
    }

    public disableContextMenu() {
        if (this.contextmenu) {
            this.selectedCells = [];
            this.contextmenu = false;
        }
    }

    @HostListener("pointerdown", ["$event"])
    public onPointerDown(event) {
        if (this.contextmenu && event.button === 0 && !event.target.parentElement.classList.contains("contextmenu")) {
            this.disableContextMenu();
        }
    }

    public trackByFn(index, item) {
        return index;
    }
}
