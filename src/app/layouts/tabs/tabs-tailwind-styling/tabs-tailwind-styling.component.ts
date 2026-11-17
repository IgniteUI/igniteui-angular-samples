import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 17.5V12.5H11.6667V17.5H15.8333V10.8333H18.3333L10 3.33333L1.66667 10.8333H4.16667V17.5H8.33333Z"/></svg>';
const placeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.66667C6.775 1.66667 4.16667 4.275 4.16667 7.5C4.16667 11.875 10 18.3333 10 18.3333C10 18.3333 15.8333 11.875 15.8333 7.5C15.8333 4.275 13.225 1.66667 10 1.66667ZM10 9.58333C8.85 9.58333 7.91667 8.65 7.91667 7.5C7.91667 6.35 8.85 5.41667 10 5.41667C11.15 5.41667 12.0833 6.35 12.0833 7.5C12.0833 8.65 11.15 9.58333 10 9.58333Z"/></svg>';
const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.9167C10.9167 17.9167 11.6667 17.1667 11.6667 16.25H8.33333C8.33333 17.1667 9.075 17.9167 10 17.9167ZM15 12.9167V8.75C15 6.19167 13.6333 4.05 11.25 3.48333V2.91667C11.25 2.225 10.6917 1.66667 10 1.66667C9.30833 1.66667 8.75 2.225 8.75 2.91667V3.48333C6.35833 4.05 5 6.18333 5 8.75V12.9167L3.33333 14.5833V15.4167H16.6667V14.5833L15 12.9167Z"/></svg>';
const messengerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0005 1.67197C7.8104 1.59245 5.68271 2.41021 4.10963 3.9361C2.53656 5.46198 1.65438 7.56379 1.66718 9.7553C1.64133 12.0302 2.59442 14.2066 4.28385 15.7303C4.41843 15.8529 4.49927 16.0235 4.50885 16.2053V17.6803C4.51812 17.9023 4.63603 18.1055 4.82415 18.2237C5.01226 18.3419 5.2465 18.3599 5.45051 18.272L7.11718 17.547C7.2595 17.4932 7.41653 17.4932 7.55885 17.547C8.34671 17.7596 9.15945 17.8661 9.97551 17.8636C14.4467 17.8705 18.0769 14.2515 18.0838 9.7803C18.0907 5.3091 14.4717 1.67887 10.0005 1.67197ZM15.0005 7.88823L12.5589 11.7632C12.3727 12.0588 12.0713 12.263 11.7278 12.3263C11.3842 12.3897 11.0299 12.3063 10.7505 12.0966L8.80052 10.6382C8.62274 10.5049 8.3783 10.5049 8.20052 10.6382L5.56719 12.6382C5.41575 12.755 5.2021 12.7454 5.06181 12.6154C4.92152 12.4854 4.89561 12.2731 5.00052 12.1132L7.44219 8.23823C7.62836 7.94264 7.92973 7.73845 8.27328 7.67512C8.61682 7.61179 8.97119 7.69511 9.25052 7.90489L11.2005 9.36323C11.3783 9.49656 11.6227 9.49656 11.8005 9.36323L14.4339 7.37156C14.5853 7.25477 14.7989 7.26442 14.9392 7.3944C15.0795 7.52437 15.1054 7.73666 15.0005 7.89656V7.88823Z"/></svg>';
const personIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path d="M10 10C11.8417 10 13.3333 8.50833 13.3333 6.66667C13.3333 4.825 11.8417 3.33333 10 3.33333C8.15833 3.33333 6.66667 4.825 6.66667 6.66667C6.66667 8.50833 8.15833 10 10 10ZM10 11.6667C7.775 11.6667 3.33333 12.7833 3.33333 15V16.6667H16.6667V15C16.6667 12.7833 12.225 11.6667 10 11.6667Z"/></svg>';

interface Destination {
    label: string;
    icon: string;
    selected?: boolean;
}

@Component({
    selector: 'app-tabs-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tabs-tailwind-styling.component.scss'],
    templateUrl: './tabs-tailwind-styling.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent, IgxIconComponent]
})
export class TabsTailwindStylingComponent {
    public destinations: Destination[] = [
        { label: 'Home', icon: 'home' },
        { label: 'Location', icon: 'place', selected: true },
        { label: 'Alerts', icon: 'notifications' },
        { label: 'Chat', icon: 'messenger' },
        { label: 'Profile', icon: 'person' }
    ];

    constructor() {
        const iconService = inject(IgxIconService);
        iconService.addSvgIconFromText('home', homeIcon, 'material');
        iconService.addSvgIconFromText('place', placeIcon, 'material');
        iconService.addSvgIconFromText('notifications', notificationsIcon, 'material');
        iconService.addSvgIconFromText('messenger', messengerIcon, 'material');
        iconService.addSvgIconFromText('person', personIcon, 'material');
    }
}
