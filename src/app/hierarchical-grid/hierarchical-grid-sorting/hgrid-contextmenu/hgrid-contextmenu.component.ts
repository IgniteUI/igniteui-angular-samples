import { Component, Input } from '@angular/core';
import { SortingDirection } from 'igniteui-angular';

@Component({
  selector: 'app-hgrid-contextmenu',
  styleUrls: ['./hgrid-contextmenu.component.scss'],
  templateUrl: './hgrid-contextmenu.component.html'
})
export class HGridContextmenuComponent {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    constructor() { }

    public sort(eventArgs) {
        this.cell.grid.sort({fieldName: this.cell.column.field, dir: SortingDirection.Asc, ignoreCase: true});
    }

    public clearSort(eventArgs) {
        this.cell.grid.clearSort(this.cell.column.field);
    }

    public clearAll(eventArgs) {
        this.cell.grid.clearSort();
    }
}
