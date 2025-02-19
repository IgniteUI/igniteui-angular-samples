import { Component } from '@angular/core';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent } from 'igniteui-angular';


@Component({
    selector: 'app-select-sample-1',
    styleUrls: ['select-sample-1.component.scss'],
    templateUrl: 'select-sample-1.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent]
})
export class SelectSample1Component {
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
}
