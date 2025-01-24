import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';

@Component({
    selector: 'app-tree-styling',
    templateUrl: './tree-styling.component.html',
    styleUrls: ['./tree-styling.component.scss']
})
export class TreeStylingComponent {
    public data = DATA;

    constructor() { }

}
