import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-tailwind-styling',
    styleUrls: ['./badge-tailwind-styling.component.scss'],
    templateUrl: './badge-tailwind-styling.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeTailwindStylingComponent { }
