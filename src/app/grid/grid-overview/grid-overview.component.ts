import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-overview',
    templateUrl: './grid-overview.component.html',
    styleUrls: ['./grid-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridComponent, IgxPaginatorComponent]
})
export class GridOverviewComponent {
    public data = DATA;

    public booleanCellTemplate(value: boolean): string {
        return value ? 'assets/images/grid/active.png' : 'assets/images/grid/expired.png';
    }
}
