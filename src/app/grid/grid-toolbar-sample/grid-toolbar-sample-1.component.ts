import { Component} from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-sample-1',
    styleUrls: ['./grid-toolbar-sample-1.component.scss'],
    templateUrl: './grid-toolbar-sample-1.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample1Component {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
