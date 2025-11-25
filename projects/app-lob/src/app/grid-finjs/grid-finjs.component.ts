/* eslint-disable max-len */
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, DOCUMENT, inject, Input } from '@angular/core';
import { CellType, GridSelectionMode, IGridKeydownEventArgs, IRowSelectionEventArgs, IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxExcelTextDirective, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { DefaultSortingStrategy, IgxOverlayOutletDirective, OverlaySettings, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxFocusDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { BehaviorSubject } from 'rxjs';
import { Contract, REGIONS, Stock } from '../data/financialData';
import { SignalRService } from '../services/signal-r.service';
import { IgxPreventDocumentScrollDirective } from '../../../../../src/app/directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-finjs-grid',
    templateUrl: './grid-finjs.component.html',
    styleUrls: ['./grid-finjs.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxSelectComponent, FormsModule, IgxFocusDirective, IgxSelectItemComponent, IgxCellTemplateDirective, IgxIconComponent, IgxIconButtonDirective, IgxOverlayOutletDirective, AsyncPipe, CurrencyPipe]
})
export class GridFinJSComponent implements OnInit {
    private el = inject(ElementRef);
    private document = inject<Document>(DOCUMENT);
    dataService = inject(SignalRService);

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;
    @Output() public selectedDataChanged = new EventEmitter<Stock[]>();
    @Output() public keyDown = new EventEmitter();
    @Output() public chartColumnKeyDown = new EventEmitter<Stock>();

    @Input() public allowChart = false;

    public contracts = Contract;
    public regions = REGIONS;
    public selectionMode: GridSelectionMode = 'multiple';
    public volume = 1000;
    public frequency = 500;
    public data$: BehaviorSubject<Stock[]>;
    public columnFormat = { digitsInfo: '1.3-3' };
    public columnFormatChangeP = { digitsInfo: '3.3-3' };
    public showToolbar = true;
    public isLoading = true;
    public overlaySettings: OverlaySettings = {
        modal: false
    };

    public ngOnInit(): void {
        this.dataService.getData(this.volume);
        this.overlaySettings.outlet = this.outlet;
        this.data$ = this.dataService.data;

        this.data$.subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
            };
        });

        // Set initially grouped columns
        this.toggleGrouping();
    }

    public rowSelectionChanged(args: IRowSelectionEventArgs): void {
        this.grid.clearCellSelection();
        this.selectedDataChanged.emit(args.newSelection);
    }

    public toggleGrouping(): void {
        if (this.grid.groupingExpressions.length > 0) {
            this.grid.groupingExpressions = [];
        } else {
            this.grid.groupingExpressions = [
                {
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

    public gridKeydown(evt: KeyboardEvent): void {
        if (this.grid.selectedRows.length > 0 &&
            evt.shiftKey === true && evt.ctrlKey === true && evt.key.toLowerCase() === 'd') {
            evt.preventDefault();
            this.keyDown.emit();
        }
    }

    public customKeydown(args: IGridKeydownEventArgs): void {
        const target: CellType = args.target as CellType;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.column.field === 'Chart' && evt.key.toLowerCase() === 'enter') {
            this.grid.selectRows([target.row.key], true);
            this.chartColumnAction(target);
        }
    }

    public chartColumnAction(target: CellType): void {
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
    private strongNegative = (rowData: any): boolean => rowData['changeP'] <= -1;

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
