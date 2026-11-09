import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-state',
    templateUrl: './chip-state.component.html',
    styleUrls: ['./chip-state.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})
export class ChipStateComponent { }
