import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

@Component({
    selector: 'app-avatar-variants',
    styleUrls: ['./avatar-variants.component.scss'],
    templateUrl: './avatar-variants.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent]
})
export class AvatarVariantsComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText(
            'mail',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'check',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>',
            'material'
        );
    }
}
