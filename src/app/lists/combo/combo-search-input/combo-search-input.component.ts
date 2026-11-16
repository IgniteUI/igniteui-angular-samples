import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';

interface SearchState {
    label: string;
    // The state that the display-only search input shows.
    shows?: 'hover' | 'focus';
    disabled?: boolean;
    // The search text of a filled search input.
    text?: string;
}

// The themes draw the hover of an input group with `:hover` rules, and a display-only input group is never
// hovered. This gives each of those rules a copy right after it, in the same layer and theme condition,
// that applies inside an element with the `shows-hover` class while the input group is not hovered. The
// sample adds no styles of its own.
function showHoverStyles() {
    const copyRules = (owner: CSSStyleSheet | CSSGroupingRule) => {
        for (let i = 0; i < owner.cssRules.length; i++) {
            const rule = owner.cssRules[i];
            if (rule instanceof CSSGroupingRule) {
                copyRules(rule);
                continue;
            }

            const next = owner.cssRules[i + 1];
            const copied = next instanceof CSSStyleRule && next.selectorText.startsWith(':where(.shows-hover)');
            if (!(rule instanceof CSSStyleRule) || copied) {
                continue;
            }

            const selectors = rule.selectorText.split(/,(?![^()]*\))/)
                .filter((selector) => selector.includes('igx-input-group') && selector.includes(':hover') && !selector.includes(':not(:hover'))
                .map((selector) => `:where(.shows-hover) ${selector.trim().replaceAll(':hover', ':not(:hover)')}`);
            if (selectors.length > 0) {
                owner.insertRule(`${selectors.join(', ')} { ${rule.style.cssText} }`, ++i);
            }
        }
    };

    for (const sheet of Array.from(document.styleSheets)) {
        try {
            copyRules(sheet);
        } catch {
            // a style sheet of another origin cannot be read
        }
    }
}

@Component({
    selector: 'app-combo-search-input',
    styleUrls: ['./combo-search-input.component.scss'],
    templateUrl: './combo-search-input.component.html',
    imports: [IgxComboComponent]
})
export class ComboSearchInputComponent {
    public states: SearchState[] = [
        { label: 'Idle' },
        { label: 'Idle & Hover', shows: 'hover' },
        { label: 'Disabled', disabled: true },
        { label: 'Filled', text: 'Input text' },
        { label: 'Filled & Hover', shows: 'hover', text: 'Input text' },
        { label: 'Focused', shows: 'focus', text: 'Input text' }
    ];

    private combos = viewChildren(IgxComboComponent);

    constructor() {
        // The search inputs are display-only, so the sample is inert. Opening a combo moves the
        // focus to its search input, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            showHoverStyles();
            this.combos().forEach((combo, index) => {
                combo.open();
                // The filled search inputs hold a search text.
                combo.searchValue = this.states[index].text ?? '';
            });
        });
    }

    // The input group of the search input has a focused and a disabled state of its own, and the combo
    // sets neither from outside, so the sample turns on the class of the state and disables the input.
    public showState(combo: IgxComboComponent, state: SearchState) {
        const input = combo.searchInput.nativeElement;
        const inputGroup = input.closest('igx-input-group');

        inputGroup?.classList.toggle('igx-input-group--focused', state.shows === 'focus');
        inputGroup?.classList.toggle('igx-input-group--disabled', state.disabled === true);
        input.disabled = state.disabled === true;
    }
}
