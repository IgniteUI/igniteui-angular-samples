import { Component } from '@angular/core';
import { IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconComponent, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective } from 'igniteui-angular';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-nav-drawer-pin',
    styleUrls: ['./nav-drawer-pin.component.scss'],
    templateUrl: './nav-drawer-pin.component.html',
    imports: [IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, NgFor, IgxRippleDirective, IgxIconComponent, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective]
})
export class NavDrawerPinComponent  {
    public navItems = [
        { name: 'account_circle', text: 'Avatar' },
        { name: 'error', text: 'Badge' },
        { name: 'group_work', text: 'Button Group' }
    ];

    public selected = 'Avatar';

    public navigate(item) {
        this.selected = item.text;
    }
}
