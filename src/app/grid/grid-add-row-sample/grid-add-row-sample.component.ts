import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellEditorTemplateDirective, IgxColumnComponent, IgxGridEditingActionsComponent } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxFocusDirective } from 'igniteui-angular/directives';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
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
