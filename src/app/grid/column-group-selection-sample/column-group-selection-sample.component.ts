import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'gird-column-group-selection',
    templateUrl: './column-group-selection-sample.component.html',
    styleUrls: ['./column-group-selection-sample.component.scss']
})
export class GridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;

    public data: any[];

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['City', 'PostalCode']);
    }
}
