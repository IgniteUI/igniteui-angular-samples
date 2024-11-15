import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-column-hiding-toolbar-style',
    styleUrls: ['./hierarchical-grid-column-hiding-toolbar-style.component.scss'],
    templateUrl: './hierarchical-grid-column-hiding-toolbar-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})
export class HierarchicalGridColumnHidingToolbarStyleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
