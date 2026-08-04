import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-styling',
    styleUrls: ['./avatar-css-variables.component.scss'],
    templateUrl: './avatar-css-variables.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent]
})

export class AvatarCSSVariablesComponent { }
