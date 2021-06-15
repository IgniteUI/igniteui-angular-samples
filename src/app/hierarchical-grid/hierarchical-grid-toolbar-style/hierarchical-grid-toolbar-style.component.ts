import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
  selector: 'app-hierarchical-grid-toolbar-style',
  styleUrls: ['./hierarchical-grid-toolbar-style.component.scss'],
  templateUrl: './hierarchical-grid-toolbar-style.component.html'
})
export class HierarchicalGridToolbarStyleComponent {
    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}
