import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, IgxInputDirective, IgxFocusDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-row-editing-sample.component.scss`],
    templateUrl: 'grid-row-editing-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxFocusDirective]
})
export class GridRowEditSampleComponent {
    public data: any[] = DATA;
}
