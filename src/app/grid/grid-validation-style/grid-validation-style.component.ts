import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { RowType } from 'igniteui-angular';

@Component({
    selector: 'app-grid-validation-style',
    styleUrls: [`grid-validation-style.component.scss`],
    templateUrl: 'grid-validation-style.component.html'
})
export class GridValidationStyleComponent {
    public data: any[];
    public rowStyles = {
        background: (row: RowType) => (row.errors) ? '#FF000088' : '#00000000'
    };

    constructor() {
        this.data = DATA;
    }
}
