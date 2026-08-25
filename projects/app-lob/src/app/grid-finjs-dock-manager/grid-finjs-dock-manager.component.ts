import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, inject, signal } from '@angular/core';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ChartPanelComponent } from './chart-panel/chart-panel.component';
import { OrderTicketComponent } from './order-ticket/order-ticket.component';
import { PositionsGridComponent } from './positions-grid/positions-grid.component';
import { NewsPanelComponent } from './news-panel/news-panel.component';
import { AppDataStore } from './app-data-store';

const APP_SHELL_FIXED_WIDTH = 58;
const COMMAND_BAR_HEIGHT = 46;
const APP_CHROME_VERTICAL_BORDERS = 2;

export function buildLayout(viewportWidth: number, viewportHeight: number): IgcDockManagerLayout {
    const safeViewportWidth = Number.isFinite(viewportWidth) ? viewportWidth : 1440;
    const safeViewportHeight = Number.isFinite(viewportHeight) ? viewportHeight : 900;
    const minWatchlistSize = 300;
    const minInsightsPanelWidth = 300;
    const minChartSize = 400;
    const orderTicketHeightPx = 320;
    const minOrderTicketHeight = orderTicketHeightPx;
    const minMarketNewsHeight = 100;
    const minPositionsHeight = 42;
    const minInsightsPanelHeight = minOrderTicketHeight + minPositionsHeight + minMarketNewsHeight;
    const stackSizingReferenceHeight = Math.max(
        1,
        safeViewportHeight - COMMAND_BAR_HEIGHT - APP_CHROME_VERTICAL_BORDERS
    );
    const orderTicketSize = Math.min(0.9, Math.max(0.05, orderTicketHeightPx / stackSizingReferenceHeight));
    const remainingPanelSectionSize = (1 - orderTicketSize) / 2;
    const targetWatchlistSize = safeViewportWidth < 768 ? minWatchlistSize : 400;
    const targetInsightsPanelWidth = safeViewportWidth < 768 ? minInsightsPanelWidth : 400;
    const availableForSidePanes = Math.max(320, safeViewportWidth - APP_SHELL_FIXED_WIDTH - minChartSize);
    const maxEachSidePaneWidth = Math.max(minInsightsPanelWidth, Math.floor(availableForSidePanes / 2));
    const watchlistSize = Math.min(targetWatchlistSize, maxEachSidePaneWidth);
    const insightsPanelWidth = Math.min(
        targetInsightsPanelWidth,
        Math.max(minInsightsPanelWidth, availableForSidePanes - watchlistSize)
    );
    const chartSize = Math.max(minChartSize, safeViewportWidth - APP_SHELL_FIXED_WIDTH - watchlistSize - insightsPanelWidth);

    return {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'watchlist',
                    header: 'Watchlist',
                    size: watchlistSize,
                    minResizeWidth: minWatchlistSize,
                    allowPinning: false
                },
                {
                    type: IgcDockManagerPaneType.documentHost,
                    size: chartSize,
                    rootPane: {
                        type: IgcDockManagerPaneType.splitPane,
                        orientation: IgcSplitPaneOrientation.horizontal,
                        allowEmpty: true,
                        panes: [{
                            type: IgcDockManagerPaneType.tabGroupPane,
                            panes: [
                                { type: IgcDockManagerPaneType.contentPane, header: 'AAPL', contentId: 'chartAAPL', documentOnly: true },
                                { type: IgcDockManagerPaneType.contentPane, header: 'TSLA', contentId: 'chartTSLA', documentOnly: true },
                                { type: IgcDockManagerPaneType.contentPane, header: 'NVDA', contentId: 'chartNVDA', documentOnly: true }
                            ]
                        }]
                    }
                },
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    size: insightsPanelWidth,
                    minResizeWidth: minInsightsPanelWidth,
                    minResizeHeight: minInsightsPanelHeight,
                    panes: [
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'orderTicket',
                            header: 'Order Ticket',
                            size: orderTicketSize,
                            minResizeHeight: minOrderTicketHeight,
                            allowPinning: false
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'positions',
                            header: 'Positions & P&L',
                            size: remainingPanelSectionSize,
                            minResizeHeight: minPositionsHeight,
                            allowPinning: false
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'news',
                            header: 'Market News',
                            size: remainingPanelSectionSize,
                            minResizeHeight: minMarketNewsHeight,
                            allowPinning: false
                        }
                    ]
                }
            ]
        }
    };
}
@Component({
    selector: 'app-finjs-dock-manager',
    imports: [IgxIconComponent, WatchlistComponent, ChartPanelComponent, OrderTicketComponent, PositionsGridComponent, NewsPanelComponent],
    templateUrl: './grid-finjs-dock-manager.component.html',
    styleUrls: ['./grid-finjs-dock-manager.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridFinJSDockManagerComponent {
    private readonly appDataStore = inject(AppDataStore);
    private readonly enabledNavLabels = new Set(['Watchlist']);

    public readonly isDark = signal(true);
    public readonly activeNav = signal('Watchlist');
    public readonly activeStrategyIndex = signal(0);
    public readonly activeSymbolIndex = signal(0);
    public readonly searchQuery = signal('');

    public readonly strategyTabs = ['Basic Trading', 'Options Trading', 'Analysis'];
    public readonly symbolTabs = ['AAPL', 'TSLA', 'NVDA', 'Option Chain'];
    public readonly navItems = this.appDataStore.navItems;
    public readonly indices = this.appDataStore.indices;
    public readonly layout = signal(buildLayout(
        typeof window === 'undefined' ? 1440 : window.innerWidth,
        typeof window === 'undefined' ? 900 : window.innerHeight
    ));

    public toggleTheme(): void {
        this.isDark.update(v => !v);
    }

    public isNavEnabled(label: string): boolean {
        return this.enabledNavLabels.has(label);
    }

    public setActiveNav(label: string): void {
        if (!this.isNavEnabled(label)) {
            return;
        }

        this.activeNav.set(label);
    }

    public updateSearchQuery(event: Event): void {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) {
            return;
        }

        this.searchQuery.set(target.value);
    }

    public setStrategyTab(index: number): void {
        this.activeStrategyIndex.set(index);
    }

    public setSymbolTab(index: number): void {
        this.activeSymbolIndex.set(index);
    }

    public onStrategyTabKeydown(event: KeyboardEvent, index: number): void {
        this.handleTabKeydown(event, index, this.strategyTabs.length, 'strategy-tab', i => this.activeStrategyIndex.set(i));
    }

    public onSymbolTabKeydown(event: KeyboardEvent, index: number): void {
        this.handleTabKeydown(event, index, this.symbolTabs.length, 'symbol-tab', i => this.activeSymbolIndex.set(i));
    }

    private handleTabKeydown(
        event: KeyboardEvent,
        index: number,
        total: number,
        idPrefix: string,
        selectTab: (nextIndex: number) => void
    ): void {
        const key = event.key;

        if (key === ' ' || key === 'Enter') {
            event.preventDefault();
            selectTab(index);
            return;
        }

        let nextIndex = index;

        if (key === 'ArrowRight') {
            nextIndex = (index + 1) % total;
        } else if (key === 'ArrowLeft') {
            nextIndex = (index - 1 + total) % total;
        } else if (key === 'Home') {
            nextIndex = 0;
        } else if (key === 'End') {
            nextIndex = total - 1;
        } else {
            return;
        }

        event.preventDefault();
        selectTab(nextIndex);
        if (typeof document !== 'undefined') {
            document.getElementById(`${idPrefix}-${nextIndex}`)?.focus();
        }
    }
}
