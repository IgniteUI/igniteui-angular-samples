import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-validation-style',
    styleUrls: [`grid-validation-style.component.scss`],
    templateUrl: 'grid-validation-style.component.html'
})
export class GridValidationStyleComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}
