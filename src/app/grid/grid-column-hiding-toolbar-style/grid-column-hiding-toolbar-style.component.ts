import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxColumnActionsComponent, IgxColumnComponent, IgxColumnHidingDirective } from 'igniteui-angular/grids/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-column-hiding-toolbar-style',
    styleUrls: ['./grid-column-hiding-toolbar-style.component.scss'],
    templateUrl: './grid-column-hiding-toolbar-style.component.html',
    imports: [IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridColumnHidingToolbarStyleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}
