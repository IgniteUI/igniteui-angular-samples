import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-gird-column-selection-styles',
    templateUrl: './column-selection-styles.component.html',
    styleUrls: ['./column-selection-styles.component.scss']
})
export class GridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['CompanyName', 'PostalCode']);
    }
}
