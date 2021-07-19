/* eslint-disable no-underscore-dangle */
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild
} from '@angular/core';
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IColumnExportingEventArgs,
    IgxColumnComponent,
    IgxCsvExporterService,
    IgxDateSummaryOperand,
    IgxExcelExporterService,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult,
    IgxToggleDirective,
    OverlaySettings,
    PositionSettings,
    VerticalAlignment,
    IgxGridCellComponent
} from 'igniteui-angular';
import { data, Employee } from './data';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
}

class DealsSummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'average' || obj.key === 'sum') {
                const summaryResult = obj.summaryResult;
                // apply formatting to float numbers
                if (Number(summaryResult) === summaryResult) {
                    obj.summaryResult = summaryResult.toLocaleString('en-us', { maximumFractionDigits: 2 });
                }
                return obj;
            }
        });
        return result;
    }
}

class EarliestSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'earliest') {
                obj.summaryResult = formatDate(obj.summaryResult);
                return obj;
            }
        });
        return result;
    }
}

class SoonSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'latest') {
                obj.label = 'Soon';
                obj.summaryResult = formatDate(obj.summaryResult);
                return obj;
            }
        });
        return result;
    }
}

@Component({
    selector: 'app-grid',
    styleUrls: ['./grid-crm.component.scss'],
    templateUrl: './grid-crm.component.html'
})
export class GridCRMComponent implements OnInit, AfterViewInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1!: IgxGridComponent;

    @ViewChild('toggleRefHiding') public toggleRefHiding!: IgxToggleDirective;
    @ViewChild('toggleRefPinning') public toggleRefPinning!: IgxToggleDirective;

    @ViewChild('hidingButton') public hidingButton!: ElementRef;
    @ViewChild('pinningButton') public pinningButton!: ElementRef;

    public localData: Employee[] = [];
    public dealsSummary = DealsSummary;
    public earliestSummary = EarliestSummary;
    public soonSummary = SoonSummary;

    public cols!: QueryList<IgxColumnComponent>;
    public hiddenColsLength: number;
    public pinnedColsLength: number;

    public searchText = '';
    public caseSensitive = false;
    public selectionMode = 'multiple';

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        // eslint-disable-next-line no-underscore-dangle
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };

    constructor(
        private csvExporter: IgxCsvExporterService,
        private excelExporter: IgxExcelExporterService) {

        const exporterCb = (args: IColumnExportingEventArgs) => {
            if (args.field === 'Deals') { args.cancel = true; }
        };

        this.excelExporter.columnExporting.subscribe(exporterCb);
        this.csvExporter.columnExporting.subscribe(exporterCb);
    }

    public ngOnInit() {
        const employees: Employee[] = data;
        for (const employee of employees) {
            this.getDeals(employee);
        }
        this.localData = employees;
    }

    public toggleHiding() {
        this._overlaySettings.target = this.hidingButton.nativeElement;
        this.toggleRefHiding.toggle(this._overlaySettings);
    }

    public getPhoto(cell: IgxGridCellComponent) {
        return cell.row.rowData.avatar;
    }

    public togglePinning() {
        this._overlaySettings.target = this.pinningButton.nativeElement;
        this.toggleRefPinning.toggle(this._overlaySettings);
    }

    public ngAfterViewInit() {
        this.cols = this.grid1.columnList;
        this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
        this.pinnedColsLength = this.cols.filter((col) => col.pinned).length;
    }

    public toggleVisibility(col: IgxColumnComponent) {
        if (col.hidden) {
            this.hiddenColsLength--;
        } else {
            this.hiddenColsLength++;
        }
        col.hidden = !col.hidden;
    }

    public togglePin(col: IgxColumnComponent, evt: any) {
        if (col.pinned) {
            this.grid1.unpinColumn(col.field);
            this.pinnedColsLength--;
        } else {
            if (this.grid1.pinColumn(col.field)) {
                this.pinnedColsLength++;
            } else {
                // if pinning fails uncheck the checkbox
                evt.checkbox.checked = false;
            }
        }
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public searchKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.grid1.findNext(this.searchText, this.caseSensitive);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.grid1.findPrev(this.searchText, this.caseSensitive);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.grid1.findNext(this.searchText, this.caseSensitive);
    }

    public clearSearch() {
        this.searchText = '';
        this.grid1.clearSearch();
    }

    public formatValue(val: any): string {
        return val.toLocaleString('en-us', { maximumFractionDigits: 2 });
    }

    public getDeals(employee: Employee): any {
        employee.deals = this.getDealsData();
    }

    public getDealsData(months?: number): any[] {
        if (months === undefined) {
            months = 12;
        }
        const deals: any[] = [];
        for (let m = 0; m < months; m++) {
            const value = this.getRandomNumber(-20, 30);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            deals.push({ Deals: value, Month: m });
        }
        return deals;
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
