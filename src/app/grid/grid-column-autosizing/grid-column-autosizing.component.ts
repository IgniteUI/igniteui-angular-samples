import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'grid-column-autosizing-sample',
    styleUrls: ['./grid-column-autosizing.component.scss'],
    templateUrl: 'grid-column-autosizing.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class GridColumnAutosizingComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

