import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-types',
    templateUrl: './chip-types.component.html',
    styleUrls: ['./chip-types.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent]
})
export class ChipTypesComponent { }
