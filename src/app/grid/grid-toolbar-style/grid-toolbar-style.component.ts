import { Component } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-style',
    styleUrls: ['./grid-toolbar-style.component.scss'],
    templateUrl: './grid-toolbar-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
