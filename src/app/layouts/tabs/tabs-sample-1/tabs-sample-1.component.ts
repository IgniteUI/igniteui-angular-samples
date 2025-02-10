import { Component } from '@angular/core';
import { IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tabs-sample-1',
    styleUrls: ['./tabs-sample-1.component.scss'],
    templateUrl: './tabs-sample-1.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample1Component { }
