import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IBaseCancelableBrowserEventArgs } from 'igniteui-angular/core';

interface Option {
    id: number;
    name: string;
    group: string;
}

interface DropdownSize {
    label: string;
    className: string;
}

@Component({
    selector: 'app-simple-combo-dropdown-size',
    styleUrls: ['./simple-combo-dropdown-size.component.scss'],
    templateUrl: './simple-combo-dropdown-size.component.html',
    imports: [IgxSimpleComboComponent]
})
export class SimpleComboDropdownSizeComponent {
    public options: Option[] = [1, 2, 3].map((id) => ({ id, name: 'Item', group: 'Header' }));

    public sizes: DropdownSize[] = [
        { label: 'Small', className: 'small' },
        { label: 'Medium', className: 'medium' },
        { label: 'Large', className: 'large' }
    ];

    private combos = viewChildren(IgxSimpleComboComponent);

    constructor() {
        // The dropdowns are display-only, so the sample is inert. Opening a combo moves the focus
        // to its list, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            this.combos().forEach((combo) => combo.open());
        });
    }

    // The display-only dropdowns stay open.
    public keepOpen(event: IBaseCancelableBrowserEventArgs): void {
        event.cancel = true;
    }
}
