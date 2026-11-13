import { ChangeDetectorRef, Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxHintDirective, IgxInputGroupType, IgxInputState } from 'igniteui-angular/input-group';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface ValidationState {
    label: string;
    className: string;
    state?: IgxInputState;
    helperText?: string;
}

interface ComboType {
    label: string;
    type: IgxInputGroupType;
}

@Component({
    selector: 'app-simple-combo-validation',
    styleUrls: ['./simple-combo-validation.component.scss'],
    templateUrl: './simple-combo-validation.component.html',
    imports: [IgxSimpleComboComponent, IgxHintDirective]
})
export class SimpleComboValidationComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    // The combo has built-in valid and invalid states but no warning state, so the `warn` class
    // shows it; the `success` class colors the bottom line of the valid state.
    public states: ValidationState[] = [
        { label: 'Success', className: 'success', state: IgxInputState.VALID },
        { label: 'Warn', className: 'warn', helperText: 'Additional fees might be included' },
        { label: 'Error', className: 'error', state: IgxInputState.INVALID, helperText: 'Please select a different region' }
    ];

    public types: ComboType[] = [
        { label: 'Border Type', type: 'border' },
        { label: 'Box Type', type: 'box' }
    ];

    private combos = viewChildren(IgxSimpleComboComponent);
    private cdr = inject(ChangeDetectorRef);

    constructor() {
        // The combos are display-only, so the sample is inert.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            for (const combo of this.combos()) {
                combo.select('BY');
            }
            this.setStates();
        });
    }

    private setStates() {
        this.combos().forEach((combo, index) => {
            combo.valid = this.states[index % this.states.length].state ?? IgxInputState.INITIAL;
        });
        this.cdr.markForCheck();
    }
}
