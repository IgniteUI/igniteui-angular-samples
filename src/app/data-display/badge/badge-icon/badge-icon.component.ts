import { Component, OnInit, inject } from '@angular/core';
import { heartMonitor } from '@igniteui/material-icons-extended';
import { IgxIconService, IgxAvatarComponent, IgxBadgeComponent } from 'igniteui-angular';

@Component({
    selector: 'app-badge-icon',
    styleUrls: ['./badge-icon.component.scss'],
    templateUrl: './badge-icon.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeIconComponent implements OnInit {
    protected _iconService = inject(IgxIconService);


    public ngOnInit() {
        this._iconService.addSvgIconFromText(heartMonitor.name, heartMonitor.value, 'imx-icons');
    }
}
