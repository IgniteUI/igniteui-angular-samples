import { Component } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxNavDrawerItemDirective, IgxNavDrawerTemplateDirective, IgxNavigationDrawerComponent } from 'igniteui-angular/navigation-drawer';

interface MenuItem {
    label: string;
    icon: string;
}

@Component({
    selector: 'app-icon-overview',
    styleUrls: ['./icon-overview.component.scss'],
    templateUrl: './icon-overview.component.html',
    imports: [IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxIconComponent]
})
export class IconOverviewComponent {
    public menuItems: MenuItem[] = [
        { label: 'Home', icon: 'home' },
        { label: 'Inbox', icon: 'mail' },
        { label: 'Reports', icon: 'assignment' },
        { label: 'Settings', icon: 'settings' },
        { label: 'Support', icon: 'feedback' }
    ];

    public activeItem = 'Home';
}
