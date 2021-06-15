import { Component } from '@angular/core';
import { athletesData } from '../../data/athletesData';

@Component({
  selector: 'app-grid-toolbar-style',
  styleUrls: ['./grid-toolbar-style.component.scss'],
  templateUrl: './grid-toolbar-style.component.html'
})
export class GridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
