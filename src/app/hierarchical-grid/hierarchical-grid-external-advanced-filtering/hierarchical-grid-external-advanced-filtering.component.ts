import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxAdvancedFilteringDialogComponent, IgxHierarchicalGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-external-advanced-filtering',
    templateUrl: './hierarchical-grid-external-advanced-filtering.component.html',
    styleUrls: ['./hierarchical-grid-external-advanced-filtering.component.scss'],
    imports: [IgxAdvancedFilteringDialogComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent]
})
export class HGridExternalAdvancedFilteringComponent {

    public localdata: any;
    constructor() {
        this.localdata = SINGERS;
    }
}
