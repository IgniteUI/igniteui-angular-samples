import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-cell-style',
    styleUrls: ['./hierarchical-grid-multi-cell-style.component.scss'],
    templateUrl: 'hierarchical-grid-multi-cell-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridMultiCellStyleComponent implements OnInit {
    public localdata;
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}
