import { Component, ViewChild, OnInit} from '@angular/core';
import { IgxGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-custom-grid-paging-style-sample',
    styleUrls: ['custom-grid-paging-style.component.scss'],
    templateUrl: 'custom-grid-paging-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, DecimalPipe]
})

export class CustomGridPagingStyleSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public removeRow(rowIndex) {
        const row = this.grid1.getRowByIndex(rowIndex);
        row.delete();
    }
}
