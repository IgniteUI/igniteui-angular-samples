import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular/grids/core';

interface Position {
  symbol: string;
  qty: number;
  avgCost: number;
  currentPrice: number;
  pl: number;
  plFormatted: string;
  plPct: string;
  positive: boolean;
}

@Component({
  selector: 'app-positions-grid',
  standalone: true,
  imports: [IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective],
  templateUrl: './positions-grid.component.html',
  styleUrls: ['./positions-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionsGridComponent {
  public readonly positions: Position[] = [
    {
      symbol: 'AAPL',
      qty: 100,
      avgCost: 210.40,
      currentPrice: 227.14,
      pl: 1674,
      plFormatted: '+$1,674.00',
      plPct: '+7.96%',
      positive: true
    },
    {
      symbol: 'TSLA',
      qty: 50,
      avgCost: 260.00,
      currentPrice: 248.50,
      pl: -575,
      plFormatted: '-$575.00',
      plPct: '-4.42%',
      positive: false
    },
    {
      symbol: 'NVDA',
      qty: 30,
      avgCost: 120.00,
      currentPrice: 138.92,
      pl: 567.60,
      plFormatted: '+$567.60',
      plPct: '+23.77%',
      positive: true
    },
    {
      symbol: 'MSFT',
      qty: 40,
      avgCost: 420.00,
      currentPrice: 441.58,
      pl: 863.20,
      plFormatted: '+$863.20',
      plPct: '+5.14%',
      positive: true
    },
    {
      symbol: 'AMZN',
      qty: 60,
      avgCost: 205.00,
      currentPrice: 198.34,
      pl: -399.60,
      plFormatted: '-$399.60',
      plPct: '-3.25%',
      positive: false
    },
    {
      symbol: 'GOOGL',
      qty: 75,
      avgCost: 172.00,
      currentPrice: 178.22,
      pl: 466.50,
      plFormatted: '+$466.50',
      plPct: '+3.62%',
      positive: true
    },
    {
      symbol: 'META',
      qty: 20,
      avgCost: 530.00,
      currentPrice: 512.77,
      pl: -344.60,
      plFormatted: '-$344.60',
      plPct: '-3.25%',
      positive: false
    },
    {
      symbol: 'JPM',
      qty: 120,
      avgCost: 195.00,
      currentPrice: 204.10,
      pl: 1092.00,
      plFormatted: '+$1,092.00',
      plPct: '+4.67%',
      positive: true
    },
    {
      symbol: 'NFLX',
      qty: 15,
      avgCost: 650.00,
      currentPrice: 671.30,
      pl: 319.50,
      plFormatted: '+$319.50',
      plPct: '+3.28%',
      positive: true
    }
  ];

  public readonly totalPL = '+$3,663.60';
  public readonly totalPositive = true;
}
