import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxOverlayOutletDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-external-outlet',
    styleUrls: ['./grid-external-outlet-sample.component.scss'],
    templateUrl: 'grid-external-outlet-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxOverlayOutletDirective, CurrencyPipe]
})

export class GridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }
}
