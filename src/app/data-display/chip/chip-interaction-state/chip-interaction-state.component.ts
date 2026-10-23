import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-interaction-state',
    templateUrl: './chip-interaction-state.component.html',
    styleUrls: ['./chip-interaction-state.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent]
})
export class ChipInteractionStateComponent { }
