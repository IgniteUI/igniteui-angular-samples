import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-shape',
    styleUrls: ['./avatar-shape.component.scss'],
    templateUrl: './avatar-shape.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent]
})
export class AvatarShapeComponent { }
