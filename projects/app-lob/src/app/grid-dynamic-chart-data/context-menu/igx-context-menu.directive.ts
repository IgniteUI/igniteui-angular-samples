import { AfterViewInit, Directive, EventEmitter, Optional, Output, NgZone } from "@angular/core";
import { AbsoluteScrollStrategy, AutoPositionStrategy, HorizontalAlignment, IgxGridComponent,
    IgxOverlayService, OverlayCancelableEventArgs, VerticalAlignment } from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, merge, takeUntil } from "rxjs/operators";
import { ChartIntegrationDirective } from "../directives/chart-integration/chart-integration.directive";
import { ConditionalFormattingDirective } from "../directives/conditional-formatting/conditional-formatting.directive";
import { IgxContextMenuComponent } from "./context-menu.component";

@Directive({
    selector: "[igxContextMenu]"
})
export class IgxContextMenuDirective implements AfterViewInit  {

    @Output() public onButtonClose = new EventEmitter<any>();

    public formatters = [];
    public charts = [];
    private _range;
    private _id;
    private _collapsed = true;
    private destroy$ = new Subject<any>();
    private _analyticsBtnSettings = {
        closeOnOutsideClick: false,
        modal: false,
        scrollStrategy: new AbsoluteScrollStrategy(),
        positionStrategy: new AutoPositionStrategy({
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom,
            verticalDirection: VerticalAlignment.Bottom, closeAnimation: null
        })
    };
    constructor(public grid: IgxGridComponent,
                @Optional() public textFormatter: ConditionalFormattingDirective,
                @Optional() public chartsDirective: ChartIntegrationDirective,
                private overlayService: IgxOverlayService) {}

    public ngAfterViewInit() {
        this.setUpGridListeners();
        if (this.textFormatter) {
            this.textFormatter.onFormattersReady.pipe(takeUntil(this.destroy$))
            .subscribe(names => this.formatters = names);
        }
        if (this.chartsDirective) {
            this.chartsDirective.onChartTypesDetermined.pipe(takeUntil(this.destroy$))
            .subscribe((args) => this.charts = args.chartsForCreation);
        }
        this.overlayService.onOpening.pipe(takeUntil(this.destroy$))
            .subscribe((args: OverlayCancelableEventArgs) => {
                if (args.componentRef) {
                    const instance = (args.componentRef.instance as IgxContextMenuComponent);
                    instance.contextDirective = this;
                }
            });
    }

    private setUpGridListeners() {
        this.grid.onRangeSelection.pipe(takeUntil(this.destroy$))
        .subscribe((args) => {
            this._range = args;
            if (this.chartsDirective) {
                this.chartsDirective.chartData =  this.grid.getSelectedData();
            }
            this.renderButton();
        });
        this.grid.verticalScrollContainer.onChunkLoad.pipe(merge(this.grid.parentVirtDir.onChunkLoad),
            filter(() => !!this._range), takeUntil(this.destroy$))
            .subscribe(() => {
                this.onButtonClose.emit();
                this.renderButton();
        });
        this.grid.onSelection.pipe(takeUntil(this.destroy$)).subscribe(() => {
           if (this.grid.selectedCells.length < 2) {
                this._range = undefined;
                this.close();
           }
        });
    }

    private renderButton() {
        if (!this._range) { return; }
        let rowIndex = this._range.rowEnd;
        let colIndex = +this._range.columnEnd;
        while (colIndex >= this._range.columnStart && !this.grid.navigation.isColumnFullyVisible(colIndex)) {
            colIndex--;
        }
        while (rowIndex >= this._range.rowStart && this.grid.navigation.shouldPerformVerticalScroll(rowIndex, -1)) {
            rowIndex--;
        }
        const field = this.grid.visibleColumns[colIndex] ? this.grid.visibleColumns[colIndex].field : "";
        const cell = this.grid.getCellByColumn(rowIndex, field);
        if (!cell || !this.isWithInRange(cell.rowIndex, cell.visibleColumnIndex)) {
            this.close();
            return;
        }
        this._analyticsBtnSettings.positionStrategy.settings.target = cell.nativeElement;
        this._collapsed ? this.show() : this.overlayService.reposition(this._id);
    }

    private show() {
        if (!this._collapsed) { return; }
        this._collapsed = false;
        this._id = this._id ? this._id :
            this.overlayService.attach(IgxContextMenuComponent, this._analyticsBtnSettings);
        this.overlayService.show(this._id);
    }

    private close() {
        if (this._collapsed) { return; }
        this._collapsed = true;
        this.overlayService.hide(this._id);
        this.onButtonClose.emit();
        this._id = undefined;
    }

    private isWithInRange(rInex, cIndex) {
        return rInex >= this._range.rowStart && rInex <= this._range.rowEnd
            && cIndex >= this._range.columnStart && cIndex <= this._range.columnEnd;
    }
}
