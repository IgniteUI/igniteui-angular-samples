import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { OverlaySettings } from 'igniteui-angular/core';
import { take } from 'rxjs';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface ComboState {
    label: string;
    className?: string;
    value?: string;
    open?: boolean;
}

@Component({
    selector: 'app-simple-combo-states',
    styleUrls: ['./simple-combo-states.component.scss'],
    templateUrl: './simple-combo-states.component.html',
    imports: [IgxSimpleComboComponent, FormsModule]
})
export class SimpleComboStatesComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    // Hover and focus come from the pointer and the keyboard, so the `hover` and `focused`
    // classes show them on the display-only combos.
    public states: ComboState[] = [
        { label: 'Idle' },
        { label: 'Idle & Hover', className: 'hover' },
        { label: 'Filled', value: 'BY' },
        { label: 'Filled & Hover', className: 'hover', value: 'BY' },
        { label: 'Focused', className: 'focused', value: 'BY' },
        { label: 'Focused (Dropdown On)', className: 'focused', value: 'BY', open: true }
    ];

    // The open dropdown is display-only, so a click elsewhere does not close it.
    public overlaySettings: OverlaySettings = { closeOnOutsideClick: false };

    private combos = viewChildren(IgxSimpleComboComponent);

    constructor() {
        // The combos are display-only, so the sample is inert. Opening a combo moves the focus
        // to its list, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        // The last combo is shown with its dropdown open. The bound value filters its list by the
        // text of the selected item, so the filter is cleared once the dropdown opens.
        afterNextRender(() => {
            this.combos()
                .filter((_, index) => this.states[index].open)
                .forEach((combo) => {
                    combo.opened.pipe(take(1)).subscribe(() => {
                        combo.filterValue = '';
                    });
                    combo.open();
                });
        });
    }
}
