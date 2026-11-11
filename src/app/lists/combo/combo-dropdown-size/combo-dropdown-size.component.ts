import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IBaseCancelableBrowserEventArgs } from 'igniteui-angular/core';
import { forkJoin, take } from 'rxjs';

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
    public options: Option[] = [1, 2, 3].map((id) => ({ id, name: `Item ${id}`, group: 'Header' }));

    public sizes: DropdownSize[] = [
        { label: 'Small', className: 'small' },
        { label: 'Medium', className: 'medium' },
        { label: 'Large', className: 'large' }
    ];

    private combos = viewChildren(IgxComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

        // The combos are shown open. Opening a combo moves the focus to its search input, so
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
