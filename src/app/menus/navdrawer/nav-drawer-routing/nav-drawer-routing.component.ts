import { Component } from '@angular/core';
import { IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent } from 'igniteui-angular';

import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav-drawer-routing',
    styleUrls: ['./nav-drawer-routing.component.scss'],
    templateUrl: './nav-drawer-routing.component.html',
    imports: [IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, RouterLinkActive, RouterLink, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent]
})
export class NavDrawerRoutingComponent {
    public componentLinks = [
        {
            link: 'avatar',
            name: 'Avatar'
        },
        {
            link: 'badge',
            name: 'Badge'
        },
        {
            link: 'button-group',
            name: 'Button Group'
        }
    ];
}
