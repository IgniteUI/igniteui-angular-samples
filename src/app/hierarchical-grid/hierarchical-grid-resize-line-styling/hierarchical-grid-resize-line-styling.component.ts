import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-resize-line-styling',
    styleUrls: ['./hierarchical-grid-resize-line-styling.component.scss'],
    templateUrl: './hierarchical-grid-resize-line-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HGridResizeLineStylingComponent {
    public localData;
    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
