import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabs-tailwind-style',
    styleUrls: ['./tabs-tailwind-style.component.scss'],
    templateUrl: './tabs-tailwind-style.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsTailwindStyleComponent { }
