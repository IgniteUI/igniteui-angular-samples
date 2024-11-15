import { Component, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection, IgxGridComponent, IgxColumnLayoutComponent, IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-multi-row-layout-styling-sample',
    styleUrls: ['./grid-multi-row-layout-styling.component.scss'],
    templateUrl: './grid-multi-row-layout-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnLayoutComponent, IgxColumnComponent]
})
export class GridMultiRowLayoutStylingComponent {

    public sourceData = DATA;
    public group = [
        {
            dir: SortingDirection.Asc,
            fieldName: 'Country',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
    ];
    public sort = [
        {
            dir: SortingDirection.Desc,
            fieldName: 'CompanyName',
            ignoreCase: true
        }
    ];
}
