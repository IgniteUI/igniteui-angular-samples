import { Component } from '@angular/core';
import { IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tabs-sample-3',
    styleUrls: ['./tabs-sample-3.component.scss'],
    templateUrl: './tabs-sample-3.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample3Component { }
