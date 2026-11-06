import { Component, afterNextRender, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectedPositioningStrategy, IBaseCancelableBrowserEventArgs, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';

interface Option {
    id: number;
    name: string;
}

interface ItemState {
    label: string;
    className?: string;
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

    // Hover, focus, and disabled come from the pointer, the keyboard, and the data, so the
    // `hover`, `focus`, and `disabled` classes show them on the display-only items.
    public states: ItemState[] = [
        { label: 'Idle' },
        { label: 'Hover', className: 'hover' },
        { label: 'Focus', className: 'focus' },
        { label: 'Disabled', className: 'disabled' }
    ];

    public rows: ItemRow[] = [
        { label: 'Unselected', states: this.states },
        { label: 'Selected', value: 1, states: this.states.slice(0, 3) }
    ];

    private combos = viewChildren(IgxSimpleComboComponent);

    constructor() {
        // The dropdowns are shown open.
        afterNextRender(() => {
            this.combos().forEach((combo) => combo.open());
        });
    }

    // The input fields are hidden, so the dropdowns stay open.
    public keepOpen(event: IBaseCancelableBrowserEventArgs): void {
        event.cancel = true;
    }
}
