import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';

// tslint:disable:object-literal-sort-keys
// tslint:disable-next-line:interface-name
interface DataItem {
    id: string;
    name: string;
    header: boolean;
    disabled: boolean;
}

@Component({
    selector: 'app-drop-down-virtual',
    templateUrl: './drop-down-virtual.component.html',
    styleUrls: ['./drop-down-virtual.component.scss'],
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxVirtualScrollComponent, IgxVirtualItemDirective, IgxDropDownItemComponent]
})
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 40;

  constructor() {
    const itemsCollection: DataItem[] = [];
    for (let i = 0; i < 50; i++) {
        const series = (i * 10).toString();
        itemsCollection.push({
            id: series,
            name: `${series} Series`,
            header: true,
            disabled: false
        });
        for (let j = 0; j < 10; j++) {
            itemsCollection.push({
                id: `${series}_${j}`,
                name: `Series ${series}, ${i * 10 + j} Model`,
                header: false,
                disabled: j % 9 === 0
            });
        }
    }
    this.items = itemsCollection;
  }
}
