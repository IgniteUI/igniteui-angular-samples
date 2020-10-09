import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxDialogComponent, SortingDirection, DefaultSortingStrategy, IDialogEventArgs, IgxGridCellComponent, IGridKeydownEventArgs } from 'igniteui-angular';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { Contract, REGIONS } from '../../services/financialData';
import { LocalDataService } from '../localData.service';

@Component({
  selector: 'app-grid-finjs-partial',
  templateUrl: './grid-finjs-partial.component.html',
  styleUrls: ['./grid-finjs-partial.component.scss']
})
export class GridFinjsPartialComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChild("chart1", { static: true }) public chart1: IgxCategoryChartComponent;
    @ViewChild("dialog", { static: true }) public dialog: IgxDialogComponent;

    public properties;
    public selectionMode = "multiple";
    public volume = 1000;
    public frequency = 500;
    public data = [];
    public chartData = [];
    public multiCellSelection: { data: any[] } = { data: [] };

    public contracts = Contract;
    public regions = REGIONS;
    private subscription;
    private _timer;
    private volumeChanged;
    constructor(private localService: LocalDataService, private elRef: ElementRef) {
        this.subscription = this.localService.getData(this.volume);
        this.localService.records.subscribe(x => { this.data = x; });
    }

    public ngOnInit() {
        this.grid1.groupingExpressions = [{
            dir: SortingDirection.Desc,
            fieldName: "Category",
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        },
        {
            dir: SortingDirection.Desc,
            fieldName: "Type",
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        },
        {
            dir: SortingDirection.Desc,
            fieldName: "Settlement",
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
        ];
    }

    public ngAfterViewInit() {
        this.grid1.hideGroupedColumns = true;
        this.grid1.reflow();
        this.selectFirstGroupAndFillChart();
        this._timer = setInterval(() => this.tickerAllPrices(this.grid1.data), this.frequency);

    }

    public selectFirstGroupAndFillChart() {
        this.properties = ["Price", "Country"];
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
        // tslint:disable-next-line: max-line-length
        const recordsToBeSelected = this.grid1.selectionService.getRowIDs(this.grid1.groupsRecords[0].groups[0].groups[0].records);
        recordsToBeSelected.forEach(item => {
            this.grid1.selectionService.selectRowById(item, false, true);
        });
    }
    public setChartConfig(xAsis, yAxis, title) {
        // update label interval and angle based on data
        this.setLabelIntervalAndAngle();

        // this.chart1.yAxisFormatLabel = this.formatYAxisLabel;
        this.chart1.xAxisTitle = xAsis;
        this.chart1.yAxisTitle = yAxis;
        this.chart1.chartTitle = title;
    }

    public onCloseHandler(evt: IDialogEventArgs) {
        if (this.grid1.navigation.activeNode) {
            if (this.grid1.navigation.activeNode.row === -1) {
                this.grid1.theadRow.nativeElement.focus();
            } else {
                this.grid1.tbody.nativeElement.focus();
            }
        }
    }

    public closeDialog(evt) {
        if (this.dialog.isOpen &&
            evt.shiftKey === true && evt.ctrlKey === true && evt.key.toLowerCase() === "d") {
            evt.preventDefault();
            this.dialog.close();
        }
    }

    public onChange(event: any) {
        if (this.grid1.groupingExpressions.length > 0) {
            this.grid1.groupingExpressions = [];
        } else {
            this.grid1.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: "Category",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Type",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Contract",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
            ];
        }
    }

    public rowSelectionChanged(args) {
        this.grid1.clearCellSelection();
        this.chartData = [];
        args.newSelection.forEach(row => {
            this.chartData.push(this.grid1.data[row]);
            this.chart1.notifyInsertItem(this.chartData, this.chartData.length - 1,
                this.grid1.data[row]);
        });
        this.setLabelIntervalAndAngle();
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
    }

    public openSingleRowChart(cell: IgxGridCellComponent) {
        this.chartData = [];
        setTimeout(() => {
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
        return value.toFixed(2);
    }

    public percentage(value: number) {
        return value.toFixed(2) + "%";
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
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

    public gridKeydown(evt) {
        if (this.grid1.selectedRows.length > 0 &&
            evt.shiftKey === true && evt.ctrlKey === true && evt.key.toLowerCase() === "d") {
            evt.preventDefault();
            this.dialog.open();
        }
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === "dataCell" && target.column.field === "Chart" && evt.key.toLowerCase() === "enter") {
            this.grid1.selectRows([target.row.rowID], true);
            this.openSingleRowChart(target);
        }
    }

    private tickerAllPrices(data: any) {
        this.grid1.data = this.updateAllPrices(data);
        (this.grid1 as any)._pipeTrigger++;
    }

    /**
     * Updates values in every record
     */
    private updateAllPrices(data: any[]): any[] {
        for (const dataRow of data) {
            this.randomizeObjectData(dataRow);
        }
        return Array.from(data);
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
}
