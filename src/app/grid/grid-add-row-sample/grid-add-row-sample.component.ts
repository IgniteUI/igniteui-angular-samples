import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, IgxInputDirective, IgxFocusDirective, IgxActionStripComponent, IgxGridEditingActionsComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-add-row',
    styleUrls: [`grid-add-row-sample.component.scss`],
    templateUrl: 'grid-add-row-sample.component.html',
    imports: [IgxGridComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxFocusDirective, IgxActionStripComponent, IgxGridEditingActionsComponent]
})
export class GridAddRowSampleComponent {
    public data: any[] = DATA;
}
