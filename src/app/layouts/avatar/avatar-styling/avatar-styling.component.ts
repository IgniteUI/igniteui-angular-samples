import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import {
    IgxListActionDirective,
    IgxListComponent,
    IgxListItemComponent,
    IgxListLineSubTitleDirective,
    IgxListLineTitleDirective,
    IgxListThumbnailDirective
} from 'igniteui-angular/list';

@Component({
    selector: 'app-avatar-styling',
    styleUrls: ['./avatar-styling.component.scss'],
    templateUrl: './avatar-styling.component.html',
    imports: [
        IgxAvatarComponent,
        IgxBadgeComponent,
        IgxIconComponent,
        IgxListActionDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineSubTitleDirective,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective
    ]
})
export class AvatarStylingSampleComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText(
            'calendar',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'check',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'x',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'horizontalRule',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-440v-80h640v80H160Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'group',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-240Zm0-400Z"/></svg>',
            'material'
        );
    }
}
