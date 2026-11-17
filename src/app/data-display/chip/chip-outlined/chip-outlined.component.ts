import { Component } from '@angular/core';
import { IgxChipComponent, IgxChipTypeVariant } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-outlined',
    styleUrls: ['./chip-outlined.component.scss'],
    templateUrl: './chip-outlined.component.html',
    imports: [IgxChipComponent]
})
export class ChipOutlinedComponent {
    public variants: { variant: IgxChipTypeVariant | undefined; label: string }[] = [
        { variant: undefined, label: 'Default' },
        { variant: IgxChipTypeVariant.PRIMARY, label: 'Primary' },
        { variant: IgxChipTypeVariant.INFO, label: 'Info' },
        { variant: IgxChipTypeVariant.SUCCESS, label: 'Success' },
        { variant: IgxChipTypeVariant.WARNING, label: 'Warning' },
        { variant: IgxChipTypeVariant.DANGER, label: 'Danger' }
    ];
}
