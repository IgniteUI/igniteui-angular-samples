import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabs-sample-3',
    styleUrls: ['./tabs-sample-3.component.scss'],
    templateUrl: './tabs-sample-3.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample3Component { }
