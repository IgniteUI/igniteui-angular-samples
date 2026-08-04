import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DATA } from '../../../data/animations-data';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular/tree';


@Component({
    selector: 'app-tree-tailwind-styling',
    templateUrl: './tree-tailwind-styling.component.html',
    styleUrls: ['./tree-tailwind-styling.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxTreeComponent, IgxTreeNodeComponent]
})
export class TreeTailwindStylingComponent {
    public data = DATA;

    constructor() { }

}
