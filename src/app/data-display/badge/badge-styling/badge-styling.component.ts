import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-styling',
    styleUrls: ['./badge-styling.component.scss'],
    templateUrl: './badge-styling.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeStylingComponent { }
