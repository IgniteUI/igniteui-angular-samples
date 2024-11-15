import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-moving-styled',
    styleUrls: ['./hierarchical-grid-moving-styled.component.scss'],
    templateUrl: 'hierarchical-grid-moving-styled.component.html',
    standalone: false
})

export class HGridColumnMovingSampleStyledComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}
