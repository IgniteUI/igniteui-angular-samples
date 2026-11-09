import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-avatar-overview',
    styleUrls: ['./avatar-overview.component.scss'],
    templateUrl: './avatar-overview.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class AvatarOverviewComponent {}
