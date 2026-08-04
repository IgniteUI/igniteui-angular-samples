import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxBottomNavComponent, IgxBottomNavContentComponent, IgxBottomNavHeaderComponent, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabbar-sample-1',
    styleUrls: ['./tabbar-sample-1.component.scss'],
    templateUrl: './tabbar-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavContentComponent]
})
export class TabbarSample1Component {

  constructor() { }

}
