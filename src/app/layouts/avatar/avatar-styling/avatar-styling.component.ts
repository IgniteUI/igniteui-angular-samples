import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-styling',
    styleUrls: ['./avatar-styling.component.scss'],
    templateUrl: './avatar-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent]
})

export class AvatarStylingSampleComponent {

}
