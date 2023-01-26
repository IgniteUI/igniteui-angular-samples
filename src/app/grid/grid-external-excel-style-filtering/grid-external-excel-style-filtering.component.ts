import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-grid-external-excel-style-filtering',
    templateUrl: './grid-external-excel-style-filtering.component.html',
    styleUrls: ['./grid-external-excel-style-filtering.component.scss']
})
export class GridExternalExcelStyleFilteringComponent implements OnInit {

    public data: any[];
    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }
}
