import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tree-styling',
    templateUrl: './tree-styling.component.html',
    styleUrls: ['./tree-styling.component.scss'],
    imports: [IgxTreeComponent, NgFor, IgxTreeNodeComponent]
})
export class TreeStylingComponent {
    public data = DATA;

    constructor() { }

}
