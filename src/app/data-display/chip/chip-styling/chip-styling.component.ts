import { Component, inject } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

// The outline takes the chip text color, and the filled half keeps the warning color.
const halfStarIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.01 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path style="fill: var(--ig-warn-400)" d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>';
const peopleIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>';

@Component({
    selector: 'app-chip-styling',
    styleUrls: ['./chip-styling.component.scss'],
    templateUrl: './chip-styling.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective]
})
export class ChipStylingSampleComponent {
    constructor() {
        const iconService = inject(IgxIconService);
        iconService.addSvgIconFromText('star_half', halfStarIcon, 'styling');
        iconService.addSvgIconFromText('people', peopleIcon, 'styling');
    }
}
