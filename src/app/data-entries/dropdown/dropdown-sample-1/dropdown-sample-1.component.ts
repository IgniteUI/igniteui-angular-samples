import { Component, ViewChild } from '@angular/core';
import { IgxDropDownComponent } from 'igniteui-angular';
import { DropDownSample2Component } from '../dropdown-sample-2/dropdown-sample-2.component';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-1',
    styleUrls: ['./dropdown-sample-1.component.scss'],
    templateUrl: './dropdown-sample-1.component.html'
})
export class DropDownSample1Component {
    @ViewChild('dropdown', { read: IgxDropDownComponent }) public dropDown: IgxDropDownComponent;
    @ViewChild('nested', { read: DropDownSample2Component }) public nested: DropDownSample2Component;

    public selectedItem = 'Home';

    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
