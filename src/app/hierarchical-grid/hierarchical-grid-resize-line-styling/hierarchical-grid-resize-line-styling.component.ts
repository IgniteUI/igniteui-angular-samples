import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-resize-line-styling',
    styleUrls: ['./hierarchical-grid-resize-line-styling.component.scss'],
    templateUrl: './hierarchical-grid-resize-line-styling.component.html'
})
export class HGridResizeLineStylingComponent {
    public localData;
    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
