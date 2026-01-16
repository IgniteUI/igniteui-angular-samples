import { Component } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
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
