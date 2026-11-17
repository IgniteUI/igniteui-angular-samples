import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

const categories = ['Podcasts', 'Playlists', 'Genres', 'Albums', 'Artists', 'Audiobooks', 'Radio'];

@Component({
    selector: 'app-tabs-amount',
    styleUrls: ['./tabs-amount.component.scss'],
    templateUrl: './tabs-amount.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsAmountComponent {
    public twoTabs = categories.slice(0, 2);
    public fiveTabs = categories.slice(0, 5);
    public moreTabs = categories;
}
