import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent } from 'igniteui-angular';
import { NgFor } from '@angular/common';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-1',
    styleUrls: ['./dropdown-sample-1.component.scss'],
    templateUrl: './dropdown-sample-1.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, NgFor, IgxDropDownItemComponent]
})
export class DropDownSample1Component {
    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
