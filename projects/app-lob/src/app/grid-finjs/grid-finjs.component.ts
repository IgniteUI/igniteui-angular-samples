import { ElementRef, Inject, AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IgxGridComponent, SortingDirection, DefaultSortingStrategy, IgxGridCellComponent, IGridKeydownEventArgs, IRowSelectionEventArgs, OverlaySettings, IgxOverlayOutletDirective } from 'igniteui-angular';
import { Contract, REGIONS } from '../services/financialData';
import { LocalDataService } from './localData.service';
// tslint:disable-next-line:no-implicit-dependencies
import ResizeObserver from "resize-observer-polyfill";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
    public showToolbar = true;
    protected destroy$ = new Subject<any>();
    private subscription$;
    private resizeContentToFit = new Subject();
    private contentObserver: ResizeObserver;
    public overlaySettings: OverlaySettings = {
        modal: false
    };

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    @Output() public selectedDataChanged = new EventEmitter<any>();
    @Output() public keyDown = new EventEmitter<any>();
    @Output() public chartColumnKeyDown = new EventEmitter<any>();

    constructor(public finService: LocalDataService, private el: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    }

    public ngOnInit() {
        this.overlaySettings.outlet = this.outlet;
        this.resizeContentToFit.pipe(takeUntil(this.destroy$)).subscribe(() => {
            const height = `${this.document.body.offsetHeight - this.controlsWrapper.offsetHeight - 5}px`;
            this.renderer.setStyle(this.gridWrapper, 'height', height);
        });
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
        this.contentObserver = new ResizeObserver(() => this.resizeContentToFit.next());
        this.contentObserver.observe(this.controlsWrapper);
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

    get gridWrapper(): HTMLElement {
        return this.el.nativeElement.querySelector(".grid__wrapper") as HTMLElement;
    }

    get controlsWrapper(): HTMLElement {
        return this.document.body.querySelector(".controls-wrapper") as HTMLElement;
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
