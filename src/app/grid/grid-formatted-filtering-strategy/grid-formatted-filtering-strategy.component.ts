import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { FormattedValuesFilteringStrategy } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-formatted-filtering-strategy.component.scss'],
    templateUrl: 'grid-formatted-filtering-strategy.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridFormattedFilteringStrategyComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];
    public filterStrategy = new FormattedValuesFilteringStrategy();

    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatPrice(value: number) {
        return value < 15 ? 'low' : value > 50 ? 'high' : 'medium';
    }
}
