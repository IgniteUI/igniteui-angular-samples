import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-sample-1',
    styleUrls: ['./tabs-sample-1.component.scss'],
    templateUrl: './tabs-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample1Component { }
