
import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, ChangeDetectorRef } from "@angular/core";
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment,
    IgxButtonGroupComponent, IgxDialogComponent, IgxSliderComponent, IgxTreeGridComponent,
    OverlaySettings, PositionSettings, SortingDirection, VerticalAlignment, IDialogEventArgs, IgxGridCellComponent, IgxTreeGridCellComponent
} from "igniteui-angular";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { timer } from "rxjs";
import { debounce } from "rxjs/operators";
import { LocalDataService } from "../grid-finjs/localData.service";
import { ITreeGridAggregation } from "./tree-grid-grouping.pipe";

@Component({
    providers: [LocalDataService],
    selector: "app-tree-grid-finjs-sample",
    styleUrls: ["./tree-grid-finjs-sample.component.scss"],
    templateUrl: "./tree-grid-finjs-sample.component.html"
})

export class TreeGridFinJSComponent implements AfterViewInit, OnDestroy {
    @ViewChild("grid1", { static: true }) public grid1: IgxTreeGridComponent;
    @ViewChild("buttonGroup1", { static: true }) public buttonGroup1: IgxButtonGroupComponent;
    @ViewChild("buttonGroup2", { static: true }) public buttonGroup2: IgxButtonGroupComponent;
    @ViewChild("slider1", { static: true }) public volumeSlider: IgxSliderComponent;
    @ViewChild("slider2", { static: true }) public intervalSlider: IgxSliderComponent;
    @ViewChild("chart1", { static: true }) public chart1: IgxCategoryChartComponent;
    @ViewChild("dialog", { static: true }) public dialog: IgxDialogComponent;

    public properties;

    public theme = false;
    public volume = 1000;
    public frequency = 500;
    public data: any[] = [];
    public chartData = [];
    public multiCellSelection: { data: any[] } = { data: [] };
    public controls = [
        {
            disabled: false,
            icon: "update",
            label: "LIVE PRICES",
            selected: false
        },
        {
            disabled: false,
            icon: "update",
            label: "LIVE ALL PRICES",
            selected: false
        },
        {
            disabled: true,
            icon: "stop",
            label: "Stop",
            selected: false
        },
        {
            disabled: false,
            icon: "insert_chart_outlined",
            label: "Chart",
            selected: false
        }
    ];
    public groupColumns = ["Category", "Type", "Contract"];
    public aggregations: ITreeGridAggregation[] = [
        {
            aggregate: (parent: any, data: any[]) => {
                return data.map((r) => r.Change).reduce((ty, u) => ty + u, 0);
            },
            field: "Change"
        },
        {
            aggregate: (parent: any, data: any[]) => {
                return data.map((r) => r.Price).reduce((ty, u) => ty + u, 0);
            },
            field: "Price"
        },
        {
            aggregate: (parent: any, data: any[]) => {
                return parent.Change / (parent.Price - parent.Change) * 100;
            },
            field: "Change(%)"
        }
    ];
    public primaryKey = "ID";
    public childDataKey = "Children";
    public groupColumnKey = "Categories";

