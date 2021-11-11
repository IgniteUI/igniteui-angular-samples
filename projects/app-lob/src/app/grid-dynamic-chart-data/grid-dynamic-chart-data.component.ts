/* eslint-disable max-len */
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { AutoPositionStrategy, CloseScrollStrategy, HorizontalAlignment,
         IgxDialogComponent, IgxGridComponent, IgxOverlayOutletDirective, IgxTabsComponent, VerticalAlignment, OverlaySettings } from 'igniteui-angular';
import { noop, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { FinancialData } from '../data/financialData';
import { ChartHostDirective, ChartIntegrationDirective, IDeterminedChartTypesArgs } from './directives/chart-integration/chart-integration.directive';
import { CHART_TYPE } from './directives/chart-integration/chart-types';
import { ConditionalFormattingDirective } from './directives/conditional-formatting/conditional-formatting.directive';

@Pipe({
    name: 'name'
})
export class NamePipe implements PipeTransform {
    public transform(name: string): string {
        let res = '';
        const upperCaseChars = name.match(/[A-Z0-9]{1,}/g);
        for (let index = 0; index < upperCaseChars.length; index++) {
          if (!(index === upperCaseChars.length - 1)) {
            res += name.substring(name.indexOf(upperCaseChars[index]),
              name.indexOf(upperCaseChars[index + 1])) + ' ';
          } else {
            res += name.substring(name.indexOf(upperCaseChars[index]));
          }
        }
        return res;
      }
}

@Pipe({
    name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {
    public transform(collection: string[], type: string): string[] {
        return collection.filter(types => types.indexOf(type) !== -1 && types.indexOf(type, type.length - 1) === -1);
      }
}
@Component({
    selector: 'app-grid-dynamic-chart-data',
    templateUrl: './grid-dynamic-chart-data.component.html',
    styleUrls: ['./grid-dynamic-chart-data.component.scss']
})
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(ConditionalFormattingDirective, { read: ConditionalFormattingDirective, static: true })
    public formatting: ConditionalFormattingDirective;

    @ViewChild(ChartIntegrationDirective, {read: ChartIntegrationDirective, static: true})
    public chartIntegration: ChartIntegrationDirective;

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild('chart', { read: ChartHostDirective, static: true })
    public chartHost: ChartHostDirective;

    @ViewChild('chartDialog', { static: true })
    public dialog: IgxDialogComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('chartSelectionDialog', { static: true })
    public chartSelectionDialog: IgxDialogComponent;

    @ViewChild('chartPreviewDialog', { static: true })
    public chartPreviewDialog: IgxDialogComponent;

    @ViewChild('chartPreview', { read: ChartHostDirective, static: true })
    public chartPreview: ChartHostDirective;

    @ViewChild(IgxTabsComponent, { static: true })
    public tabs: IgxTabsComponent;

    @ViewChild(IgxTabsComponent, { static: true })
    public tabElement: ElementRef<HTMLElement>;

    @ViewChild ('contentTab') tabsContainer: ElementRef<HTMLElement>;

    public columnSelectionType = 'multiple';
    public data;
    public opened = true;

    public chartData = [];
    public chartCondigAreaState = 'opened';
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public currentChartType: CHART_TYPE = CHART_TYPE.COLUMN_GROUPED;
    public fullScreenOpened = false;
    public range;
    public disableCreateChart = false;
    public currentFormatter;
    public hasFormatter = false;
    // Dialogs options
    public _chartDialogOverlaySettings = {
        closeOnOutsideClick: false,
        modal: true,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy()
    };

    protected destroy$ = new Subject<any>();
    private _chartSelectionDilogOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: null
    };

    private _chartPreviewDialogOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: new AutoPositionStrategy({
            horizontalDirection: HorizontalAlignment.Center,
            horizontalStartPoint: HorizontalAlignment.Center,
            verticalStartPoint: VerticalAlignment.Top,
            verticalDirection: VerticalAlignment.Top,
            openAnimation: null,
            closeAnimation: null
        })
    };

    private rowIndex;
    private colIndex;

    constructor(private cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        (this.tabs.headerContainer.nativeElement as HTMLElement).onpointerdown = event => event.stopPropagation();

        this.chartSelectionDialog.opening.subscribe(() => {
            this.currentChartType = CHART_TYPE.COLUMN_GROUPED;
        });

        this.dialog.opening.subscribe(() => {
            this.resetChartDialogInitialDimensions();
            this.chartSelectionDialog.close();
        });

        this.dialog.closing.subscribe(() => {
            this.resetChartDialogInitialDimensions();
            this.contextmenu = true;
            this.chartCondigAreaState = 'opened';
            this.opened = true;
        });

        this.chartSelectionDialog.closing.subscribe((evt) => this.chartPreviewDialog.close());

        this.data = FinancialData.generateData(1000);

        this.grid.rangeSelected.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(200))
            .subscribe(range => {
                const areAllRangesUnderSameColumns = this.grid.getSelectedRanges().every(r => (r.columnEnd === range.columnEnd && r.columnStart === range.columnStart) ||
                                                                                                r.rowEnd === range.rowEnd && r.rowStart === range.rowStart);
                if (!areAllRangesUnderSameColumns) {
                    this.disableCreateChart = true;
                } else {
                    this.disableCreateChart = false;
                    this.chartData = this.grid.getSelectedData();
                }
                this.range = range;
                this.tabs.items.first.selected = true;
                this.renderButton();
            });
    }

    public ngAfterViewInit(): void {
        this.chartIntegration.chartTypesDetermined.subscribe((args: IDeterminedChartTypesArgs) => {
            if (args.chartsAvailabilty.size === 0 || args.chartsForCreation.length === 0) {
                this.disableCreateChart = true;
            } else {
                args.chartsAvailabilty.forEach((isAvailable, chart) => {
                    if (args.chartsForCreation.indexOf(chart) === -1) {
                        this.chartIntegration.disableCharts([chart]);
                    } else {
                        this.chartIntegration.enableCharts([chart]);
                    }
                });

                this.availableCharts = this.chartIntegration.getAvailableCharts();
            }
        });
        this.formatting.formattersReady.pipe(takeUntil(this.destroy$)).subscribe(names => this.formattersNames = names);
        this.grid.cellClick.pipe(takeUntil(this.destroy$)).subscribe(() => this.range = undefined);
        this.grid.dataPreLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => this.range && !this.contextmenu ? this.renderButton() : noop());
        this.grid.parentVirtDir.chunkLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => {
                if (this.range) { this.renderButton(); }
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }

    /* eslint-disable @typescript-eslint/member-ordering */
    public chartTypesMenuX;
    public chartTypesMenuY;

    public availableCharts: CHART_TYPE[] = [];
    public chartTypes = ['Column', 'Area', 'Bar', 'Line', 'Scatter', 'Pie'];

    public toggleChartSelectionDialog(event) {

        if (!this.chartSelectionDialog.isOpen) {
            this._chartSelectionDilogOverlaySettings.outlet = this.outlet;
            const positionStrategy = {
                verticalStartPoint: VerticalAlignment.Bottom
            };

            if (((this.grid.visibleColumns.length - 1) - this.colIndex) < 2 || !this.grid.navigation.isColumnFullyVisible(this.colIndex + 1)) {
                positionStrategy['horizontalDirection'] = HorizontalAlignment.Left;
                positionStrategy['horizontalStartPoint'] = HorizontalAlignment.Right;
            } else {
                positionStrategy['horizontalDirection'] = HorizontalAlignment.Center;
                positionStrategy['horizontalStartPoint'] = HorizontalAlignment.Center;
            }
            this._chartSelectionDilogOverlaySettings.target = event.target;
            this._chartSelectionDilogOverlaySettings.positionStrategy = new AutoPositionStrategy({ ...positionStrategy });
            this.chartSelectionDialog.open(this._chartSelectionDilogOverlaySettings);
        } else {
            this.chartSelectionDialog.close();
        }
    }

    public previewChart(chart: CHART_TYPE) {
        this._chartPreviewDialogOverlaySettings.target = this.tabsContainer.nativeElement;
        this.chartPreviewDialog.toggleRef.element.style.width = (this.chartSelectionDialog.toggleRef as any).elementRef.nativeElement.clientWidth + 'px';
        this.createChart(chart, this.chartPreview, this.chartPreviewDialog, this._chartPreviewDialogOverlaySettings);
    }

    public formattersNames = [];

    public createChart(type: CHART_TYPE, host: ChartHostDirective, dialog: IgxDialogComponent, overlaySettings: any) {
        const chartHost = host;
        const dialogToOpen = dialog;
        const dialogOverlaySettings = overlaySettings;
        this.currentChartType = type;
        chartHost.viewContainerRef.clear();
        requestAnimationFrame(() => {
            this.chartIntegration.chartFactory(type, chartHost.viewContainerRef);
            if (dialogToOpen.isCollapsed) {
                dialogOverlaySettings.outlet = this.outlet;
                dialogToOpen.open(overlaySettings);
            }
        });
    }

    public disableContextMenu() {
        this.contextmenu = false;
        this.chartSelectionDialog.close();
    }
    // What we check here and why we need a lister on host level
    @HostListener('pointerdown', ['$event'])
    public onPointerDown(event) {
        if (!event.target.parentElement.classList.contains('analytics-btn') &&
            !event.target.classList.contains('more-btn') &&
            event.target.className.indexOf('btn') === -1 &&
            event.target.className.indexOf('action') === -1 &&
            event.target.className.indexOf('tab-option') === -1) {
            this.disableContextMenu();
        }
    }

    public analyse(condition) {
        this.currentFormatter = condition;
        this.hasFormatter = true;
        this.formatting.formatCells(condition);
    }

    public clearFormatting() {
        this.formatting.clearFormatting();
        this.hasFormatter = false;
        this.currentFormatter = undefined;
    }

    public toggle() {
        this.chartCondigAreaState = this.opened ? 'closed' : 'opened';
        this.opened = !this.opened;
    }

    public toggleFullScreen() {
        const height = this.fullScreenOpened ? (this.grid.nativeElement.clientHeight * 0.7) + 'px' : this.grid.nativeElement.clientHeight + 'px';
        const width = this.fullScreenOpened ?  (this.grid.nativeElement.clientWidth * 0.7) + 'px' : this.grid.nativeElement.clientWidth + 'px';

        requestAnimationFrame(() => {
            (this.dialog.toggleRef as any).elementRef.nativeElement.style.width = width;
            (this.dialog.toggleRef as any).elementRef.nativeElement.firstElementChild.style.height = height;
            (this.dialog.toggleRef as any).elementRef.nativeElement.style.transition = 'width .2s ease-in-out';
            (this.dialog.toggleRef as any).elementRef.nativeElement.firstElementChild.style.transition = 'height .3s ease-in-out';
        });
        this.fullScreenOpened = !this.fullScreenOpened;
    }
    private resetChartDialogInitialDimensions() {
        this.fullScreenOpened = false;
        this.dialog.toggleRef.element.style.width = (this.grid.nativeElement.clientWidth * (70 / 100)) + 'px';
        (this.dialog.toggleRef.element.firstChild as HTMLElement).style.height = (this.grid.nativeElement.clientHeight * (70 / 100)) + 'px';
    }

    private renderButton() {
        this.rowIndex = this.range.rowEnd;
        this.colIndex = this.range.columnEnd;

        while (this.colIndex >= 0 && !this.grid.navigation.isColumnFullyVisible(this.colIndex)) {
            this.colIndex--;
        }

        if (this.colIndex < 0) {
            return;
        }

        let cell;
        if ((!this.grid.getRowByIndex(this.rowIndex) || (this.rowIndex >= this.grid.rowList.length - 2) && this.rowIndex + 2 < this.grid.dataLength)) {
            const lastFullyVisibleRowIndex = this.grid.rowList.toArray()[this.grid.rowList.length - 3].index;
            const field = this.grid.visibleColumns[this.colIndex].field;
            cell = this.grid.gridAPI.get_cell_by_index(lastFullyVisibleRowIndex, field);
        } else {
            cell = this.grid.gridAPI.get_cell_by_index(this.rowIndex, this.grid.visibleColumns[this.colIndex].field);
        }

        if (!cell) {
            return;
        }
        this.contextmenuX = cell.element.nativeElement.getClientRects()[0].right;
        this.contextmenuY = cell.element.nativeElement.getClientRects()[0].bottom;
        this.contextmenu = this.isWithInRange(cell.rowIndex, cell.visibleColumnIndex);
        this.cdr.detectChanges();
    }

    public isWithInRange(rowIndex, colIndex) {
        return rowIndex >= this.range.rowStart && rowIndex <= this.range.rowEnd
        && colIndex >= this.range.columnStart && colIndex <= this.range.columnEnd;
    }
}
