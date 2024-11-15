import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-add-row',
    styleUrls: [`grid-add-row-sample.component.scss`],
    templateUrl: 'grid-add-row-sample.component.html',
    standalone: false
})
export class GridAddRowSampleComponent {
    public data: any[] = DATA;
}
