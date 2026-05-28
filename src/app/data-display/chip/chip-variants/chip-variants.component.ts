import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent, IgxChipTypeVariant } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-variants',
    styleUrls: ['./chip-variants.component.scss'],
    templateUrl: './chip-variants.component.html',
    imports: [IgxChipComponent]
})
export class ChipVariantsComponent {
    private cdr = inject(ChangeDetectorRef);

    public variants: { variant: IgxChipTypeVariant | undefined; label: string }[] = [
        { variant: undefined, label: 'Default' },
        { variant: IgxChipTypeVariant.PRIMARY, label: 'Primary' },
        { variant: IgxChipTypeVariant.INFO, label: 'Info' },
        { variant: IgxChipTypeVariant.SUCCESS, label: 'Success' },
        { variant: IgxChipTypeVariant.WARNING, label: 'Warning' },
        { variant: IgxChipTypeVariant.DANGER, label: 'Danger' }
    ];

    public chipRemoved(event: IBaseChipEventArgs) {
        this.variants = this.variants.filter(v => v.label !== event.owner.id);
        this.cdr.detectChanges();
    }
}
