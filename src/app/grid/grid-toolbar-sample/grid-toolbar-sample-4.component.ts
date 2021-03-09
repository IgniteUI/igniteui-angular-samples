import { Component } from '@angular/core';
import { athletesData } from '../services/data';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'grid-toolbar-sample-4',
  styleUrls: ['./grid-toolbar-sample-4.component.scss'],
  templateUrl: './grid-toolbar-sample-4.component.html'
})
export class GridToolbarSample4Component {
    public data: any[];

    constructor() {
        this.data = athletesData;
    }

}
