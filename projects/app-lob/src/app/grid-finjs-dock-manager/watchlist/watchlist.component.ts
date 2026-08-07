import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular/grids/core';

interface StockItem {
  symbol: string;
  name: string;
  lastPrice: number;
  change: number;
  changePct: number;
  currency: string;
  marketTime: string;
  volume: string;
  sharesAction: string;
  avgVol3M: string;
  dayLow: number;
  dayHigh: number;
  week52Low: number;
  week52High: number;
  marketCap: string;
  positive: boolean;
}

type MoversTab = 'Top Gainers' | 'Top Losers' | 'Most Active';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective],
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistComponent {
  public readonly searchQuery = input('');
  public readonly moverTabs: MoversTab[] = ['Top Gainers', 'Top Losers', 'Most Active'];
  public readonly activeMoverTab = signal<MoversTab>('Top Gainers');

  public readonly stocks: StockItem[] = [
    { symbol: 'MELI', name: 'MercadoLibre', lastPrice: 1857.03, change: -16.85, changePct: -0.90, currency: 'USD', marketTime: '9:59AM EDT', volume: '48,228', sharesAction: 'Add', avgVol3M: '540,044', dayLow: 1495.00, dayHigh: 1905.49, week52Low: 1495.00, week52High: 2548.50, marketCap: '94.146B', positive: false },
    { symbol: 'FDX', name: 'FedEx', lastPrice: 314.30, change: 0.64, changePct: 0.21, currency: 'USD', marketTime: '10:00AM EDT', volume: '54,454', sharesAction: 'Add', avgVol3M: '2.105M', dayLow: 174.13, dayHigh: 316.00, week52Low: 174.13, week52High: 345.37, marketCap: '74.995B', positive: true },
    { symbol: 'WMT', name: 'Walmart', lastPrice: 113.75, change: 0.05, changePct: 0.04, currency: 'USD', marketTime: '10:00AM EDT', volume: '1.376M', sharesAction: 'Add', avgVol3M: '22.034M', dayLow: 94.43, dayHigh: 114.27, week52Low: 94.43, week52High: 135.16, marketCap: '905.192B', positive: true },
    { symbol: 'WM', name: 'Waste Management', lastPrice: 234.81, change: 0.52, changePct: 0.22, currency: 'USD', marketTime: '9:58AM EDT', volume: '84,026', sharesAction: 'Add', avgVol3M: '2.198M', dayLow: 194.11, dayHigh: 234.81, week52Low: 194.11, week52High: 248.13, marketCap: '94.294B', positive: true },
    { symbol: 'BRK-B', name: 'Berkshire B', lastPrice: 489.50, change: -1.59, changePct: -0.32, currency: 'USD', marketTime: '10:00AM EDT', volume: '415,865', sharesAction: 'Add', avgVol3M: '5.093M', dayLow: 455.19, dayHigh: 490.56, week52Low: 455.19, week52High: 516.85, marketCap: '1.056T', positive: false },
    { symbol: 'UNIT', name: 'Uniti Group', lastPrice: 11.03, change: 0.02, changePct: 0.18, currency: 'USD', marketTime: '9:56AM EDT', volume: '79,080', sharesAction: 'Add', avgVol3M: '2.523M', dayLow: 5.30, dayHigh: 11.07, week52Low: 5.30, week52High: 12.94, marketCap: '2.678B', positive: true },
    { symbol: 'PFE', name: 'Pfizer', lastPrice: 24.58, change: 0.32, changePct: 1.32, currency: 'USD', marketTime: '10:00AM EDT', volume: '3.284M', sharesAction: 'Add', avgVol3M: '40.668M', dayLow: 23.11, dayHigh: 24.62, week52Low: 23.11, week52High: 28.75, marketCap: '140.064B', positive: true },
    { symbol: 'WFC', name: 'Wells Fargo', lastPrice: 86.49, change: 1.14, changePct: 1.34, currency: 'USD', marketTime: '10:00AM EDT', volume: '2.399M', sharesAction: 'Add', avgVol3M: '16.49M', dayLow: 72.78, dayHigh: 87.63, week52Low: 72.78, week52High: 97.76, marketCap: '264.676B', positive: true },
    { symbol: 'C', name: 'Citigroup', lastPrice: 134.24, change: 0.97, changePct: 0.73, currency: 'USD', marketTime: '10:00AM EDT', volume: '2.32M', sharesAction: 'Add', avgVol3M: '12.256M', dayLow: 87.94, dayHigh: 134.65, week52Low: 87.94, week52High: 147.96, marketCap: '228.957B', positive: true },
    { symbol: 'PG', name: 'Procter & Gamble', lastPrice: 145.85, change: -0.25, changePct: -0.17, currency: 'USD', marketTime: '10:00AM EDT', volume: '597,359', sharesAction: 'Add', avgVol3M: '9.122M', dayLow: 137.62, dayHigh: 146.52, week52Low: 137.62, week52High: 167.25, marketCap: '339.626B', positive: false },
    { symbol: 'IEMG', name: 'iShares EM ETF', lastPrice: 79.85, change: 0.13, changePct: 0.16, currency: 'USD', marketTime: '10:00AM EDT', volume: '1.033M', sharesAction: 'Add', avgVol3M: '12.968M', dayLow: 59.68, dayHigh: 80.14, week52Low: 59.68, week52High: 86.49, marketCap: '--', positive: true },
    { symbol: 'ADBE', name: 'Adobe', lastPrice: 226.98, change: 6.20, changePct: 2.81, currency: 'USD', marketTime: '10:00AM EDT', volume: '560,217', sharesAction: 'Add', avgVol3M: '6.414M', dayLow: 190.12, dayHigh: 227.81, week52Low: 190.12, week52High: 376.16, marketCap: '90.225B', positive: true },
    { symbol: 'EQIX', name: 'Equinix', lastPrice: 1024.11, change: 0.57, changePct: 0.06, currency: 'USD', marketTime: '9:59AM EDT', volume: '43,869', sharesAction: 'Add', avgVol3M: '590,222', dayLow: 720.62, dayHigh: 1027.87, week52Low: 720.62, week52High: 1128.68, marketCap: '101.002B', positive: true },
    { symbol: 'QCOM', name: 'Qualcomm', lastPrice: 179.04, change: 0.94, changePct: 0.53, currency: 'USD', marketTime: '10:00AM EDT', volume: '990,650', sharesAction: 'Add', avgVol3M: '23.527M', dayLow: 121.99, dayHigh: 180.71, week52Low: 121.99, week52High: 259.92, marketCap: '188.708B', positive: true },
    { symbol: 'MSFT', name: 'Microsoft', lastPrice: 389.79, change: 4.86, changePct: 1.26, currency: 'USD', marketTime: '10:00AM EDT', volume: '4.508M', sharesAction: 'Add', avgVol3M: '39.743M', dayLow: 349.20, dayHigh: 391.46, week52Low: 349.20, week52High: 555.45, marketCap: '2.896T', positive: true },
    { symbol: 'BLK', name: 'BlackRock', lastPrice: 1098.58, change: 73.14, changePct: 7.13, currency: 'USD', marketTime: '10:00AM EDT', volume: '334,440', sharesAction: 'Add', avgVol3M: '719,777', dayLow: 917.39, dayHigh: 1109.99, week52Low: 917.39, week52High: 1219.94, marketCap: '178.632B', positive: true },
    { symbol: 'ABNB', name: 'Airbnb', lastPrice: 148.56, change: 2.02, changePct: 1.38, currency: 'USD', marketTime: '9:59AM EDT', volume: '287,751', sharesAction: 'Add', avgVol3M: '3.789M', dayLow: 110.81, dayHigh: 150.19, week52Low: 110.81, week52High: 150.19, marketCap: '88.171B', positive: true }
  ];

  public readonly filteredStocks = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.stocks;
    }

    return this.stocks.filter(stock => {
      const combined = `${stock.symbol} ${stock.name} ${stock.sharesAction}`.toLowerCase();
      return combined.includes(query);
    });
  });

  public readonly movers = computed(() => {
    const dataset = this.filteredStocks();
    const tab = this.activeMoverTab();

    if (tab === 'Top Gainers') {
      return dataset
        .filter(stock => stock.changePct > 0)
        .sort((a, b) => b.changePct - a.changePct)
        .slice(0, 5);
    }

    if (tab === 'Top Losers') {
      return dataset
        .filter(stock => stock.changePct < 0)
        .sort((a, b) => a.changePct - b.changePct)
        .slice(0, 5);
    }

    return dataset
      .slice()
      .sort((a, b) => this.parseVolume(b.volume) - this.parseVolume(a.volume))
      .slice(0, 5);
  });

  public formatPrice(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  public formatSigned(value: number): string {
    const formatted = Math.abs(value).toFixed(2);
    return `${value >= 0 ? '+' : '-'}${formatted}`;
  }

  public formatSignedPct(value: number): string {
    const formatted = Math.abs(value).toFixed(2);
    return `${value >= 0 ? '+' : '-'}${formatted}%`;
  }

  public rangePosition(value: number, low: number, high: number): number {
    if (high <= low) {
      return 0;
    }
    const ratio = ((value - low) / (high - low)) * 100;
    return Math.min(100, Math.max(0, ratio));
  }

  public setActiveMoverTab(tab: MoversTab): void {
    this.activeMoverTab.set(tab);
  }

  private parseVolume(value: string): number {
    const normalized = value.trim().toUpperCase().replace(/,/g, '');
    const match = normalized.match(/^(\d+(?:\.\d+)?)([KMB])?$/);

    if (!match) {
      return 0;
    }

    const amount = Number(match[1]);
    const suffix = match[2];
    if (suffix === 'B') {
      return amount * 1_000_000_000;
    }

    if (suffix === 'M') {
      return amount * 1_000_000;
    }

    if (suffix === 'K') {
      return amount * 1_000;
    }

    return amount;
  }
}
