import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService} from 'igniteui-angular/icon';
import { facebookMessenger } from '@igniteui/material-icons-extended';

@Component({
    selector: 'app-badge-dot',
    styleUrls: ['./badge-dot.component.scss'],
    templateUrl: './badge-dot.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent]
})
export class BadgeDotComponent {
    constructor(private iconService: IgxIconService) {
        this.iconService.addSvgIconFromText('facebookMessenger', facebookMessenger.value);
    }

    public notifications = [
        { title: 'Contract renewal', time: '09:12', unread: true },
        { title: 'Weekly digest', time: 'Yesterday', unread: false }
    ];

    public tabs = [
        { label: 'Home', icon: 'home', active: true, hasUpdates: false },
        { label: 'Chat', icon: 'facebookMessenger', active: false, hasUpdates: true },
        { label: 'Profile', icon: 'person', active: false, hasUpdates: false }
    ];
}
