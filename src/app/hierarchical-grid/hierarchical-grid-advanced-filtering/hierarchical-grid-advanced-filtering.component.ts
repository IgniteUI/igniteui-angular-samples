import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering',
    styleUrls: ['./hierarchical-grid-advanced-filtering.component.scss'],
    templateUrl: 'hierarchical-grid-advanced-filtering.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridAdvancedFilteringSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
