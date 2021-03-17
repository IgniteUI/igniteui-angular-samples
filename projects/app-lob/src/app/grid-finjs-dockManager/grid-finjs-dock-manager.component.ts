import { ElementRef, Inject, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IgxGridComponent, SortingDirection, DefaultSortingStrategy, IgxGridCellComponent, IGridKeydownEventArgs, IRowSelectionEventArgs, OverlaySettings, IgxOverlayOutletDirective } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
// import { SignalRService } from './signal-r.service';

@Component({
  providers: [ ],
  selector: 'app-finjs-dock-manager',
  templateUrl: './grid-finjs-dock-manager.component.html',
  styleUrls: ['./grid-finjs-dock-manager.component.scss']
})
export class GridFinJSDockManagerComponent {
    public volume = 1000;
    public frequency = 500;
    public theme = false;
    public data$: any;
    public columnFormat = { digitsInfo: '1.3-3'}
    public showToolbar = true;
    protected destroy$ = new Subject<any>();
    public overlaySettings: OverlaySettings = {
        modal: false
    };

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


}