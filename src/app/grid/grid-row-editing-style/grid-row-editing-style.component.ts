import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellEditorTemplateDirective, IgxColumnComponent, IgxRowEditActionsDirective, IgxRowEditTabStopDirective, IgxRowEditTextDirective } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxFocusDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-row-edit-style',
    styleUrls: [`grid-row-editing-style.component.scss`],
    templateUrl: 'grid-row-editing-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxFocusDirective, IgxRowEditTextDirective, IgxRowEditActionsDirective, IgxIconButtonDirective, IgxRowEditTabStopDirective, IgxIconComponent]
})
export class GridRowEditStyleComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}
