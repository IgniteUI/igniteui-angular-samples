import { Component } from '@angular/core';
import { IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavContentComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tabbar-sample-1',
    styleUrls: ['./tabbar-sample-1.component.scss'],
    templateUrl: './tabbar-sample-1.component.html',
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavContentComponent]
})
export class TabbarSample1Component {

  constructor() { }

}
