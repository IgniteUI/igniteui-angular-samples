/* eslint-disable max-len */
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, OnDestroy, Pipe, PipeTransform, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { AutoPositionStrategy, CloseScrollStrategy, HorizontalAlignment, IColumnSelectionEventArgs, IgxDialogComponent, IgxGridComponent, IgxOverlayOutletDirective, IgxOverlayService, OverlayCancelableEventArgs, OverlayEventArgs, OverlaySettings, VerticalAlignment } from 'igniteui-angular';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { ResizeObserver } from '@juggle/resize-observer';
import { merge, noop, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';
import { FinancialData } from '../../data/financialData';
import { FloatingPanesService } from '../../services/floating-panes.service';
import { ChartIntegrationDirective, IDeterminedChartTypesArgs } from '../directives/chart-integration/chart-integration.directive';
import { CHART_TYPE } from '../directives/chart-integration/chart-types';
import { ConditionalFormattingDirective } from '../directives/conditional-formatting/conditional-formatting.directive';
import { DockSlotComponent } from './dock-slot/dock-slot.component';

@Pipe({
    name: 'hastDuplicateLayouts'
})
export class HastDuplicateLayouts implements PipeTransform {
    public transform(contentId: string, layout: IgcDockManagerLayout, chartTypes) {
        const count = this.hasDuplicateContentID(layout, contentId, 0);
        if (count === 0 && (chartTypes[contentId] || Object.keys(chartTypes).indexOf(contentId) !== -1)) {
            delete chartTypes[contentId];
            return false;
        }
        return count >= 1;

    }

    private hasDuplicateContentID = (ob, contentId, count) => {

        if (ob['contentId'] && ob['contentId'] === contentId) {
            count++;
        }

        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) { continue; }

            if ((typeof ob[i]) === 'object') {
                count = this.hasDuplicateContentID(ob[i], contentId, count);
            }
        }
        return count;
    };
}

