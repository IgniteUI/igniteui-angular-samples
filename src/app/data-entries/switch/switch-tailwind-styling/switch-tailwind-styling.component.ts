import { Component, inject } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

const darkModeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style="fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.81.89-3.41 2.26-4.4A9.4 9.4 0 0 0 12 3z"/></svg>';

@Component({
    selector: 'app-switch-tailwind-styling',
    styleUrls: ['./switch-tailwind-styling.component.scss'],
    templateUrl: './switch-tailwind-styling.component.html',
    imports: [IgxSwitchComponent, IgxIconComponent]
})
export class SwitchTailwindStylingComponent {
    public isDarkMode = true;

    constructor() {
        inject(IgxIconService).addSvgIconFromText('dark_mode', darkModeIcon, 'material');
    }
}
