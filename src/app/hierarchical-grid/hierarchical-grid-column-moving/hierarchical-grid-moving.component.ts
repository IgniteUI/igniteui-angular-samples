import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-moving',
    styleUrls: ['./hierarchical-grid-moving.component.scss'],
    templateUrl: 'hierarchical-grid-moving.component.html',
    standalone: false
})

export class HGridColumnMovingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
