import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
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
    selector: 'app-combo-dropdown-size',
    styleUrls: ['./combo-dropdown-size.component.scss'],
    templateUrl: './combo-dropdown-size.component.html',
    imports: [IgxComboComponent]
})
export class ComboDropdownSizeComponent {
    public options: Option[] = [1, 2, 3].map((id) => ({ id, name: 'Item', group: 'Header' }));

    public sizes: DropdownSize[] = [
        { label: 'Small', className: 'small' },
        { label: 'Medium', className: 'medium' },
        { label: 'Large', className: 'large' }
    ];

    private combos = viewChildren(IgxComboComponent);

    constructor() {
        // The dropdowns are display-only, so the sample is inert. Opening a combo moves the focus
        // to its search input, and the inert sample also keeps the focus on the page.
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
