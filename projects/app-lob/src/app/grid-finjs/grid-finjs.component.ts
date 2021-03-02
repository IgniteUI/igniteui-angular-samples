import { ElementRef, Inject, Component, EventEmitter, OnInit, Output, ViewChild, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IgxGridComponent, SortingDirection, DefaultSortingStrategy, IgxGridCellComponent, IGridKeydownEventArgs, IRowSelectionEventArgs, OverlaySettings, IgxOverlayOutletDirective } from 'igniteui-angular';
import { Contract, REGIONS } from '../services/financialData';
import { LocalDataService } from './localData.service';
import { Subject } from 'rxjs';
import { SignalRService } from './signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  providers: [LocalDataService],
  selector: 'app-finjs-grid',
  templateUrl: './grid-finjs.component.html',
  styleUrls: ['./grid-finjs.component.scss']
})
export class GridFinJSComponent implements OnInit {
    public selectionMode = "multiple";
    public volume = 1000;
    public frequency = 500;
    public data$: any;
    public contracts = Contract;
    public regions = REGIONS;
    public columnFormat = { digitsInfo: '1.3-3'}
    public showToolbar = true;
    protected destroy$ = new Subject<any>();
    private subscription$;
    public overlaySettings: OverlaySettings = {
        modal: false
    };

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    @Output() public selectedDataChanged = new EventEmitter<any>();
    @Output() public keyDown = new EventEmitter<any>();
    @Output() public chartColumnKeyDown = new EventEmitter<any>();

    constructor(public finService: LocalDataService, private el: ElementRef, @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2, public signalRService: SignalRService, private http: HttpClient) {
    }

    public ngOnInit() {
        this.signalRService.startConnection();
        this.signalRService.addTransferDataListener();
        this.startHttpRequest();

        this.overlaySettings.outlet = this.outlet;
        //if (this.data$.length === 0) {
            this.data$ = this.signalRService.data;
            // this.finService.getData(this.volume);
            // this.subscription$ = this.finService.records.subscribe(x => {
            //     this.data = x;
            // });
        //}
        this.grid.groupingExpressions = [{
            dir: SortingDirection.Desc,
            fieldName: 'category',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        },
        {
            dir: SortingDirection.Desc,
            fieldName: 'type',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        },
        {
            dir: SortingDirection.Desc,
            fieldName: 'settlement',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
        ];
    }

    private startHttpRequest = () => {
        this.http.get('https://localhost:5001/webapi')
            .subscribe(res => {
                console.log(res);
            })
    }

    /** Event Handlers and Methods */
    public onChange(event: any) {
        if (this.grid.groupingExpressions.length > 0) {
            this.grid.groupingExpressions = [];
        } else {
            this.grid.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: 'category',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'type',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'contract',
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
                fieldName: 'category',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'type',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: 'contract',
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

    get gridWrapper(): HTMLElement {
        return this.el.nativeElement.querySelector(".grid__wrapper") as HTMLElement;
    }

    get controlsWrapper(): HTMLElement {
        return this.document.body.querySelector(".controls-wrapper") as HTMLElement;
    }

    /** Grid CellStyles and CellClasses */
    private negative = (rowData: any): boolean => {
        return rowData["changeP"] < 0;
    }
    private positive = (rowData: any): boolean => {
        return rowData["changeP"] > 0;
    }
    private changeNegative = (rowData: any): boolean => {
        return rowData["changeP"] < 0 && rowData["changeP"] > -1;
    }
    private changePositive = (rowData: any): boolean => {
        return rowData["changeP"] > 0 && rowData["changeP"] < 1;
    }
    private strongPositive = (rowData: any): boolean => {
        return rowData["changeP"] >= 1;
    }
    private strongNegative = (rowData: any, key: string): boolean => {
        return rowData["changeP"] <= -1;
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
