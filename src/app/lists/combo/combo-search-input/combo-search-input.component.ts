import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';

interface SearchState {
    label: string;
    className?: string;
    text?: string;
}

@Component({
    selector: 'app-combo-search-input',
    styleUrls: ['./combo-search-input.component.scss'],
    templateUrl: './combo-search-input.component.html',
    imports: [IgxComboComponent]
})
export class ComboSearchInputComponent {
    // The display-only combos take no pointer or keyboard input, so the `hover`, `disabled`,
    // `filled` and `focused` classes draw those states of the search input.
    public states: SearchState[] = [
        { label: 'Idle' },
        { label: 'Idle & Hover', className: 'hover' },
        { label: 'Disabled', className: 'disabled' },
        { label: 'Filled', className: 'filled', text: 'Input text' },
        { label: 'Filled & Hover', className: 'filled hover', text: 'Input text' },
        { label: 'Focused', className: 'filled focused', text: 'Input text' }
    ];

    private combos = viewChildren(IgxComboComponent);

    constructor() {
        // The search inputs are display-only, so the sample is inert. Opening a combo moves the
        // focus to its search input, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            this.combos().forEach((combo) => combo.open());
        });
    }
}
