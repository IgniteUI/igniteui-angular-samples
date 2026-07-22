import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-size',
    styleUrls: ['./avatar-size.component.scss'],
    templateUrl: './avatar-size.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent]
})
export class AvatarSizeComponent { }
