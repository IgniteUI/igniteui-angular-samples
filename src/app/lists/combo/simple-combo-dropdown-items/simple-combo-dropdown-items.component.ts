import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { ConnectedPositioningStrategy, IBaseCancelableBrowserEventArgs, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { forkJoin, take } from 'rxjs';

interface Option {
    id: number;
    name: string;
    group?: string;
}

interface ItemRow {
    label: string;
    className: string;
    groupKey?: string;
    data: Option[];
}

interface DropdownSize {
    label: string;
    className: string;
}

@Component({
    selector: 'app-simple-combo-dropdown-items',
    styleUrls: ['./simple-combo-dropdown-items.component.scss'],
    templateUrl: './simple-combo-dropdown-items.component.html',
    imports: [IgxSimpleComboComponent]
})
export class SimpleComboDropdownItemsComponent {
    // The dropdown opens at the top of the element around the combo, where the hidden input field is.
    public positionStrategy = new ConnectedPositioningStrategy({
        verticalStartPoint: VerticalAlignment.Top,
        verticalDirection: VerticalAlignment.Bottom
    });

    public sizes: DropdownSize[] = [
        { label: 'Small', className: 'small' },
        { label: 'Medium', className: 'medium' },
        { label: 'Large', className: 'large' }
    ];

    // The header row hides its option, so only the group header shows.
    public rows: ItemRow[] = [
        { label: 'Header', className: 'header-only', groupKey: 'group', data: [{ id: 1, name: 'Item', group: 'Header' }] },
        { label: 'Item', className: 'item-only', data: [{ id: 1, name: 'Item' }] }
    ];

    private combos = viewChildren(IgxSimpleComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

        // The combos are shown open. Opening a combo moves the focus to its list, so
        // the sample is inert until the combos open and the page keeps its focus.
        afterNextRender(() => {
            const combos = this.combos();
            element.inert = true;
            forkJoin(combos.map((combo) => combo.opened.pipe(take(1)))).subscribe(() => {
                element.inert = false;
            });
            combos.forEach((combo) => combo.open());
        });
    }

    // The input fields are hidden, so the dropdowns stay open and each one works on its own.
    public keepOpen(event: IBaseCancelableBrowserEventArgs): void {
        event.cancel = true;
    }
}
