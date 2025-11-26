import { Component } from '@angular/core';
import { IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconComponent, IgxNavDrawerMiniTemplateDirective, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective } from 'igniteui-angular';


@Component({
    selector: 'app-nav-drawer-mini',
    styleUrls: ['./nav-drawer-mini.component.scss'],
    templateUrl: './nav-drawer-mini.component.html',
    imports: [IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconComponent, IgxNavDrawerMiniTemplateDirective, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective]
})
export class NavDrawerMiniComponent  {
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
