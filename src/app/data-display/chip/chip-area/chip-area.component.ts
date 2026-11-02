import { Component } from '@angular/core';
import { IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-area',
    templateUrl: './chip-area.component.html',
    styleUrls: ['./chip-area.component.scss'],
    imports: [IgxChipComponent, IgxChipsAreaComponent]
})
export class ChipAreaComponent {
    public chips = ['Chip', 'Chip', 'Chip'];
}
