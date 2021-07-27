import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-selection-template-numbers',
    styleUrls: ['./hierarchical-grid-selection-template-numbers.component.scss'],
    templateUrl: 'hierarchical-grid-selection-template-numbers.component.html'
})

export class HGridSelectionTemplateNumbersSampleComponent {
    public localData;

    constructor() {
        this.localData = SINGERS;
    }
}
