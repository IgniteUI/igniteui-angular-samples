import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-cell-style',
    styleUrls: ['./hierarchical-grid-multi-cell-style.component.scss'],
    templateUrl: 'hierarchical-grid-multi-cell-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridMultiCellStyleComponent implements OnInit {
    public localdata;
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}
