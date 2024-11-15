import { Component } from '@angular/core';
import { IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tabs-sample-2',
    styleUrls: ['./tabs-sample-2.component.scss'],
    templateUrl: './tabs-sample-2.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample2Component {

  constructor() { }

}
