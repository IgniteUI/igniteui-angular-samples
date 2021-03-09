import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-external-advanced-filtering',
    templateUrl: './hierarchical-grid-external-advanced-filtering.component.html',
    styleUrls: ['./hierarchical-grid-external-advanced-filtering.component.scss']
})
export class HGridExternalAdvancedFilteringComponent {

    public localdata: any;
    constructor() {
        this.localdata = SINGERS;
    }
}
