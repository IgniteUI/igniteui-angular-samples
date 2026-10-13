import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-remove',
    templateUrl: './chip-remove.component.html',
    styleUrls: ['./chip-remove.component.scss'],
    // The chip only shows the removable look, so inert keeps it out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent]
})
export class ChipRemoveComponent { }
