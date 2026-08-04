import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-tailwind-styling',
    styleUrls: ['./avatar-tailwind-styling.component.scss'],
    templateUrl: './avatar-tailwind-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent]
})

export class AvatarTailwindStylingSampleComponent {}
