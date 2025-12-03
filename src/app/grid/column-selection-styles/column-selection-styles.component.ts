import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-gird-column-selection-styles',
    templateUrl: './column-selection-styles.component.html',
    styleUrls: ['./column-selection-styles.component.scss'],
    imports: [IgxGridComponent, IgxColumnComponent]
})
export class GridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['CompanyName', 'PostalCode']);
        this.cdr.detectChanges();
    }
}
