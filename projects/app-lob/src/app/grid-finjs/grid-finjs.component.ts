import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IgxGridComponent, SortingDirection, DefaultSortingStrategy, IgxGridCellComponent, IGridKeydownEventArgs, IRowSelectionEventArgs } from 'igniteui-angular';
import { Contract, REGIONS } from '../services/financialData';
import { LocalDataService } from './localData.service';

@Component({
  providers: [LocalDataService],
  selector: 'app-finjs-grid',
  templateUrl: './grid-finjs.component.html',
  styleUrls: ['./grid-finjs.component.scss']
})
export class GridFinJSComponent implements OnInit, AfterViewInit {
    public selectionMode = "multiple";
    public volume = 1000;
    public frequency = 500;
    public data = [];
    public multiCellSelection: { data: any[] } = { data: [] };
    public contracts = Contract;
    public regions = REGIONS;
    private subscription$;
    public showToolbar = true;

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;

    @Output() public selectedDataChanged = new EventEmitter<any>();
    @Output() public keyDown = new EventEmitter<any>();
    @Output() public chartColumnKeyDown = new EventEmitter<any>();

    constructor(public finService: LocalDataService) {
    }

    public ngOnInit() {
        if (this.data.length === 0) {
            this.finService.getData(this.volume);
            this.subscription$ = this.finService.records.subscribe(x => {
                this.data = x;
            });
        }
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
        this.grid.reflow();
    }

    /** Event Handlers and Methods */
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

    public rowSelectionChanged(args: IRowSelectionEventArgs) {
        this.grid.clearCellSelection();
        this.selectedDataChanged.emit(args.newSelection);
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
            this.keyDown.emit();
        }
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === "dataCell" && target.column.field === "Chart" && evt.key.toLowerCase() === "enter") {
            this.grid.selectRows([target.row.rowID], true);
            this.chartColumnAction(target);
        }
    }

    public chartColumnAction(target) {
        this.chartColumnKeyDown.emit(target.rowData);
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

    public ngOnDestroy() {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
