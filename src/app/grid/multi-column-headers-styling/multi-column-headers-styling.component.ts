import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-multi-column-headers-styling',
    styleUrls: ['./multi-column-headers-styling.component.scss'],
    templateUrl: './multi-column-headers-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class GridMultiColumnHeadersStylingComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
}
