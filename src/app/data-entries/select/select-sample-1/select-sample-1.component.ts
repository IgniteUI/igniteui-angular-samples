import { Component } from '@angular/core';

@Component({
    selector: 'app-select-sample-1',
    styleUrls: ['select-sample-1.component.scss'],
    templateUrl: 'select-sample-1.component.html',
    standalone: false
})
export class SelectSample1Component {
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
}
