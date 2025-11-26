import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxActionStripComponent, IgxGridEditingActionsComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-add-row',
    styleUrls: ['./hierarchical-grid-add-row.component.scss'],
    templateUrl: './hierarchical-grid-add-row.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridEditingActionsComponent, IgxRowIslandComponent]
})

export class HGridAddRowSampleComponent implements OnInit {
    public localdata;


    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
