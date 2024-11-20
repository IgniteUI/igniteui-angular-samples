import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-2',
    styleUrls: ['./dropdown-sample-2.component.scss'],
    templateUrl: './dropdown-sample-2.component.html',
    standalone: false
})
export class DropDownSample2Component {
    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
