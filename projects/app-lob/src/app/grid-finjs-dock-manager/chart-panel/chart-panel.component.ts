import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { IgxButtonDirective } from 'igniteui-angular/directives';

interface CandlePoint {
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}

type Range = '1W' | '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y';
const RANGE_DAYS: Record<Range, number> = {
  '1W': 7,
  '1M': 30,
  '3M': 63,
  '6M': 126,
  '1Y': 252,
  '3Y': 756,
  '5Y': 1260
};

@Component({
  selector: 'app-chart-panel',
  standalone: true,
  imports: [IgxFinancialChartModule, IgxButtonDirective, DecimalPipe],
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPanelComponent {
  public readonly symbol = input<string>('AAPL');
  public readonly basePrice = input<number>(200);

  public readonly selectedRange = signal<Range>('1Y');
  public readonly ranges: Range[] = ['1W', '1M', '3M', '6M', '1Y', '3Y', '5Y'];

  private readonly allData = computed(() => this.generateData(1260));

  public readonly chartData = computed(() => {
    const days = RANGE_DAYS[this.selectedRange()];
    const all = this.allData();
    return all.slice(Math.max(0, all.length - days));
  });

  public readonly currentPrice = computed(() => {
    const data = this.chartData();
    if (data.length === 0) {
      return this.basePrice();
    }
    return data[data.length - 1].Close;
  });

  public readonly priceChange = computed(() => {
    const data = this.chartData();
    if (data.length < 2) return { value: '0.00', pct: '0.00', positive: true };
    const first = data[0].Close;
    const last = data[data.length - 1].Close;
    const diff = last - first;
    return {
      value: Math.abs(diff).toFixed(2),
      pct: Math.abs((diff / first) * 100).toFixed(2),
      positive: diff >= 0
    };
  });

  public readonly todayStats = computed(() => {
    const data = this.chartData();
    if (data.length === 0) {
      const p = this.basePrice();
      return {
        open: p.toFixed(2),
        high: p.toFixed(2),
        low: p.toFixed(2),
        vol: '0'
      };
    }

    const latest = data[data.length - 1];
    return {
      open: latest.Open.toFixed(2),
      high: latest.High.toFixed(2),
      low: latest.Low.toFixed(2),
      vol: this.formatVolume(latest.Volume)
    };
  });

  private readonly symbolSeed = computed(() => this.symbol().split('').reduce((acc, c, i) => acc + c.charCodeAt(0) * (i + 1), 0));

  private pseudoRandom(n: number): number {
    const x = Math.sin(n) * 10000;
    return x - Math.floor(x);
  }

  private generateData(days: number): CandlePoint[] {
    const seed = this.symbolSeed();
    const candles: CandlePoint[] = [];
    let closePrice = this.basePrice() * 0.9;

    for (let i = days; i >= 0; i--) {
      const d = new Date('2026-07-14');
      d.setDate(d.getDate() - i);
      if (d.getDay() === 0 || d.getDay() === 6) continue;

      const k = seed * 13 + i * 37;
      const drift = 0.00025;
      const noise = (this.pseudoRandom(k * 5.7) - 0.5) * 0.03;

      const open = closePrice;
      closePrice = open * (1 + drift + noise);

      const highSpread = 0.002 + this.pseudoRandom(k * 1.9) * 0.018;
      const lowSpread = 0.002 + this.pseudoRandom(k * 2.3 + 9) * 0.018;
      const high = Math.max(open, closePrice) * (1 + highSpread);
      const low = Math.min(open, closePrice) * (1 - lowSpread);
      const volume = 1200000 + Math.round(this.pseudoRandom(k * 9.4 + 3.1) * 8800000);

      candles.push({
        Date: new Date(d),
        Open: Math.round(open * 100) / 100,
        High: Math.round(high * 100) / 100,
        Low: Math.round(low * 100) / 100,
        Close: Math.round(closePrice * 100) / 100,
        Volume: volume
      });
    }

    if (candles.length === 0) return [];

    const scale = this.basePrice() / candles[candles.length - 1].Close;

    return candles.map(c => ({
      Date: c.Date,
      Open: Math.round(c.Open * scale * 100) / 100,
      High: Math.round(c.High * scale * 100) / 100,
      Low: Math.round(c.Low * scale * 100) / 100,
      Close: Math.round(c.Close * scale * 100) / 100,
      Volume: c.Volume
    }));
  }

  private formatVolume(value: number): string {
    if (value >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(2)}B`;
    }
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(2)}M`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K`;
    }
    return value.toString();
  }
}
