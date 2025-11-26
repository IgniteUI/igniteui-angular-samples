import { Component } from '@angular/core';
import { IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tabs-style',
    styleUrls: ['./tabs-style.component.scss'],
    templateUrl: './tabs-style.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsStyleComponent { }
