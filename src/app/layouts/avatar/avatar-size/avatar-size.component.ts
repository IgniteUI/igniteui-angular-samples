import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-avatar-size',
    styleUrls: ['./avatar-size.component.scss'],
    templateUrl: './avatar-size.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class AvatarSizeComponent {
}
