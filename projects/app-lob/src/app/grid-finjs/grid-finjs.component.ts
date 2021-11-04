/* eslint-disable max-len */
import { ElementRef, Inject, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IgxGridComponent, SortingDirection, DefaultSortingStrategy, CellType, IGridKeydownEventArgs, OverlaySettings, IgxOverlayOutletDirective } from 'igniteui-angular';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-finjs-grid',
  templateUrl: './grid-finjs.component.html',
  styleUrls: ['./grid-finjs.component.scss']
})
export class GridFinJSComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;
    @Output() public selectedDataChanged = new EventEmitter<any>();
    @Output() public keyDown = new EventEmitter<any>();
    @Output() public chartColumnKeyDown = new EventEmitter<any>();

    public selectionMode = 'multiple';
    public volume = 1000;
    public frequency = 500;
    public data$: any;
    public columnFormat = { digitsInfo: '1.3-3'};
    public columnFormatChangeP = { digitsInfo: '3.3-3'};
    public showToolbar = true;
    public isLoading = true;
    public overlaySettings: OverlaySettings = {
        modal: false
    };

    constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document, public dataService: SignalRService) { }

    public ngOnInit() {
        this.dataService.getData(this.volume);
        this.overlaySettings.outlet = this.outlet;
        this.data$ = this.dataService.data;

        this.data$.subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
            };
        });

        // Set initially grouped columns
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

    /** Event Handlers and Methods */
    public onChange() {
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

    public rowSelectionChanged(args) {
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
            evt.shiftKey === true && evt.ctrlKey === true && evt.key.toLowerCase() === 'd') {
            evt.preventDefault();
            this.keyDown.emit();
        }
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: CellType = args.target as CellType;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.column.field === 'Chart' && evt.key.toLowerCase() === 'enter') {
            this.grid.selectRows([target.row.rowID], true);
            this.chartColumnAction(target);
        }
    }

    public chartColumnAction(target) {
        this.chartColumnKeyDown.emit(target.row.data);


    }

    get gridWrapper(): HTMLElement {
        return this.el.nativeElement.querySelector('.grid__wrapper') as HTMLElement;
    }

    get controlsWrapper(): HTMLElement {
        return this.document.body.querySelector('.controls-wrapper') as HTMLElement;
    }

    /** Grid CellStyles and CellClasses */
    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any, key: string): boolean => rowData['changeP'] <= -1;

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
}
