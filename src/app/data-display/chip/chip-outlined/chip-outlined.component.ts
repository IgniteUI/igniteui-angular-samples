import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent, IgxChipTypeVariant } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-chip-outlined',
    styleUrls: ['./chip-outlined.component.scss'],
    templateUrl: './chip-outlined.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})

export class ChipOutlinedComponent {
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
