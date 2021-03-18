import { AfterContentInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { SignalRService } from '../grid-finjs/signal-r.service';

@Component({
  providers: [SignalRService],
  selector: 'app-finjs-dock-manager',
  templateUrl: './grid-finjs-dock-manager.component.html',
  styleUrls: ['./grid-finjs-dock-manager.component.scss']
})
export class GridFinJSDockManagerComponent implements OnInit, OnDestroy {
    public volume = 10000;
    public frequency = 100;
    public theme = false;
    public data: any;
    private _timer;

    constructor(public dataService: SignalRService) {}

    public ngOnInit() {
        this.dataService.startConnection();
        this.data = this.dataService.data;
        this.dataService.getData(this.volume);
    }

    public ngOnDestroy() {
        this.dataService.stopLiveData();
    }

    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    size: 50,
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: "gridStockPrices",
                    header: "Stock Prices",
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
                                            header: 'Forex'
                                        },
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            contentId: 'content4',
                                            header: 'List'
                                        }
                                    ]
                                }
                            ]
                        }},
                       {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: "etfStockPrices",
                        header: "ETF",
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
        { field: 'id', width: "136px", sortable: true, filterable: true, type: 'string' },
        { field: 'category', width: "120px", sortable: true, filterable: true, type: 'string' },
        { field: 'type', width: "100px", sortable: true, filterable: false, type: 'string' },
        { field: 'contract', width: "110px", sortable: true, filterable: true, type: 'string'},
        { field: 'price', width: "110px", sortable: true, filterable: true, type: 'currency' },
        { field: 'change', width: "120px", sortable: false, filterable: false, type: 'number' },
        { field: 'changeP', width: "100px", sortable: false, filterable: false, type: 'percent' },
        { field: 'buy', width: "110px", sortable: false, filterable: false, type: 'currency' },
        { field: 'sell', width: "110px", sortable: false, filterable: false, type: 'currency' },
        { field: 'openPrice', width: "120px", sortable: true, filterable: true, type: 'currency'},
        { field: 'lastUpdated', width: "120px", sortable: true, filterable: true, type: 'date'},
        { field: 'spread', width: "110px", sortable: false, filterable: false, type: 'number' },
        { field: 'volume', width: "110px", sortable: true, filterable: false, type: 'number' },
        { field: 'settlement', width: "100px", sortable: true, filterable: true, type: 'string' },
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

    public onPlayAction(event: any) {
        switch (event.action) {
            case 'playAll': {
                if (this.dataService.hasRemoteConnection) {
                    this.dataService.broadcastParams(this.frequency, this.volume, true);
                } else {
                   //  this._timer = setInterval(() => this.finGrid.dataService.updateAllPriceValues(currData), this.controller.frequency);
                }
                break;
            }
            case 'stop': {
                this.dataService.hasRemoteConnection ? this.dataService.stopLiveData() : this.stopFeed();
                break;
            }
            default: break;
        }
    }

    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }


}