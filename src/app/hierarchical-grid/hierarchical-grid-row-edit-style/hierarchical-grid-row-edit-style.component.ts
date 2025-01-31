import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxRowEditTextDirective, IgxRowEditActionsDirective, IgxIconButtonDirective, IgxRowEditTabStopDirective, IgxIconComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-row-edit-style',
    styleUrls: ['./hierarchical-grid-row-edit-style.component.scss'],
    templateUrl: 'hierarchical-grid-row-edit-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxRowEditTextDirective, IgxRowEditActionsDirective, IgxIconButtonDirective, IgxRowEditTabStopDirective, IgxIconComponent]
})

export class HGridRowEditStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
}
