import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular';


@Component({
    selector: 'app-tree-styling',
    templateUrl: './tree-styling.component.html',
    styleUrls: ['./tree-styling.component.scss'],
    imports: [IgxTreeComponent, IgxTreeNodeComponent]
})
export class TreeStylingComponent {
    public data = DATA;

    constructor() { }

}
