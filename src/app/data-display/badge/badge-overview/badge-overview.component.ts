import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-badge-overview',
    templateUrl: './badge-overview.component.html',
    styleUrls: ['./badge-overview.component.scss'],
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxChipComponent, IgxIconComponent]
})
export class BadgeOverviewComponent { }
