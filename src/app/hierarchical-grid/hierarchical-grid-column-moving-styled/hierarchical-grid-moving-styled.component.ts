import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-hierarchical-grid-moving-styled',
    styleUrls: ['./hierarchical-grid-moving-styled.component.scss'],
    templateUrl: 'hierarchical-grid-moving-styled.component.html'
})

export class HGridColumnMovingSampleStyledComponent {
    public localdata;

    constructor() {
        this.localdata = DATA;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}
