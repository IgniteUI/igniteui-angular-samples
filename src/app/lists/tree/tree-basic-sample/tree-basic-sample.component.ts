import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';

@Component({
    selector: 'app-tree-basic-sample',
    templateUrl: './tree-basic-sample.component.html',
    styleUrls: ['./tree-basic-sample.component.scss']
})
export class TreeBasicSampleComponent {
    public data = DATA;

    constructor() { }

}
