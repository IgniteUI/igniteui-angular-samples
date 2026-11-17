import { ChangeDetectorRef, Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
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
    warning?: boolean;
    helperText?: string;
}

interface ComboType {
    label: string;
    type: IgxInputGroupType;
}

@Component({
    selector: 'app-combo-validation',
    styleUrls: ['./combo-validation.component.scss'],
    templateUrl: './combo-validation.component.html',
    imports: [IgxComboComponent, IgxHintDirective]
})
export class ComboValidationComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    // The combo has built-in valid and invalid states but no warning state of its own, so the sample
    // turns on the warning style of its input group; the `success` class colors the bottom line of
    // the valid state.
    public states: ValidationState[] = [
        { label: 'Success', className: 'success', state: IgxInputState.VALID },
        { label: 'Warn', className: 'warn', warning: true, helperText: 'Additional fees might be included' },
        { label: 'Error', className: 'error', state: IgxInputState.INVALID, helperText: 'Please select a different region' }
    ];

    public types: ComboType[] = [
        { label: 'Border Type', type: 'border' },
        { label: 'Box Type', type: 'box' }
    ];

    private combos = viewChildren(IgxComboComponent);
    private cdr = inject(ChangeDetectorRef);

    constructor() {
        // The combos are display-only, so the sample is inert.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            for (const combo of this.combos()) {
                combo.select(['BY', 'BE']);
            }
            this.setStates();
        });
    }

    private setStates() {
        this.combos().forEach((combo, index) => {
            const state = this.states[index % this.states.length];
            combo.valid = state.state ?? IgxInputState.INITIAL;
            combo.inputGroup.hasWarning = state.warning ?? false;
        });
        this.cdr.markForCheck();
    }
}
