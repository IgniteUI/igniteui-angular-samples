import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-row-editing-sample.component.scss`],
    templateUrl: 'grid-row-editing-sample.component.html',
    standalone: false
})
export class GridRowEditSampleComponent {
    public data: any[] = DATA;
}
