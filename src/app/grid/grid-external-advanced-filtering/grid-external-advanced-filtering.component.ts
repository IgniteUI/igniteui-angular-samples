import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-external-advanced-filtering',
    templateUrl: './grid-external-advanced-filtering.component.html',
    styleUrls: ['./grid-external-advanced-filtering.component.scss']
})
export class GridExternalAdvancedFilteringComponent {

    public data: any;

    constructor() {
        this.data = DATA;
    }
}
