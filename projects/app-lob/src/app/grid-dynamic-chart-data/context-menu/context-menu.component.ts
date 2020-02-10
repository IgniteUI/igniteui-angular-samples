import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { AbsoluteScrollStrategy, AutoPositionStrategy, HorizontalAlignment, IgxGridComponent,
    IgxOverlayService, IgxToggleDirective, OverlayCancelableEventArgs, VerticalAlignment } from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, merge, takeUntil } from "rxjs/operators";
import { ChartHostDirective } from "../directives/chart-integration/chart-integration.directive";
import { IgxChartMenuComponent } from "./chart-dialog/chart-dialog.component";
@Component({
    selector: "igx-context-menu",
    templateUrl: "./context-menu.component.html",
    styleUrls: ["./context-menu.component.scss"]
})
export class IgxContextMenuComponent implements AfterViewInit {

    @ViewChild("analyticsBtn", {read: IgxToggleDirective}) public button: IgxToggleDirective;
    @ViewChild("tabsMenu", {read: IgxToggleDirective}) public tabsMenu: IgxToggleDirective;
    @ViewChild("chartPreview", { read: ChartHostDirective, static: true })
    public chartPreview: ChartHostDirective;
    @ViewChild("chartPreviewDialog", {read: IgxToggleDirective}) public chartPreviewDialog: IgxToggleDirective;

    @Input()
    public grid: IgxGridComponent;

    @Input()
    public set formatter(value) {
        this._formatter = value;
        this.options.textFormatting = true;
    }
    public get formatter() {
        return this._formatter;
    }

    @Input()
    public set chartDirective(value) {
        this._chartDirective = value;
        this.options.chartCreation = true;
    }
    public get chartDirective() {
        return this._chartDirective;
    }

    public options = {
        textFormatting: false,
        chartCreation: false
    };
    public chartTypes;
    public textFormatters;
    public currentFormatter;
    public chartType;
    protected destroy$ = new Subject<any>();
    private _dialogId;
    private _formatter;
    private _chartDirective;
    private _range;
    private _analyticsBtnSettings = {
        closeOnOutsideClick: false,
        modal: false,
        scrollStrategy: new AbsoluteScrollStrategy(),
        positionStrategy: new AutoPositionStrategy(
            this.getPositionSettings(HorizontalAlignment.Right, VerticalAlignment.Bottom)
        )
    };
    private _chartDialogOS = {closeOnOutsideClick: false };
    private _tabsMenuOverlaySettings = {
        modal: false,
        scrollStrategy: new AbsoluteScrollStrategy(),
        positionStrategy: new AutoPositionStrategy(
            this.getPositionSettings(HorizontalAlignment.Center, VerticalAlignment.Bottom)
        )};
    private _chartPreviewDialogOverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        scrollStrategy: new AbsoluteScrollStrategy(),
        positionStrategy: new AutoPositionStrategy({
            ...this.getPositionSettings(HorizontalAlignment.Center, VerticalAlignment.Top),
            openAnimation: null
        })
    };

    constructor(private overlayService: IgxOverlayService) { }

    public ngAfterViewInit() {
        this.grid.onRangeSelection.pipe(takeUntil(this.destroy$))
            .subscribe((args) => {
                this._range = args;
                this.renderButton();
                this.chartDirective.chartData =  this.grid.getSelectedData();
            });
        this.grid.verticalScrollContainer.onChunkLoad.pipe(merge(this.grid.parentVirtDir.onChunkLoad),
            filter(() => !!this._range), takeUntil(this.destroy$))
            .subscribe(() => {
                this.renderButton();
                if (this.tabsMenu && !this.tabsMenu.collapsed) { this.tabsMenu.close(); }
            });
        this.overlayService.onOpening.pipe(takeUntil(this.destroy$))
            .subscribe((args: OverlayCancelableEventArgs) => {
                if (args.componentRef) {
                    const instance = (args.componentRef.instance as IgxChartMenuComponent);
                    instance.width = this.grid.nativeElement.clientWidth;
                    instance.height = this.grid.nativeElement.clientHeight;
                    instance.currentChartType = this.chartType;
                    instance.allCharts = this.chartTypes;
                    instance.chartDirective = this.chartDirective;
                    instance.onClose.subscribe(() => this.closeDialog());
                }
            });
        this.grid.onCellClick.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this._range = undefined;
            this.button.close();
        });
        this.button.onClosing.pipe(takeUntil(this.destroy$)).subscribe(() => this.tabsMenu.close());
        this.formatter.onFormattersReady.pipe(takeUntil(this.destroy$))
            .subscribe(names => this.textFormatters = names);
        this.chartDirective.onChartTypesDetermined.pipe(takeUntil(this.destroy$))
        .subscribe((args) => this.chartTypes = args.chartsForCreation);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public toggleTabMenu() {
        this._tabsMenuOverlaySettings.positionStrategy.settings.target = this.button.element;
        this.tabsMenu.collapsed ? this.tabsMenu.open(this._tabsMenuOverlaySettings) : this.tabsMenu.close();
    }

    public formatCells(condition) {
        this.currentFormatter = condition;
        this.formatter.formatCells(condition);
    }

    public clearFormat() {
        this.currentFormatter = undefined;
        this.formatter.clearFormatting();
    }

    public previewChart(chartType) {
        this.chartType = chartType;
        this.chartPreview.viewContainerRef.clear();
        this.chartDirective.chartFactory(chartType, this.chartPreview.viewContainerRef);
        this._chartPreviewDialogOverlaySettings.positionStrategy.settings.target = this.tabsMenu.element;
        this.chartPreviewDialog.open(this._chartPreviewDialogOverlaySettings);
    }

    public hidePreview() {
        this.chartPreviewDialog.close();
    }

    public openDialog(type) {
        this.chartType = type;
        this._dialogId = this._dialogId ? this._dialogId :
            this.overlayService.attach(IgxChartMenuComponent, this._chartDialogOS);
        this.overlayService.show(this._dialogId);
    }

    public closeDialog() {
        this.overlayService.hide(this._dialogId);
        this._dialogId = undefined;
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
            this.button.close();
            return;
        }
        this._analyticsBtnSettings.positionStrategy.settings.target = cell.nativeElement;
        this.button.collapsed ? this.button.open(this._analyticsBtnSettings) : this.button.reposition();
    }

    private isWithInRange(rInex, cIndex) {
        return rInex >= this._range.rowStart && rInex <= this._range.rowEnd
            && cIndex >= this._range.columnStart && cIndex <= this._range.columnEnd;
    }

    private getPositionSettings(horizontal, vertical) {
        return { horizontalDirection: horizontal, horizontalStartPoint: horizontal,
                 verticalStartPoint: vertical, verticalDirection: vertical, closeAnimation: null };
    }
}
