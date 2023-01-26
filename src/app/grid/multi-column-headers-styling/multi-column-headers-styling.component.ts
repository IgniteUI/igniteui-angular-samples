import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-multi-column-headers-styling',
    styleUrls: [ './multi-column-headers-styling.component.scss' ],
    templateUrl: './multi-column-headers-styling.component.html'
})
export class GridMultiColumnHeadersStylingComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
}
