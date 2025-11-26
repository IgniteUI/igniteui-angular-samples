import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxLinearProgressBarComponent } from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-sample',
    styleUrls: ['./grid-paging-sample.component.scss'],
    templateUrl: 'grid-paging-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxLinearProgressBarComponent, DecimalPipe]
})

export class PagingSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }
}
