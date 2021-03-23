import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, SortingDirection } from 'igniteui-angular';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { FloatingPanesService } from '../services/floating-panes.service';
import { SignalRService } from '../services/signal-r.service';
import { DockSlotComponent, GridHostDirective } from './dock-slot.component';
@Component({
  providers: [SignalRService],
  selector: 'app-finjs-dock-manager',
  templateUrl: './grid-finjs-dock-manager.component.html',
  styleUrls: ['./grid-finjs-dock-manager.component.scss']
})
export class GridFinJSDockManagerComponent implements OnInit, OnDestroy {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('grid2', { static: true }) public grid2: IgxGridComponent;
    @ViewChild(GridHostDirective) public host: GridHostDirective;
    @ViewChild("dock", { read: ElementRef }) public dockManager: ElementRef<HTMLIgcDockmanagerElement>;
    @ViewChildren(DockSlotComponent) public dockSlots: QueryList<DockSlotComponent>;

    public frequencyItems: number[] = [300, 600, 900];
    public frequency = this.frequencyItems[1];
    public dataVolumeItems: number[] = [500, 1000, 5000, 10000];
    public dataVolume: number = this.dataVolumeItems[1];
    public theme = false;
    public isLoading = true;
    public data: any;
    public liveData: boolean = true;
    public columnFormat = { digitsInfo: '1.3-3'}
    public columnFormatChangeP = { digitsInfo: '3.3-3'}
    private destroy$ = new Subject<any>();
    public slotCounter: number = 1;

    constructor(public dataService: SignalRService, private paneService: FloatingPanesService,
        private cdr: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) {}

    public ngOnInit() {
        this.dataService.startConnection(this.frequency, this.dataVolume, true);
        this.data = this.dataService.data;
        this.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;

                // Set initially grouped columns
                this.grid1.groupingExpressions = [{
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
            };
        });
    }

    public ngOnDestroy() {
        this.dataService.stopLiveData();
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public ngAfterViewInit() {
        setTimeout(() => {
            const x = (this.dockManager.nativeElement.getBoundingClientRect().width / 3);
            const y = (this.dockManager.nativeElement.getBoundingClientRect().height / 3);

            this.paneService.initialPanePosition = { x, y };
        }, 2000);
        this.grid2.selectColumns(["price", "change", "changeP"]);
    }

    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'actionPane',
                    header: 'Actions pane',
                    isPinned: false
                },
                {
                    size: 50,
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: "gridStockPrices",
                    header: "Stock Market Data",
                    allowClose: false
                },
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    size: 50,
                    panes: [
                        {
                        type: IgcDockManagerPaneType.documentHost,
                        size: 50,
                        rootPane: {
                            type: IgcDockManagerPaneType.splitPane,
                            orientation: IgcSplitPaneOrientation.horizontal,
                            panes: [
                                {
                                    type: IgcDockManagerPaneType.tabGroupPane,
                                    panes: [
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            contentId: 'forexMarket',
                                            header: 'Market Data 1'
                                        },
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            contentId: 'content4',
                                            header: 'Market Data 2'
                                        }
                                    ]
                                }
                            ]
                        }},
                       {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: "etfStockPrices",
                        header: "Market Data 3",
                        size: 50,
                        allowClose: false
                       }
                    ]
                }
            ]
        },
        floatingPanes: []
    };

    public columns = [
        { field: 'buy', width: "110px", sortable: false, filterable: false, type: 'currency' },
        { field: 'sell', width: "110px", sortable: false, filterable: false, type: 'currency' },
        { field: 'openPrice', width: "120px", sortable: true, filterable: true, type: 'currency'},
        { field: 'lastUpdated', width: "120px", sortable: true, filterable: true, type: 'date'},
        { field: 'spread', width: "110px", sortable: false, filterable: false, type: 'number' },
        { field: 'volume', width: "110px", sortable: true, filterable: false, type: 'number' },
        { field: 'settlement', width: "100px", sortable: true, filterable: true, type: 'string', groupable: true },
        { field: 'country', width: "100px", sortable: true, filterable: true, type: 'string'},
        { field: 'highD', width: "110px", sortable: true, filterable: false, type: 'currency' },
        { field: 'lowD', width: "110px", sortable: true, filterable: false, type: 'currency' },
        { field: 'highY', width: "110px", sortable: true, filterable: false, type: 'currency' },
        { field: 'lowY', width: "110px", sortable: true, filterable: false, type: 'currency' },
        { field: 'startY', width: "110px", sortable: true, filterable: false, type: 'currency' },
        { field: 'indGrou', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'indSect', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'indSubg', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'secType', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'issuerN', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'moodys', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'fitch', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'dbrs', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'collatT', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'curncy', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'security', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'sector', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'cusip', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'ticker', width: "136px", sortable: false, filterable: false, type: 'string'},
        { field: 'cpn', width: "136px", sortable: false, filterable: false, type: 'string'}
    ];

    public paramsChanged() {
        this.dataService.stopLiveData();
        this.dataService.startConnection(this.frequency, this.dataVolume, true);
        this.data = this.dataService.data;
    }

    public stopFeed() {
        this.dataService.stopLiveData();
    }

    public streamData(event) {
        if (event.checked) {
            this.paramsChanged();
        } else {
            this.stopFeed();
        }

        this.liveData = event.checked;
    }

    /** Grid CellStyles and CellClasses */
    private negative = (rowData: any): boolean => {
        return rowData["changeP"] < 0;
    }
    private positive = (rowData: any): boolean => {
        return rowData["changeP"] > 0;
    }
    private changeNegative = (rowData: any): boolean => {
        return rowData["changeP"] < 0 && rowData["changeP"] > -1;
    }
    private changePositive = (rowData: any): boolean => {
        return rowData["changeP"] > 0 && rowData["changeP"] < 1;
    }
    private strongPositive = (rowData: any): boolean => {
        return rowData["changeP"] >= 1;
    }
    private strongNegative = (rowData: any, key: string): boolean => {
        return rowData["changeP"] <= -1;
    }

    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };

    public createGrid() {
        const id: string = "slot-" + this.slotCounter++;
        const splitPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 550,
            floatingHeight: 350,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: id,
                    contentId: id
                }
            ]
        };
        this.paneService.appendPane(splitPane);
        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.cdr.detectChanges();

        // Create Dock Slot Component
        const dockSlotComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DockSlotComponent);
        const dockSlotComponent = this.host.viewContainerRef.createComponent(dockSlotComponentFactory);
        dockSlotComponent.instance.id = id;
        dockSlotComponent.instance.viewInit.pipe(first()).subscribe(() => {
            const gridViewContainerRef = dockSlotComponent.instance.gridHost.viewContainerRef;
            this.loadGridComponent(gridViewContainerRef, dockSlotComponent.instance.destroy$);
        });
    }

    public loadGridComponent(viewContainerRef: ViewContainerRef, destructor: Subject<any>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(IgxGridComponent);
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as IgxGridComponent).autoGenerate = true;
        this.dataService.data.pipe(takeUntil(destructor)).subscribe(d => componentRef.instance.data = d);
    }
}