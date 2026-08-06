import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-type',
    templateUrl: './badge-type.component.html',
    styleUrls: ['./badge-type.component.scss'],
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeTypeComponent { }
