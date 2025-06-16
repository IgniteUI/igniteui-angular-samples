import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxGridComponent, IgxColumnGroupComponent, IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-gird-column-group-selection',
    templateUrl: './column-group-selection-sample.component.html',
    styleUrls: ['./column-group-selection-sample.component.scss'],
    imports: [IgxGridComponent, IgxColumnGroupComponent, IgxColumnComponent]
})
export class GridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;

    public data: any[];

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['City', 'PostalCode']);
        this.cdr.detectChanges();
    }
}

