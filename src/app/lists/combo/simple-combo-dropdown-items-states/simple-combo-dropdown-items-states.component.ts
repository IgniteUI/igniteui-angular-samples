import { ChangeDetectorRef, Component, afterNextRender, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectedPositioningStrategy, IBaseCancelableBrowserEventArgs, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';

interface Option {
    id: number;
    name: string;
}

interface ItemState {
    label: string;
    // The state that the display-only item shows.
    shows?: 'hover' | 'focus' | 'disabled';
}

// The themes draw the hover of a drop-down item with `:hover` rules, and a display-only item is never
// hovered. This gives each of those rules a copy right after it, in the same layer and theme condition,
// that applies inside an element with the `shows-hover` class while the item is not hovered. The sample
// adds no styles of its own.
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
                .filter((selector) => selector.includes('igx-drop-down__item') && selector.includes(':hover') && !selector.includes(':not(:hover'))
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

interface ItemRow {
    label: string;
    value?: number;
    states: ItemState[];
}

@Component({
    selector: 'app-simple-combo-dropdown-items-states',
    styleUrls: ['./simple-combo-dropdown-items-states.component.scss'],
    templateUrl: './simple-combo-dropdown-items-states.component.html',
    imports: [IgxSimpleComboComponent, FormsModule]
})
export class SimpleComboDropdownItemsStatesComponent {
    // The dropdown opens at the top of the element around the combo, where the hidden input field is.
    public positionStrategy = new ConnectedPositioningStrategy({
        verticalStartPoint: VerticalAlignment.Top,
        verticalDirection: VerticalAlignment.Bottom
    });

    public options: Option[] = [{ id: 1, name: 'Item' }];

    public states: ItemState[] = [
        { label: 'Idle' },
        { label: 'Hover', shows: 'hover' },
        { label: 'Focus', shows: 'focus' },
        { label: 'Disabled', shows: 'disabled' }
    ];

    public rows: ItemRow[] = [
        { label: 'Unselected', states: this.states },
        { label: 'Selected', value: 1, states: this.states.slice(0, 3) }
    ];

    private combos = viewChildren(IgxSimpleComboComponent);
    private cdr = inject(ChangeDetectorRef);

    constructor() {
        // The dropdowns are shown open.
        afterNextRender(() => {
            showHoverStyles();
            this.combos().forEach((combo) => combo.open());
        });
    }

    // The drop-down has a focused item of its own, and an item has a disabled state of its own, which a
    // display-only item never enters. The drop-down also focuses its selected item when it opens, so the
    // focus is kept only on the item that shows it.
    public showState(combo: IgxSimpleComboComponent, state: ItemState): void {
        const item = combo.dropdown.items[0];
        combo.dropdown.focusedItem = state.shows === 'focus' ? item : null;
        item.disabled = state.shows === 'disabled';
        this.cdr.detectChanges();
    }

    // The input fields are hidden, so the dropdowns stay open.
    public keepOpen(event: IBaseCancelableBrowserEventArgs): void {
        event.cancel = true;
    }
}