@Component({
    selector: 'app-data-analysis-dock-manager',
    templateUrl: './data-analysis-dock-manager.component.html',
    styleUrls: ['./data-analysis-dock-manager.component.scss'],
    providers: [FloatingPanesService]
})
export class DataAnalysisDockManagerComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('dock', { read: ElementRef })
    public dockManager: ElementRef<HTMLIgcDockmanagerElement>;

    @ViewChild(ConditionalFormattingDirective, { read: ConditionalFormattingDirective, static: true })
    public formatting: ConditionalFormattingDirective;

    @ViewChild(ChartIntegrationDirective, { read: ChartIntegrationDirective, static: true })
    public chartIntegration: ChartIntegrationDirective;

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('contextDialog', { static: true })
    public contextDialog: IgxDialogComponent;

    @ViewChild('dialogContent', { read: ElementRef })
    public dialogContent: ElementRef<any>;

    @ViewChildren(DockSlotComponent)
    public dockSlots: QueryList<DockSlotComponent>;

    @ViewChild('template', { read: TemplateRef })
    public emptyChartTemplate: TemplateRef<any>;

    public data;
    public chartData = [];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public selectedCharts = {};
    public range;
    public currentFormatter;
    public hasFormatter = false;
    public headersRenderButton = false;

    protected destroy$ = new Subject<any>();
    private _contextDilogOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: null
    };

    private _esfOverlayId;
    private rowIndex;
    private colIndex;
    private gridEventEmitters;
    private gridResizeNotify = new Subject();
    private contentObserver: ResizeObserver;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.documentHost,
                    rootPane: {
                        type: IgcDockManagerPaneType.splitPane,
                        size: 75,
                        orientation: IgcSplitPaneOrientation.horizontal,
                        panes: [
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'grid',
                                header: 'Grid',
                                allowClose: false
                            }
                        ]
                    }
                },
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'chart-types-content',
                    header: 'Chart Types',
                    size: 25,
                    allowClose: false
                }
            ]
        },
        floatingPanes: []
    };

    constructor(private cdr: ChangeDetectorRef, private paneService: FloatingPanesService,
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService) {

    }

    public ngOnInit() {

        this.data = FinancialData.generateData(1000);
        this.gridResizeNotify.pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                if (this.contextmenu) {
                    this.disableContextMenu();
                }
                if (this._esfOverlayId) {
                    this.overlayService.hide(this._esfOverlayId);
                }
            });
        this.grid.rangeSelected.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(30))
            .subscribe(range => {
                if (this._esfOverlayId) {
                    this.overlayService.hide(this._esfOverlayId);
                }
                // Clear column selection
                this.grid.deselectAllColumns();
                if (this.grid.getSelectedRanges().length > 1) {
                    this.chartData = [];
                } else {
                    this.chartData = this.grid.getSelectedData();
                }

                this.currentFormatter = undefined;
                this.range = range;
                this.renderButton();
                this.createChartCommonLogic();
                this.headersRenderButton = false;
            });

        this.grid.columnSelectionChanging.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(100))
            .subscribe((args: IColumnSelectionEventArgs) => {
                if (this._esfOverlayId) {
                    this.overlayService.hide(this._esfOverlayId);
                }
                // Clear range selection
                this.grid.clearCellSelection();
                this.chartData = this.grid.getSelectedColumnsData();
                this.currentFormatter = undefined;
                this.range = {};
                this.renderHeaderButton();
                this.createChartCommonLogic();
                this.headersRenderButton = true;
            });

        this.gridEventEmitters = merge(this.grid.filteringDone,
            this.grid.sortingDone,
            this.grid.columnMoving,
            this.grid.pagingDone,
            this.grid.columnPin,
            this.grid.columnResized,
            this.grid.columnMovingEnd,
            this.grid.columnVisibilityChanged);

        this.gridEventEmitters.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (this.grid.selectedCells.length > 0) {
                this.grid.clearCellSelection();
            }
            if (this.grid.selectedColumns().length > 0) {
                this.grid.deselectAllColumns();
            }
            if (this.contextmenu) {
                this.disableContextMenu();
                this.range = undefined;
            }
            if (this.hasFormatter) {
                this.clearFormatting();
            }
        });

        this.overlayService.opening.subscribe((evt: OverlayCancelableEventArgs) => {
            if (evt.componentRef && evt.componentRef.instance &&
                (evt.componentRef.instance as any).className === 'igx-excel-filter') {
                this.disableContextMenu();
                this._esfOverlayId = evt.id;
            }
        });

        this.overlayService.closed.subscribe((evt: OverlayEventArgs) => {
            if (evt.componentRef &&
                evt.componentRef.instance &&
                (evt.componentRef.instance as any).className === 'igx-excel-filter' &&
                evt.id === this._esfOverlayId) {
                this._esfOverlayId = undefined;
            }
        });
    }

    public createChartCommonLogic() {
        if (Object.keys(this.selectedCharts).length !== 0) {
            setTimeout(() => {
                Object.keys(this.selectedCharts).forEach((c: CHART_TYPE) => {
                    const chartHost = this.getChartHostFromSlot(c);
                    if (this.availableCharts.indexOf(c) !== -1) {
                        if (c !== CHART_TYPE.PIE && typeof this.selectedCharts[c] === 'object') {
                            this.selectedCharts[c] = this.chartIntegration.chartFactory(c, null, this.selectedCharts[c]);
                        } else {
                            chartHost.viewContainerRef.clear();
                            this.selectedCharts[c] = this.chartIntegration.chartFactory(c, chartHost.viewContainerRef);
                        }
                    } else {
                        chartHost.viewContainerRef.clear();
                        const embeddedView = chartHost.viewContainerRef.createEmbeddedView(this.emptyChartTemplate);
                        embeddedView.detectChanges();
                        this.selectedCharts[c] = 'Empty';
                    }
                });
            });
        }
    }

    public getChartHostFromSlot(type: CHART_TYPE) {
        return this.dockSlots.find(s => s.id === type).chartHost;
    }

    public ngAfterViewInit(): void {
        this.contentObserver = new ResizeObserver(() => this.gridResizeNotify.next());
        this.contentObserver.observe(this.grid.nativeElement);
        this.dialogContent.nativeElement.onpointerdown = event => event.stopPropagation();

        this.allCharts = this.chartIntegration.getAllChartTypes();
        this.chartIntegration.chartTypesDetermined.subscribe((args: IDeterminedChartTypesArgs) => {
            if (args.chartsAvailability.size === 0 || args.chartsForCreation.length === 0) {
                this.chartIntegration.disableCharts(this.allCharts);
            } else {
                args.chartsAvailability.forEach((isAvailable, chart) => {
                    if (args.chartsForCreation.indexOf(chart) === -1) {
                        this.chartIntegration.disableCharts([chart]);
                    } else {
                        this.chartIntegration.enableCharts([chart]);
                    }
                });
            }
            this.availableCharts = this.chartIntegration.getAvailableCharts();
        });
        this.cdr.detectChanges();

        this.formatting.formattersReady.pipe(takeUntil(this.destroy$)).subscribe(names => this.formattersNames = names);
        this.grid.dataPreLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            filter(() => this.range),
            takeUntil(this.destroy$))
            .subscribe(() => !this.contextmenu ? (this.headersRenderButton ? this.renderHeaderButton() : this.renderButton()) : noop());
        this.grid.parentVirtDir.chunkLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            filter(() => this.range),
            takeUntil(this.destroy$))
            .subscribe(() => {
                if (!this.contextmenu) { this.headersRenderButton ? this.renderHeaderButton() : this.renderButton(); }
            });

        this.grid.selected.pipe(
            filter(() => this.range),
            takeUntil(this.destroy$))
            .subscribe((args: any) => {
                if (this.grid.selectedCells.length < 2 || args.expressions) {
                    this.range = undefined;
                    this.disableContextMenu();
                    if (this._esfOverlayId) {
                        this.overlayService.hide(this._esfOverlayId);
                    }
                    this.cdr.detectChanges();
                }
            });

        window.onresize = () => {
            const x = (this.dockManager.nativeElement.getBoundingClientRect().width / 3);
            const y = (this.dockManager.nativeElement.getBoundingClientRect().height / 3);
            this.paneService.initialPanePosition = { x, y };
        };

        setTimeout(() => {
            const x = (this.dockManager.nativeElement.getBoundingClientRect().width / 3);
            const y = (this.dockManager.nativeElement.getBoundingClientRect().height / 3);

            this.paneService.initialPanePosition = { x, y };

            const handler = (component) => {
                const _this = component;
                return {
                    deleteProperty(target, prop) {
                        if (target[prop].type) {
                            _this.paneService.removePane(target[prop]);
                            _this.cdr.detectChanges();
                        }
                        return true;
                    }
                };
            };
            this.dockManager.nativeElement.layout.floatingPanes = new Proxy(this.dockManager.nativeElement.layout.floatingPanes, handler(this));
        }, 1000);
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
    public allCharts: CHART_TYPE[] = [];
    public chartTypes = ['Column', 'Area', 'Bar', 'Line', 'Scatter', 'Pie'];

    public toggleContextDialog(btn) {
        if (!this.contextDialog.isOpen) {
            this._contextDilogOverlaySettings.outlet = this.outlet;
            const positionStrategy = {
                verticalStartPoint: VerticalAlignment.Bottom,
                target: btn,
                openAnimation: null,
                closeAnimation: null
            };

            if (((this.grid.visibleColumns.length - 1) - this.colIndex) < 2 || !this.grid.navigation.isColumnFullyVisible(this.colIndex + 1)) {
                positionStrategy['horizontalDirection'] = HorizontalAlignment.Left;
                positionStrategy['horizontalStartPoint'] = HorizontalAlignment.Right;
            } else {
                positionStrategy['horizontalDirection'] = HorizontalAlignment.Center;
                positionStrategy['horizontalStartPoint'] = HorizontalAlignment.Center;
            }
            this._contextDilogOverlaySettings.positionStrategy = new AutoPositionStrategy({ ...positionStrategy });
            this.contextDialog.open(this._contextDilogOverlaySettings);
        } else {
            this.contextDialog.close();
        }
    }

    public formattersNames = [];

    public createChart(type: CHART_TYPE) {

        const floatingPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: type,
                    contentId: type
                }
            ]
        };
        const splitPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 550,
            floatingHeight: 350,
            panes: [floatingPane]
        };

        this.paneService.appendPane(splitPane);
        const chartHost = this.getChartHostFromSlot(type);
        chartHost.viewContainerRef.clear();
        const chart = this.chartIntegration.chartFactory(type, chartHost.viewContainerRef);

        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.selectedCharts[type] = chart;
        this.cdr.detectChanges();
    }

    public disableContextMenu() {
        this.contextmenu = false;
        this.contextDialog.close();
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

    private renderHeaderButton() {
        const selectedColumns = this.grid.selectedColumns();
        if (selectedColumns.length === 0) {
            return;
        }

        const selectedColumnsIndexes = selectedColumns.map(c => c.visibleIndex).sort((a, b) => a - b);
        this.colIndex = selectedColumnsIndexes[selectedColumnsIndexes.length - 1];
        this.rowIndex = undefined;

        while (selectedColumnsIndexes.length) {
            if (this.grid.navigation.isColumnFullyVisible(this.colIndex)) {
                break;
            }
            selectedColumnsIndexes.pop();
            this.colIndex = selectedColumnsIndexes[selectedColumnsIndexes.length - 1];
        }

        if (!selectedColumnsIndexes.length) {
            return;
        }

        const col = selectedColumns.find(c => c.visibleIndex === this.colIndex);

        if (!col) {
            return;
        }

        const headerCell = col.headerCell.nativeElement;
        this.contextmenuX = headerCell.getClientRects()[0].right;
        this.contextmenuY = headerCell.getClientRects()[0].bottom;
        this.contextmenu = true;
        this.cdr.detectChanges();
    }

    public isWithInRange(rowIndex, colIndex) {
        return rowIndex >= this.range.rowStart && rowIndex <= this.range.rowEnd
            && colIndex >= this.range.columnStart && colIndex <= this.range.columnEnd;
    }
}
