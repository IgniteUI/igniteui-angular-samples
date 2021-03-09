import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../data';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-moving',
    styleUrls: ['./hierarchical-grid-moving.component.scss'],
    templateUrl: 'hierarchical-grid-moving.component.html'
})

export class HGridColumnMovingSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }
    public ngOnInit(): void {

    }

    public toggleColumn(col: IgxColumnComponent) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        col.pinned ? col.unpin() : col.pin();
    }

}
