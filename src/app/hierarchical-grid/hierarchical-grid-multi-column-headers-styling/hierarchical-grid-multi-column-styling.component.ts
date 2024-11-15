import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-column-styling',
    styleUrls: ['./hierarchical-grid-multi-column-styling.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent]
})

export class HGridMultiHeadersStylingComponent implements OnInit {
    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}
