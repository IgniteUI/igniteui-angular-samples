import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxDialogComponent, SortingDirection, DefaultSortingStrategy, IDialogEventArgs, IgxGridCellComponent, IGridKeydownEventArgs } from 'igniteui-angular';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { Contract, REGIONS } from '../data/financialData';
import { FinancialDataService } from '../services/financial.service';

@Component({
  selector: 'app-finjs-grid',
  templateUrl: './grid-finjs.component.html',
  styleUrls: ['./grid-finjs.component.scss']
})
export class GridFinJSComponent implements OnInit, AfterViewInit {
    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
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
    private subscription$;
    public showToolbar = true;

    constructor(private localService: FinancialDataService, public cdr: ChangeDetectorRef) {
        this.localService.getData(this.volume);
        this.subscription$ = this.localService.records.subscribe(x => { this.data = x; });
    }

    public ngOnInit() {
        this.grid.groupingExpressions = [{
            dir: SortingDirection.Desc,
            fieldName: 'Category',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        },
        {
            dir: SortingDirection.Desc,
            fieldName: 'Type',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        },
        {
            dir: SortingDirection.Desc,
            fieldName: 'Settlement',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
        ];
    }

    public ngAfterViewInit() {
        this.grid.hideGroupedColumns = true;
        // this.grid.reflow();
    }

    /** Event Handlers and Methods */
    public onCloseHandler(evt: IDialogEventArgs) {
        if (this.grid.navigation.activeNode) {
            if (this.grid.navigation.activeNode.row === -1) {
                this.grid.theadRow.nativeElement.focus();
            } else {
                this.grid.tbody.nativeElement.focus();
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
        if (this.grid.groupingExpressions.length > 0) {
            this.grid.groupingExpressions = [];
        } else {
            this.grid.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: 'Category',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'Type',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'Contract',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
            ];
        }
    }

    public rowSelectionChanged(args) {
        this.grid.clearCellSelection();
        this.chartData = [];
        args.newSelection.forEach(row => {
            this.chartData.push(this.grid.data[row]);
            this.chart1.notifyInsertItem(this.chartData, this.chartData.length - 1,
                this.grid.data[row]);
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

    public toggleGrouping() {
        if (this.grid.groupingExpressions.length > 0) {
            this.grid.groupingExpressions = [];
        } else {
            this.grid.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: 'Category',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'Type',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'Contract',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
            ];
        }
    }

    public gridKeydown(evt) {
        if (this.grid.selectedRows.length > 0 &&
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
            this.grid.selectRows([target.row.rowID], true);
            this.openSingleRowChart(target);
        }
    }

    public selectFirstGroupAndFillChart() {
        this.properties = ["Price", "Country"];
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
        // tslint:disable-next-line: max-line-length
        const recordsToBeSelected = this.grid.selectionService.getRowIDs(this.grid.groupsRecords[0].groups[0].groups[0].records);
        recordsToBeSelected.forEach(item => {
            this.grid.selectionService.selectRowById(item, false, true);
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

    /** Grid Formatters */
    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public percentage(value: number) {
        return value.toFixed(2) + "%";
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    public formatYAxisLabel(item: any): string {
        return item + "test test";
    }

    /** Grid CellStyles and CellClasses */
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
    // tslint:enable:member-ordering

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

    public ngOnDestroy() {
        this.subscription$.unsubscribe();
    }

    get grouped(): boolean {
        return this.grid.groupingExpressions.length > 0;
    }
}
