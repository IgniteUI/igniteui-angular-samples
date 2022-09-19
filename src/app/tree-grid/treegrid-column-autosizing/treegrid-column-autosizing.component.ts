import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'tree-grid-columnAutoSizing-sample',
  styleUrls: ['./treegrid-column-autosizing.component.scss'],
  templateUrl: './treegrid-column-autosizing.component.html'
})
export class TreeGridColumnAutoSizingSampleComponent {
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

}
