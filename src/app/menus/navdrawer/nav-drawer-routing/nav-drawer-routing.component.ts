import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-drawer-routing',
    styleUrls: ['./nav-drawer-routing.component.scss'],
    templateUrl: './nav-drawer-routing.component.html',
    standalone: false
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
