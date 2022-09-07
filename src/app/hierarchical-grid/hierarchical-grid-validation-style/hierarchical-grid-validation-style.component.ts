import { Component } from '@angular/core';
import { RowType } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';

@Component({
    selector: 'app-hierarchical-grid-validation-style',
    styleUrls: ['./hierarchical-grid-validation-style.component.scss'],
    templateUrl: 'hierarchical-grid-validation-style.component.html'
})
export class HGridValidationStyleComponent {
    public localData: Singer[];
    public rowStyles = {
        background: (row: RowType) => row.cells.find(c => c.errors !== null && c.errors !== undefined) ? '#FF000033' : '#00000000'
    };

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
