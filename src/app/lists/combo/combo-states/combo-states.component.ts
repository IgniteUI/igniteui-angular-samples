import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { OverlaySettings } from 'igniteui-angular/core';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface ComboState {
    label: string;
    className?: string;
    value: string[];
    open?: boolean;
}

@Component({
    selector: 'app-combo-states',
    styleUrls: ['./combo-states.component.scss'],
    templateUrl: './combo-states.component.html',
    imports: [IgxComboComponent, FormsModule]
})
export class ComboStatesComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    // Hover and focus come from the pointer and the keyboard, so the `hover` and `focused`
    // classes show them on the display-only combos.
    public states: ComboState[] = [
        { label: 'Idle', value: [] },
        { label: 'Idle & Hover', className: 'hover', value: [] },
        { label: 'Filled', value: ['BY', 'BE'] },
        { label: 'Filled & Hover', className: 'hover', value: ['BY', 'BE'] },
        { label: 'Focused', className: 'focused', value: ['BY', 'BE'] },
        { label: 'Focused (Dropdown On)', className: 'focused', value: ['BY', 'BE'], open: true }
    ];

    // The open dropdown is display-only, so a click elsewhere does not close it.
    public overlaySettings: OverlaySettings = { closeOnOutsideClick: false };

    private combos = viewChildren(IgxComboComponent);

    constructor() {
        // The combos are display-only, so the sample is inert. Opening a combo moves the focus
        // to its search input, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        // The last combo is shown with its dropdown open.
        afterNextRender(() => {
            this.combos()
                .filter((_, index) => this.states[index].open)
                .forEach((combo) => combo.open());
        });
    }
}
