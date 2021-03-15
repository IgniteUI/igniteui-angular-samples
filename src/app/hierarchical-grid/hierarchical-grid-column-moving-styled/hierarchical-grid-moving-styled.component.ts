import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-moving-styled',
    styleUrls: ['./hierarchical-grid-moving-styled.component.scss'],
    templateUrl: 'hierarchical-grid-moving-styled.component.html'
})

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class HGridColumnMovingSampleComponentStyled implements OnInit {
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
