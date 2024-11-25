import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective, IgxDividerDirective } from 'igniteui-angular';
import { NgFor } from '@angular/common';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-3',
    styleUrls: ['./dropdown-sample-3.component.scss'],
    templateUrl: './dropdown-sample-3.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, NgFor, IgxDropDownItemComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective, IgxDividerDirective]
})
export class DropDownSample3Component {

    public items: any[] = [
        { field: 'European Union', code: 'EU', header: true },
        { field: 'Germany', code: 'DE' },
        { field: 'Bulgaria', code: 'BG', selected: true },
        { field: 'France', code: 'FR', disabled: true },
        { field: 'North America', code: 'NA', header: true },
        { field: 'Canada', code: 'CA' },
        { field: 'United States', code: 'US' },
        { field: 'Mexico', code: 'MX' }
    ];
}
