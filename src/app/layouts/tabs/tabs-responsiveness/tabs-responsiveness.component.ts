import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-responsiveness',
    styleUrls: ['./tabs-responsiveness.component.scss'],
    templateUrl: './tabs-responsiveness.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsResponsivenessComponent {
    public categories = ['Podcasts', 'Playlists', 'Genres'];
    public days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
