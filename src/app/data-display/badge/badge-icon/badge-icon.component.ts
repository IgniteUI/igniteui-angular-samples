import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-icon',
    styleUrls: ['./badge-icon.component.scss'],
    templateUrl: './badge-icon.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeIconComponent {
    public badges = [
        { icon: 'check', type: 'success', label: 'check' },
        { icon: 'favorite_border', type: 'error', label: 'favorite' },
        { icon: 'notifications', type: 'info', label: 'notification' },
        { icon: 'star_border', type: 'warning', label: 'star' },
        { icon: 'settings', type: 'info', label: 'settings' }
    ];
}
