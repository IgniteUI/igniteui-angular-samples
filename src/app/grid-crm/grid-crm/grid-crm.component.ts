import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild
} from "@angular/core";
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxColumnComponent,
    IgxDateSummaryOperand,
    IgxExcelExporterOptions,
    IgxExcelExporterService,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult,
    IgxToggleDirective,
    OverlaySettings,
    PositionSettings,
    VerticalAlignment} from "igniteui-angular";
import { data } from "./data";

function formatDate(val: Date) {
    return new Intl.DateTimeFormat("en-US").format(val);
}

class DealsSummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === "average" || obj.key === "sum") {
                const summaryResult = obj.summaryResult;
                // apply formatting to float numbers
                if (Number(summaryResult) === summaryResult) {
                    obj.summaryResult = summaryResult.toLocaleString("en-us", {maximumFractionDigits: 2});
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
            if (obj.key === "earliest") {
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
            if (obj.key === "latest") {
                obj.label = "Soon";
                obj.summaryResult = formatDate(obj.summaryResult);
                return obj;
            }
        });
        return result;
    }
}

@Component({
    selector: "app-grid",
    styleUrls: ["./grid-crm.component.scss"],
    templateUrl: "./grid-crm.component.html"
})
export class GridCRMComponent implements OnInit, AfterViewInit {

    @ViewChild("grid1", { read: IgxGridComponent , static: true  })
    public grid1: IgxGridComponent;

    @ViewChild("toggleRefHiding", { static: false }) public toggleRefHiding: IgxToggleDirective;
    @ViewChild("toggleRefPinning", { static: false }) public toggleRefPinning: IgxToggleDirective;

    @ViewChild("hidingButton", { static: false }) public hidingButton: ElementRef;
    @ViewChild("pinningButton", { static: false }) public pinningButton: ElementRef;

    public localData: any[];
    public dealsSummary = DealsSummary;
    public earliestSummary = EarliestSummary;
    public soonSummary = SoonSummary;

    public cols: QueryList<IgxColumnComponent>;
    public hiddenColsLength: number;
    public pinnedColsLength: number;

    public searchText: string = "";
    public caseSensitive: boolean = false;

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };

    private frmt: Intl.DateTimeFormat;

    constructor(private excelExporterService: IgxExcelExporterService) { }

    public ngOnInit() {
        this.localData = data;
    }

    public toggleHiding() {
        this._overlaySettings.positionStrategy.settings.target = this.hidingButton.nativeElement;
        this.toggleRefHiding.toggle(this._overlaySettings);
    }

    public togglePinning() {
        this._overlaySettings.positionStrategy.settings.target = this.pinningButton.nativeElement;
        this.toggleRefPinning.toggle(this._overlaySettings);
    }

    public ngAfterViewInit() {
        this.cols = this.grid1.columnList;
        this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
        this.pinnedColsLength = this.cols.filter((col) => col.pinned).length;
        this.grid1.toolbar.columnPinningDropdown.width = "250px";
    }

    public toggleVisibility(col: IgxColumnComponent) {
        if (col.hidden) {
            this.hiddenColsLength--;
        } else {
            this.hiddenColsLength++;
        }
        col.hidden = !col.hidden;
    }

    public togglePin(col: IgxColumnComponent, evt) {
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

    public exportData() {
        this.excelExporterService.exportData(this.localData, new IgxExcelExporterOptions("Report"));
    }

    public formatDate(val: Date) {
        if (!this.frmt) {
            this.frmt = new Intl.DateTimeFormat("en-US");
        }
        return this.frmt.format(val);
    }

    public searchKeyDown(ev) {
        if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
            ev.preventDefault();
            this.grid1.findNext(this.searchText, this.caseSensitive);
        } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
            ev.preventDefault();
            this.grid1.findPrev(this.searchText, this.caseSensitive);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.grid1.findNext(this.searchText, this.caseSensitive);
    }

    public clearSearch() {
        this.searchText = "";
        this.grid1.clearSearch();
    }

    public formatValue(val: any): string {
        return val.toLocaleString("en-us", { maximumFractionDigits: 2 });
    }
}
