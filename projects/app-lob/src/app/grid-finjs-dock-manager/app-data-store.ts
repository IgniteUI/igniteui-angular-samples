import { Injectable } from '@angular/core';

export interface NavItem {
  label: string;
  icon: string;
}

export interface MarketIdx {
  name: string;
  value: string;
  change: string;
  positive: boolean;
}

@Injectable({ providedIn: 'root' })
export class AppDataStore {
  public readonly navItems: NavItem[] = [
    { label: 'Watchlist', icon: 'format_list_bulleted' },
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Charts', icon: 'bar_chart' },
    { label: 'Goal Simulator', icon: 'track_changes' },
    { label: 'Dividends', icon: 'payments' },
    { label: 'Alerts', icon: 'notifications' }
  ];

  public readonly indices: MarketIdx[] = [
    { name: 'S&P 500', value: '5,634.61', change: '+0.42%', positive: true },
    { name: 'NASDAQ', value: '18,234.55', change: '+0.65%', positive: true },
    { name: 'DOW', value: '39,872.10', change: '-0.12%', positive: false },
    { name: 'VIX', value: '14.22', change: '-2.10%', positive: false }
  ];
}
