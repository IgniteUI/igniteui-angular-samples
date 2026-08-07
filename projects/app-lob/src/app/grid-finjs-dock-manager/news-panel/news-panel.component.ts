import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

interface NewsItem {
  id: number;
  headline: string;
  source: string;
  time: string;
}

interface AlertItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
  iconColor: string;
}

@Component({
  selector: 'app-news-panel',
  standalone: true,
  imports: [IgxIconComponent],
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsPanelComponent {
  public readonly activeTab = signal<'news' | 'alerts'>('news');

  public readonly newsItems: NewsItem[] = [
    { id: 1, headline: 'Apple Beats Q3 Estimates on Services Growth', source: 'Reuters', time: '2m' },
    { id: 2, headline: 'Fed Signals Possible Rate Cut in September', source: 'Bloomberg', time: '14m' },
    { id: 3, headline: 'Tesla Deliveries Miss Street Expectations', source: 'CNBC', time: '32m' },
    { id: 4, headline: 'Nvidia Unveils Next-Gen AI Chip Architecture', source: 'TechWire', time: '1h' },
    { id: 5, headline: 'Oil Prices Slide on Supply Glut Concerns', source: 'MarketWatch', time: '2h' },
    { id: 6, headline: 'Microsoft Azure Revenue Jumps 29% Year-over-Year', source: 'WSJ', time: '3h' },
    { id: 7, headline: 'S&P 500 Closes at Record High for Third Week', source: 'Barrons', time: '4h' }
  ];

  public readonly alerts: AlertItem[] = [
    { id: 1, title: 'AAPL Target Reached', desc: 'Price crossed $225.00 target', icon: 'check_circle', iconColor: '#00e676' },
    { id: 2, title: 'VIX Spike Warning', desc: 'Volatility index above 20', icon: 'warning', iconColor: '#ffc107' },
    { id: 3, title: 'TSLA Down 5%', desc: 'Stop-loss level approaching', icon: 'trending_down', iconColor: '#ff5252' }
  ];

  public setActiveTab(tab: 'news' | 'alerts'): void {
    this.activeTab.set(tab);
  }
}
