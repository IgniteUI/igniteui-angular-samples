// tslint:disable: max-line-length
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, HostListener, NgZone, OnInit, Pipe, PipeTransform, ViewChild, ViewContainerRef } from "@angular/core";
import { AutoPositionStrategy, CloseScrollStrategy, HorizontalAlignment, IGridCellEventArgs, IGridEditEventArgs, IgxCardComponent, IgxDialogComponent, IgxGridCellComponent, IgxGridComponent, IgxIconService, IgxOverlayOutletDirective, IgxTabsComponent, ISortingExpression, VerticalAlignment } from "igniteui-angular";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { noop } from "rxjs";
import { debounceTime, filter, tap } from "rxjs/operators";
import { FinancialData } from "../services/financialData";
import { ChartService, IGridDataSelection } from "./chart.service";
import { ConditionalFormattingDirective } from "./conditional-formatting.directive";
import { IChartArgs } from "./context-menu/context-menu.component";
import { IChartComponentOptions, IChartOptions, IChartSeriesOptions, IXAxesOptions, IYAxesOptions } from "./initializers";
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
            case "Column":
            case "Area":
            case "Line":
            case "Bar":
                return [
                    { chartType: value, seriesType: "Grouped" },
                    { chartType: value, seriesType: "Stacked" },
                    { chartType: value, seriesType: "100Stacked" }
                ];
            case "Scatter":
                return [
                    { chartType: value, seriesType: "Bubble" },
                    { chartType: value, seriesType: "Point" },
                    { chartType: value, seriesType: "Line" }
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
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit {

    public data;
    public opened = true;
    @ViewChild(ConditionalFormattingDirective, { read: ConditionalFormattingDirective, static: true })
    public formatting: ConditionalFormattingDirective;

    @ViewChild("grid", { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild("chart", { read: ChartHostDirective, static: true })
    public chartHost: ChartHostDirective;

    @ViewChild("chartDialog", { static: true })
    public dialog: IgxDialogComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("chartSelectionDialog", { static: true })
    public chartSelectionDialog: IgxDialogComponent;

    @ViewChild("chartPreviewDialog", { static: true })
    public chartPreviewDialog: IgxDialogComponent;

    @ViewChild("chartPreview", { read: ChartHostDirective, static: true })
    public chartPreview: ChartHostDirective;

    @ViewChild(IgxTabsComponent, { static: true })
    public tabs: IgxTabsComponent;

    @ViewChild("configArea", { static: true })
    public area: ElementRef;

    public chartCondigAreaState = "opened";
    public gridDataSelection = new Array<IGridDataSelection>();
    public colForSubjectArea = null;
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public dataRows = [];
    public currentChart;
    public currentChartArg: IChartArgs = { chartType: "column", seriesType: "Grouped" };
    public fullScreenOpened = false;
    public row;
    public range;
    public chartTypesData = [];
    public chartsToDisable = {};
    public disableCreateChart = false;
    public cellsToFormat = [];
    public cellsFormatType;
    public currentFormatter;
    // Dialogs options
    public _chartDialogOverlaySettings = {
        closeOnOutsideClick: false,
        modal: true,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy()
    };

    private _chartSelectionDilogOverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: null
    };

    private _chartPreviewDialogOverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: new AutoPositionStrategy({
            horizontalDirection: HorizontalAlignment.Center,
            horizontalStartPoint: HorizontalAlignment.Center,
            verticalStartPoint: VerticalAlignment.Top,
            verticalDirection: VerticalAlignment.Top,
            openAnimation: null,
            closeAnimation: null
        })
    };

    // Chart, Series, Axes options
    private bubbleChartSizeScale = new IgxSizeScaleComponent();
    private rowIndex;
    private colIndex;
    private pieChartOptions: IChartOptions = {
        width: "85%",
        height: "75%",
        labelsPosition: 3,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; }
    };

    private dataChartSeriesOptionsModel: IChartSeriesOptions = {
        isHighlightingEnabled: true,
        areaFillOpacity: .4,
        markerType: 3,
        showDefaultTooltip: true
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
        height: "85%",
        autoMarginWidth: 50,
        transitionDuration: 300,
        isVerticalZoomEnabled: true,
        isHorizontalZoomEnabled: true
    };

    private dataChartComponentOptions: IChartComponentOptions = {
        chartOptions: this.dataChartOptions
    };

    private scatterChartComponentOptions = {
        chartOptions: this.dataChartOptions,
        xAxisOptions: this.scatterChartXAxisOptions,
        yAxisOptions: this.scatterChartYAxisOptions
    };

    private chartComponentOptions: IChartComponentOptions;

    constructor(private chartService: ChartService, private zone: NgZone, private cdr: ChangeDetectorRef) {
        this.bubbleChartSizeScale.maximumValue = 60;
        this.bubbleChartSizeScale.minimumValue = 10;
    }

    public ngOnInit() {
        this.grid.onCellClick.subscribe((evt: IGridCellEventArgs) => {
            this.range = undefined;
            this.contextmenu = false;
        });

        this.grid.onCellEdit.subscribe((args: IGridEditEventArgs) => {
            if (this.formatting.range) {
                if ((args.newValue === args.oldValue)) {
                    args.cancel = true;
                } else {
                    const node = args.cellID;
                    const range = this.formatting.range;
                    const isCellWithinFormattedRange = node.columnID - 1 >= range.columnStart &&
                        node.columnID - 1 <= range.columnEnd &&
                        node.rowIndex >= range.rowStart &&
                        node.rowIndex <= range.rowEnd;
                    if (isCellWithinFormattedRange) {
                        Promise.resolve().then(() => {
                            this.grid.selectRange(this.formatting.range);
                            this.formatting.ensureValues();
                            this.formatting.formatCells(this.currentFormatter);
                        });
                    }
                }
            }
        });

        this.formatting.onFormattersReady.subscribe(names => this.formattersNames = names);

        (this.tabs.headerContainer.nativeElement as HTMLElement).onpointerdown = event => event.stopPropagation();

        this.chartSelectionDialog.onOpen.subscribe(() => {
            this.currentChartArg = { chartType: "Column", seriesType: "Grouped" };
        });

        this.dialog.onOpen.subscribe(() => {
            this.resetChartDialogInitialDimensions();
            this.chartSelectionDialog.close();
        });

        this.dialog.onClose.subscribe(() => {
            this.resetChartDialogInitialDimensions();
            this.contextmenu = true;
            this.chartCondigAreaState = "opened";
            this.opened = true;
        });

        this.chartSelectionDialog.onClose.subscribe((evt) => this.chartPreviewDialog.close());

        this.grid.onDataPreLoad.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(250)).
            subscribe((evt) => this.range && !this.contextmenu ? this.renderButton() : noop());

        this.data = new FinancialData().generateData(1000);

        this.grid.onRangeSelection.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(200))
            .subscribe(range => {

                this.chartsToDisable = {
                    BubbleScatter: false,
                    PointScatter: false,
                    LineScatter: false
                };

                this.gridDataSelection = [];
                this.colForSubjectArea = null;

                this.zone.runOutsideAngular(() => {

                    const chartData = this.grid.getSelectedData()
                        .map(this.dataMap)
                        .filter(r => Object.keys(r).length !== 0);

                    if (chartData.length === 0) {
                        this.disableCreateChart = true;
                    } else {
                        this.disableCreateChart = false;
                        const valueMemberPaths = Object.keys(chartData[0]);

                        if (valueMemberPaths.length === 1) {
                            switch (valueMemberPaths[0]) {
                                case "Price":
                                    this.chartsToDisable = {
                                        BubbleScatter: true,
                                        PointScatter: true,
                                        LineScatter: true
                                    };
                                    break;
                                case "Open Price":
                                    this.chartsToDisable = {
                                        BubbleScatter: true,
                                        PointScatter: false,
                                        LineScatter: false
                                    };
                                    break;
                            }
                        }
                        this.dataRows = this.grid.filteredSortedData.slice(range.rowStart, range.rowEnd + 1);
                        this.colForSubjectArea = this.grid.visibleColumns[range.columnStart].dataType !== "number" ? this.grid.visibleColumns[range.columnStart].field : this.grid.visibleColumns[1].field;

                        for (let i = 0; i < this.dataRows.length; i++) {
                            this.gridDataSelection.push({ selectedData: chartData[i], subjectArea: this.colForSubjectArea, rowID: this.dataRows[i] });
                        }
                    }
                    this.range = range;
                    this.tabs.tabs.first.isSelected = true;
                    this.formatting.determineFormatters();

                });
                this.renderButton();
            });
    }

    public ngAfterViewInit(): void {
        const horizontalScroll = new EventEmitter();
        this.grid.headerContainer.getScroll().onscroll = () => this.range ? horizontalScroll.emit(true) : horizontalScroll.emit(false);
        horizontalScroll.pipe(filter((value) => value), tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(250)).subscribe(() => { this.renderButton(); });
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    // tslint:disable: member-ordering
    public chartTypesMenuX;
    public chartTypesMenuY;

    public previewChartTypes = ["Column", "Area", "Line", "Bar"];

    public chartTypes = ["Column", "Area", "Bar", "Line", "Scatter"];

    public pieChartArgs: IChartArgs = {
        chartType: "Pie",
        seriesType: undefined
    };

    private dataMap(dataRecord: any) {
        Object.keys(dataRecord).forEach(k => {
            switch (k) {
                case "Price":
                case "Open Price":
                case "OpenPriceDiff":
                case "BuyDiff":
                case "SellDiff":
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

    public toggleChartSelectionDialog(event) {

        if (!this.chartSelectionDialog.isOpen) {
            this._chartSelectionDilogOverlaySettings.outlet = this.outlet;
            const positionStrategy = {
                verticalStartPoint: VerticalAlignment.Bottom,
                target: event.target
            };

            if (((this.grid.visibleColumns.length - 1) - this.colIndex) < 2 || !this.grid.navigation.isColumnFullyVisible(this.colIndex + 1)) {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Left;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Right;
            } else {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Center;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Center;
            }
            this._chartSelectionDilogOverlaySettings.positionStrategy = new AutoPositionStrategy({ ...positionStrategy });
            this.chartSelectionDialog.open(this._chartSelectionDilogOverlaySettings);
        } else {
            this.chartSelectionDialog.close();
        }
    }

    public previewChart(chart: string) {
        this._chartPreviewDialogOverlaySettings.positionStrategy.settings.target = this.tabs.tabsContainer.nativeElement;
        this.chartPreviewDialog.toggleRef.element.style.width = (this.chartSelectionDialog.toggleRef as any).elementRef.nativeElement.clientWidth + "px";
        this.createChart({ chartType: chart, seriesType: "Grouped" }, this.chartPreview, this.chartPreviewDialog, this._chartPreviewDialogOverlaySettings);
    }

    public formattersNames = [];

    public analyse(type) {
        this.formatting.range = this.range;
        this.currentFormatter = type;
        this.formatting.formatCells(this.currentFormatter);
    }

    public createChart(args: IChartArgs, host: ChartHostDirective, dialog: IgxDialogComponent, overlaySettings: any) {
        const chartHost = host;
        const dialogToOpen = dialog;
        const dialogOverlaySettings = overlaySettings;
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
            default:
                if (args.chartType === "Pie") {
                    this.chartComponentOptions = {
                        chartOptions: this.pieChartOptions
                    };
                    seriesOptionModel = null;
                }
        }

        chartHost.viewContainerRef.clear();
        requestAnimationFrame(() => {
            this.currentChart = this.chartService.chartFactory(args.chartType, this.gridDataSelection, chartHost.viewContainerRef, this.chartComponentOptions, { seriesModel: seriesOptionModel, seriesType: args.seriesType });
            if (dialogToOpen.isCollapsed) {
                dialogOverlaySettings.outlet = this.outlet;
                dialogToOpen.open(overlaySettings);
            }
        });

    }

    public disableContextMenu() {
        this.contextmenu = false;
        this.chartSelectionDialog.close();
    }

    @HostListener("pointerdown", ["$event"])
    public onPointerDown(event) {
        if (!event.target.parentElement.classList.contains("analytics-btn") &&
            !event.target.classList.contains("more-btn") &&
            event.target.className.indexOf("btn") === -1 &&
            event.target.className.indexOf("action") === -1 &&
            event.target.className.indexOf("tab-option") === -1) {
            this.disableContextMenu();
        }
    }

    public trackByFn(index, item) {
        return index;
    }

    public toggle() {
        this.chartCondigAreaState = this.opened ? "closed" : "opened";
        this.opened = !this.opened;
    }

    public toggleFullScreen() {
        let height;
        let width;
        if (!this.fullScreenOpened) {
            height = this.grid.nativeElement.clientHeight + "px";
            width = this.grid.nativeElement.clientWidth + "px";
        } else {
            height = (this.grid.nativeElement.clientHeight * (70 / 100)) + "px";
            width = (this.grid.nativeElement.clientWidth * (70 / 100)) + "px";
        }

        requestAnimationFrame(() => {
            (this.dialog.toggleRef as any).elementRef.nativeElement.style.width = width;
            (this.dialog.toggleRef as any).elementRef.nativeElement.firstElementChild.style.height = height;
            (this.dialog.toggleRef as any).elementRef.nativeElement.style.transition = "width .2s ease-in-out";
            (this.dialog.toggleRef as any).elementRef.nativeElement.firstElementChild.style.transition = "height .3s ease-in-out";
        });
        this.fullScreenOpened = !this.fullScreenOpened;
    }
    private resetChartDialogInitialDimensions() {
        this.fullScreenOpened = false;
        this.dialog.toggleRef.element.style.width = (this.grid.nativeElement.clientWidth * (70 / 100)) + "px";
        (this.dialog.toggleRef.element.firstChild as HTMLElement).style.height = (this.grid.nativeElement.clientHeight * (70 / 100)) + "px";
    }

    private renderButton() {
        this.rowIndex = this.range.rowEnd;
        this.colIndex = this.range.columnEnd;

        while (this.colIndex >= 0 && !this.grid.navigation.isColumnFullyVisible(this.colIndex)) {
            this.colIndex--;
        }

        if (this.colIndex < 0) {
            return;
        }

        if ((!this.grid.getRowByIndex(this.rowIndex) || (this.grid.rowList.toArray().indexOf(this.grid.getRowByIndex(this.rowIndex)) >= this.grid.rowList.length - 2) && this.rowIndex + 2 < this.grid.dataLength)) {
            const lastFullyVisibleRowIndex = this.grid.rowList.toArray()[this.grid.rowList.length - 3].index;
            const field = this.grid.visibleColumns[this.colIndex].field;
            this.clickedCell = this.grid.getCellByColumn(lastFullyVisibleRowIndex, field);
        } else {
            this.clickedCell = this.grid.getCellByColumn(this.rowIndex, this.grid.visibleColumns[this.colIndex].field);
        }
        this.contextmenuX = this.clickedCell.element.nativeElement.getClientRects()[0].right;
        this.contextmenuY = this.clickedCell.element.nativeElement.getClientRects()[0].bottom;
        this.contextmenu = this.isWithinRange(this.clickedCell);
        this.cdr.detectChanges();
    }

    private isWithinRange(cell: IgxGridCellComponent) {
        return cell.visibleColumnIndex >= this.range.columnStart &&
            cell.visibleColumnIndex <= this.range.columnEnd &&
            cell.rowIndex >= this.range.rowStart &&
            cell.rowIndex <= this.range.rowEnd;
    }
}
