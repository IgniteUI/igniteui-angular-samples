import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from "@angular/core";
import { AbsoluteScrollStrategy, AutoPositionStrategy, HorizontalAlignment,
    IgxOverlayService, IgxToggleDirective, OverlayCancelableEventArgs, VerticalAlignment } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IgxChartMenuComponent } from "./chart-dialog/chart-dialog.component";
@Component({
    selector: "igx-context-menu",
    templateUrl: "./context-menu.component.html",
    styleUrls: ["./context-menu.component.scss"]
})
export class IgxContextMenuComponent implements AfterViewInit {

    @ViewChild("analyticsBtn") public button: ElementRef;
    @ViewChild("tabsMenu", {read: IgxToggleDirective}) public tabsMenu: IgxToggleDirective;
    @ViewChild("chartPreview", { read: ViewContainerRef }) public chartPreview: ViewContainerRef;
    @ViewChild("chartPreviewDialog", {read: IgxToggleDirective}) public chartPreviewDialog: IgxToggleDirective;

    public contextDirective;
    public chartTypes = [];
    public textFormatters = [];
    public currentFormatter;
    public currentChartType;
    private destroy$ = new Subject<any>();
    private _dialogId;
    private _chartDialogOS = { closeOnOutsideClick: false };
    private _tabsMenuOverlaySettings = this.getPositionSettings(HorizontalAlignment.Center, VerticalAlignment.Bottom);
    private _chartPreviewDialogOS = this.getPositionSettings(HorizontalAlignment.Center, VerticalAlignment.Top);

    constructor(private overlayService: IgxOverlayService) { }

    public ngAfterViewInit() {
        this.chartTypes = this.contextDirective.charts;
        this.textFormatters = this.contextDirective.formatters;
        this.contextDirective.onButtonClose.pipe(takeUntil(this.destroy$))
        .subscribe(() => { if (this.tabsMenu && !this.tabsMenu.collapsed) { this.tabsMenu.close(); }});
        this.overlayService.onOpening.pipe(takeUntil(this.destroy$))
            .subscribe((args: OverlayCancelableEventArgs) => {
                if (args.componentRef) {
                    const instance = (args.componentRef.instance as IgxChartMenuComponent);
                    instance.width = this.contextDirective.grid.nativeElement.clientWidth;
                    instance.height = this.contextDirective.grid.nativeElement.clientHeight;
                    instance.currentChartType = this.currentChartType;
                    instance.allCharts = this.chartTypes;
                    instance.chartDirective = this.contextDirective.chartsDirective;
                    instance.onClose.subscribe(() => this.closeDialog());
                }
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public toggleTabMenu() {
        this._tabsMenuOverlaySettings.positionStrategy.settings.target = this.button.nativeElement;
        this.tabsMenu.collapsed ? this.tabsMenu.open(this._tabsMenuOverlaySettings) : this.tabsMenu.close();
    }

    public formatCells(condition) {
        this.currentFormatter = condition;
        this.contextDirective.textFormatter.formatCells(condition);
    }

    public clearFormat() {
        this.currentFormatter = undefined;
        this.contextDirective.textFormatter.clearFormatting();
    }

    public previewChart(currentChartType) {
        this.currentChartType = currentChartType;
        this.chartPreview.clear();
        this.contextDirective.chartsDirective.chartFactory(currentChartType, this.chartPreview);
        this._chartPreviewDialogOS.positionStrategy.settings.target = this.tabsMenu.element;
        this.chartPreviewDialog.open(this._chartPreviewDialogOS);
    }

    public hidePreview() {
        this.chartPreviewDialog.close();
    }

    public openDialog(type) {
        this.currentChartType = type;
        this._dialogId = this._dialogId ? this._dialogId :
            this.overlayService.attach(IgxChartMenuComponent, this._chartDialogOS);
        this.tabsMenu.close();
        this.overlayService.show(this._dialogId);
    }

    public closeDialog() {
        this.toggleTabMenu();
        this.overlayService.hide(this._dialogId);
        this._dialogId = undefined;
    }

    private getPositionSettings(horizontal, vertical) {
        return {
            closeOnOutsideClick: false, modal: false,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new AutoPositionStrategy(
            { horizontalDirection: horizontal, horizontalStartPoint: horizontal,
              verticalStartPoint: vertical, verticalDirection: vertical, closeAnimation: null
            })
        };
    }
}
