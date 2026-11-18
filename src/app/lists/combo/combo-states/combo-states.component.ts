import { ChangeDetectorRef, Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
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
    // The state that the display-only combo shows.
    shows?: 'hover' | 'focus';
    value: string[];
    open?: boolean;
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

    public states: ComboState[] = [
        { label: 'Idle', value: [] },
        { label: 'Idle & Hover', shows: 'hover', value: [] },
        { label: 'Filled', value: ['BY', 'BE'] },
        { label: 'Filled & Hover', shows: 'hover', value: ['BY', 'BE'] },
        { label: 'Focused', shows: 'focus', value: ['BY', 'BE'] },
        { label: 'Focused (Dropdown On)', shows: 'focus', value: ['BY', 'BE'], open: true }
    ];

    // The open dropdown is display-only, so a click elsewhere does not close it.
    public overlaySettings: OverlaySettings = { closeOnOutsideClick: false };

    private combos = viewChildren(IgxComboComponent);
    private cdr = inject(ChangeDetectorRef);

    constructor() {
        // The combos are display-only, so the sample is inert. Opening a combo moves the focus
        // to its search input, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            showHoverStyles();

            this.combos().forEach((combo, index) => {
                const state = this.states[index];
                // The input group has a focused state of its own, which a display-only combo never enters.
                combo.inputGroup.isFocused = state.shows === 'focus';
                if (state.open) {
                    combo.open();
                }
            });
            this.cdr.markForCheck();
        });
    }
}