    public items: any[] = [{ field: "Export native" }, { field: "Export JS Excel" }];

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new AbsoluteScrollStrategy()
    };

    private subscription;
    private selectedButton;
    private _timer;
    private volumeChanged;
    private rowIds = [];

    // tslint:disable-next-line: max-line-length
    constructor(private zone: NgZone, private localService: LocalDataService, private elRef: ElementRef, private cdr: ChangeDetectorRef) {
        this.subscription = this.localService.getData(this.volume);
        this.localService.records.subscribe(x => { this.data = x; });
    }

    public ngOnInit() {
        this.grid1.sortingExpressions = [{ fieldName: this.groupColumnKey, dir: SortingDirection.Desc }];
        this.volumeChanged = this.volumeSlider.onValueChange.pipe(debounce(() => timer(200)));
        this.volumeChanged.subscribe(
            (x) => {
                this.localService.getData(this.volume);
            },
            (err) => console.log("Error: " + err));
    }

    public ngAfterViewInit() {
        this.grid1.reflow();
        this.selectFirstGroupAndFillChart();
    }

    public selectFirstGroupAndFillChart() {
        this.properties = ["Price", "Country"];
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
        const root = this.grid1.flatData.find(r => r.ID === "Oil");

        root.Children.forEach(child => {
        this.rowIds.push(child.ID);
        });

        this.grid1.selectRows(this.rowIds);
        this.cdr.detectChanges();
    }
    public setChartConfig(xAsis, yAxis, title) {
        // update label interval and angle based on data
        this.setLabelIntervalAndAngle();

        // this.chart1.yAxisFormatLabel = this.formatYAxisLabel;
        this.chart1.xAxisTitle = xAsis;
        this.chart1.yAxisTitle = yAxis;
        this.chart1.chartTitle = title;
    }
    public onButtonAction(event: any) {
        switch (event.index) {
            case 0: {
                this.disableOtherButtons(event.index, true);
                this._timer = setInterval(() => this.ticker(this.data), this.frequency);
                break;
            }
            case 1: {
                this.disableOtherButtons(event.index, true);
                this._timer = setInterval(() => this.tickerAllPrices(this.data), this.frequency);
                break;
            }
            case 2: {
                this.disableOtherButtons(event.index, false);
                this.stopFeed();
                break;
            }
            case 3: {
                this.disableOtherButtons(event.index, true);
                this.dialog.open();
                break;
            }
            default:
                {
                    break;
                }
        }
    }
    public onCloseHandler(evt: IDialogEventArgs) {
        this.buttonGroup1.selectButton(2);
    }

    public rowSelectionChanged(args) {
        this.grid1.clearCellSelection();
        this.chartData = [];
        args.newSelection.forEach(rowId => {
            this.getLeafNodesData(rowId);
        });
        this.setLabelIntervalAndAngle();
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
    }

    public openSingleRowChart(cell: IgxTreeGridCellComponent) {
        this.chartData = [];
        setTimeout(() => {
            this.grid1.deselectAllRows();
            this.grid1.selectRows([cell.rowData.ID]);
            this.chartData = this.data.filter(item => item.Region === cell.rowData.Region &&
                item.Category === cell.rowData.Category);

            this.chart1.notifyInsertItem(this.chartData, this.chartData.length - 1, {});

            this.setLabelIntervalAndAngle();
            this.chart1.chartTitle = "Data Chart with prices of " + this.chartData[0].Category + " in " +
                this.chartData[0].Region + " Region";

            this.dialog.open();
        }, 200);
    }

    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public formatNumber(value: number) {
        return value ? value.toFixed(2) : "";
    }

    public percentage(value: number) {
        return value ? value.toFixed(2) + "%" : "";
    }

    public formatCurrency(value: number) {
        return value ? "$" + value.toFixed(3) : "";
    }

    /**
     * the below code is needed when accessing the sample through the navigation
     * it will style all the space below the sample component element, but not the navigation menu
     */
    public onThemeChanged(event: any) {
        const parentEl = this.parentComponentEl();
        if (event.checked && parentEl.classList.contains("main")) {
            parentEl.classList.add("fin-dark-theme");
        } else {
            parentEl.classList.remove("fin-dark-theme");
        }
    }

    public ngOnDestroy() {
        this.stopFeed();
        this.volumeChanged.unsubscribe();
    }

    public toggleToolbar(event: any) {
        this.grid1.showToolbar = !this.grid1.showToolbar;
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

    // tslint:disable:member-ordering
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };

    public setLabelIntervalAndAngle() {
        const intervalSet = this.chartData.length;
        if (intervalSet < 10) {
            this.chart1.xAxisLabelAngle = 0;
            this.chart1.xAxisInterval = 1;
        } else if (intervalSet < 15) {
            this.chart1.xAxisLabelAngle = 30;
            this.chart1.xAxisInterval = 1;
        } else if (intervalSet < 40) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 1;
        } else if (intervalSet < 100) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 3;
        } else if (intervalSet < 200) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 5;
        } else if (intervalSet < 400) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 7;
        } else if (intervalSet > 400) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 10;
        }
        this.chart1.yAxisAbbreviateLargeNumbers = true;
    }

    public formatYAxisLabel(item: any): string {
        return item + "test test";
    }

    // tslint:enable:member-ordering
    private disableOtherButtons(ind: number, disableButtons: boolean) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.volumeSlider.disabled = disableButtons;
        this.intervalSlider.disabled = disableButtons;
        this.selectedButton = ind;
        this.buttonGroup1.buttons.forEach((button, index) => {
            if (index === 2) { button.disabled = !disableButtons; } else {
                this.buttonGroup1.buttons[0].disabled = disableButtons;
                this.buttonGroup1.buttons[1].disabled = disableButtons;
            }
        });
    }

    /**
     * returns the main div container of the Index Component,
     * if path is /samples/sample-url, or the appRoot, if path is /sample-url
     */
    private parentComponentEl() {
        return this.elRef.nativeElement.parentElement.parentElement;
    }

    private ticker(data: any) {
        this.data = this.updateRandomPrices(data);
    }

    private tickerAllPrices(data: any) {
        this.data = this.updateAllPrices(data);
    }

    /**
     * Updates values in every record
     */
    private updateAllPrices(data: any[]): any {
        const newData = data.slice();
        for (const dataRow of newData) {
            this.randomizeObjectData(dataRow);
        }
        return newData;
    }

    /**
     * Updates values in random number of records
     */
    private updateRandomPrices(data: any[]): any {
        const newData = data.slice();
        let y = 0;
        for (let i = Math.round(Math.random() * 10); i < newData.length; i += Math.round(Math.random() * 10)) {
            this.randomizeObjectData(newData[i]);
            y++;
        }
        return newData;
    }

    /**
     * Generates ne values for Change, Price and ChangeP columns
     */
    private randomizeObjectData(dataObj) {
        const changeP = "Change(%)";
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
    }

    private generateNewPrice(oldPrice): any {
        let rnd = Math.random();
        rnd = Math.round(rnd * 100) / 100;
        const volatility = 2;
        let newPrice = 0;
        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }
        const changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;
        newPrice = Math.round(newPrice * 100) / 100;
        const result = { Price: 0, ChangePercent: 0 };
        changePercent = Math.round(changePercent * 100) / 100;
        result.Price = newPrice;
        result.ChangePercent = changePercent;

        return result;
    }

    get buttonSelected(): number {
        return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }

    private getLeafNodesData(rowId) {
        const row = this.grid1.flatData.find(r => r.ID === rowId);
        if (row.Children) {
            row.Children.forEach(child => this.getLeafNodesData(child.ID));
        } else if (row.Country) {
            this.chartData.push(row);
            this.chart1.notifyInsertItem(this.chartData, this.chartData.length - 1, row);
        }
    }
}
