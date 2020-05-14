// tslint:disable: max-line-length
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { IgcContentPane, IgcDockManagerLayout, IgcDockManagerPaneType, IgcDockManagerPoint, IgcSplitPane, IgcSplitPaneOrientation } from "dockmanager-webcomponent";
import { AutoPositionStrategy, CloseScrollStrategy, HorizontalAlignment, IgxButtonDirective, IgxDialogComponent, IgxGridComponent, IgxOverlayOutletDirective, IgxTabsComponent, VerticalAlignment } from "igniteui-angular";
import { noop, Subject } from "rxjs";
import { debounceTime, takeUntil, tap } from "rxjs/operators";
import { FinancialData } from "../../services/financialData";
import { ChartHostDirective, ChartIntegrationDirective, IDeterminedChartTypesArgs } from "../directives/chart-integration/chart-integration.directive";
import { CHART_TYPE } from "../directives/chart-integration/chart-types";
import { ConditionalFormattingDirective } from "../directives/conditional-formatting/conditional-formatting.directive";
import { FloatingPanesService } from "./floating-panes.service";
@Component({
  selector: "app-data-analysis-dock-manager",
  templateUrl: "./data-analysis-dock-manager.component.html",
  styleUrls: ["./data-analysis-dock-manager.component.scss"],
  providers: [FloatingPanesService]
})
export class DataAnalysisDockManagerComponent implements OnInit {

    public data;
    @ViewChild("dock", {read: ElementRef})

    public dockManager: ElementRef<HTMLIgcDockmanagerElement>;
    @ViewChild(ConditionalFormattingDirective, { read: ConditionalFormattingDirective, static: true })
    public formatting: ConditionalFormattingDirective;

    @ViewChild(ChartIntegrationDirective, {read: ChartIntegrationDirective, static: true})
    public chartIntegration: ChartIntegrationDirective;

    @ViewChild("grid", { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("contextDialog", { static: true })
    public contextDialog: IgxDialogComponent;

    @ViewChild(IgxTabsComponent, { static: true })
    public tabs: IgxTabsComponent;

    @ViewChildren(ChartHostDirective)
    public slots: QueryList<ChartHostDirective>;

    public chartData = [];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public currentChartTypes = {};
    public range;
    public currentFormatter;

    protected destroy$ = new Subject<any>();
    private _contextDilogOverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: null
    };

    private rowIndex;
    private colIndex;

    constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private paneService: FloatingPanesService) {
    }

    public ngOnInit() {
        (this.tabs.headerContainer.nativeElement as HTMLElement).onpointerdown = event => event.stopPropagation();

        this.data = new FinancialData().generateData(1000);

        this.grid.onRangeSelection.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(200))
            .subscribe(range => {
                this.chartData = this.grid.getSelectedData();
                this.range = range;
                this.tabs.tabs.first.isSelected = true;
                this.renderButton();
                const btn = document.getElementsByClassName("analytics-btn")[0];
                setTimeout(() => {
                    this.toggleContextDialog(btn);
                });
            });
    }

    public ngAfterViewInit(): void {
         this.availableCharts = this.chartIntegration.getAllChartTypes();

         this.cdr.detectChanges();
        // this.chartIntegration.onChartTypesDetermined.subscribe((args: IDeterminedChartTypesArgs) => {

        // });
         this.formatting.onFormattersReady.pipe(takeUntil(this.destroy$)).subscribe(names => this.formattersNames = names);
         this.grid.onCellClick.pipe(takeUntil(this.destroy$)).subscribe(() => this.range = undefined);
         this.grid.onDataPreLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => this.range && !this.contextmenu ? this.renderButton() : noop());
         this.grid.parentVirtDir.onChunkLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => {
                if (this.range) { this.renderButton(); }
            });

         setTimeout(() => {
                const x = this.dockManager.nativeElement.getBoundingClientRect().width / 2;
                const y = this.dockManager.nativeElement.getBoundingClientRect().height / 2;

                this.paneService.initialPosition = {x, y};
            }, 1000);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    // tslint:disable: member-ordering
    public chartTypesMenuX;
    public chartTypesMenuY;

    public availableCharts: CHART_TYPE[] = [];
    public chartTypes = ["Column", "Area", "Bar", "Line", "Scatter", "Pie"];

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
                        contentId: "grid",
                        header: "Grid"
                    }
                ]
            }
            },
            {
                type: IgcDockManagerPaneType.contentPane,
                contentId: "chart-types-content",
                header: "Chart Types",
                size: 20
            }
        ]
        },
        floatingPanes: []
      };

    public toggleContextDialog(btn) {
        if (!this.contextDialog.isOpen) {
            this._contextDilogOverlaySettings.outlet = this.outlet;
            const positionStrategy = {
                verticalStartPoint: VerticalAlignment.Bottom,
                target: btn
            };

            if (((this.grid.visibleColumns.length - 1) - this.colIndex) < 2 || !this.grid.navigation.isColumnFullyVisible(this.colIndex + 1)) {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Left;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Right;
            } else {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Center;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Center;
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
            floatingWidth: 400,
            floatingHeight: 300,
            floatingLocation: { x: 750, y: 350 },
            panes: [floatingPane]
        };

        this.paneService.appendChartPane(splitPane);
        const chartHost = this.slots.find(s => s.viewContainerRef.element.nativeElement.id === type);
        const chart = this.chartIntegration.chartFactory(type, chartHost.viewContainerRef);
        this.docLayout.floatingPanes.push(splitPane);
        this.docLayout = {...this.docLayout};
        this.currentChartTypes[type] = chart;
        this.cdr.detectChanges();
    }

    public disableContextMenu() {
        this.contextmenu = false;
        this.contextDialog.close();
    }
    // What we check here and why we need a lister on host level
    @HostListener("pointerdown", ["$event"])
    public onPointerDown(event) {
        if (!event.target.parentElement.classList.contains("analytics-btn") &&
            event.target.className.indexOf("btn") === -1 &&
            event.target.className.indexOf("action") === -1 &&
            event.target.className.indexOf("tab-option") === -1) {
            this.disableContextMenu();
        }
    }

    public analyse(condition) {
        this.currentFormatter = condition;
        this.formatting.formatCells(condition);
    }

    public clearFormatting() {
        this.formatting.clearFormatting();
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
        if ((!this.grid.getRowByIndex(this.rowIndex) || (this.grid.rowList.toArray().indexOf(this.grid.getRowByIndex(this.rowIndex)) >= this.grid.rowList.length - 2) && this.rowIndex + 2 < this.grid.dataLength)) {
            const lastFullyVisibleRowIndex = this.grid.rowList.toArray()[this.grid.rowList.length - 3].index;
            const field = this.grid.visibleColumns[this.colIndex].field;
            cell = this.grid.getCellByColumn(lastFullyVisibleRowIndex, field);
        } else {
            cell = this.grid.getCellByColumn(this.rowIndex, this.grid.visibleColumns[this.colIndex].field);
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
