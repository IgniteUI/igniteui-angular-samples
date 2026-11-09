import { Component } from '@angular/core';
import { IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective, IgxRippleDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxNavDrawerItemDirective, IgxNavDrawerTemplateDirective, IgxNavigationDrawerComponent } from 'igniteui-angular/navigation-drawer';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-nav-drawer-pin',
    styleUrls: ['./nav-drawer-pin.component.scss'],
    templateUrl: './nav-drawer-pin.component.html',
    imports: [IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconComponent, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective]
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
