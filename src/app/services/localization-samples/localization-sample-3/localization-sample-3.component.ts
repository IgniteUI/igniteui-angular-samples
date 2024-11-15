import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../../data/nwindData';

@Component({
    selector: 'app-localization-sample-3',
    styleUrls: ['./localization-sample-3.component.scss'],
    templateUrl: 'localization-sample-3.component.html',
    standalone: false
})

export class LocalizationSample3Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;

        const currentRS = this.grid.resourceStrings;
        currentRS.igx_grid_filter = '[Localized]Filter';
        currentRS.igx_grid_filter_row_close = '[Localized]Close';
    }
}
