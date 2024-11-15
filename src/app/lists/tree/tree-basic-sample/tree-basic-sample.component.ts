import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tree-basic-sample',
    templateUrl: './tree-basic-sample.component.html',
    styleUrls: ['./tree-basic-sample.component.scss'],
    imports: [IgxTreeComponent, NgFor, IgxTreeNodeComponent]
})
export class TreeBasicSampleComponent {
    public data = DATA;

    constructor() { }

}
