import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-hierarchical-grid-pinning',
    styleUrls: ['./hierarchical-grid-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-pinning.component.html'
})

export class HGridPinningSampleComponent {
    public localdata;

    constructor() {
        this.localdata = DATA;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
