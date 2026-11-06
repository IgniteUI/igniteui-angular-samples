import { Component, ElementRef, ViewEncapsulation, afterNextRender, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { take } from 'rxjs';

interface Country {
    id: string;
    name: string;
    region: string;
}

@Component({
    selector: 'app-simple-combo-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./simple-combo-tailwind-styling.component.scss'],
    templateUrl: './simple-combo-tailwind-styling.component.html',
    imports: [IgxSimpleComboComponent, FormsModule]
})
export class SimpleComboTailwindStylingComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    public selection = 'BY';

    private combo = viewChild.required(IgxSimpleComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

        // The combo is shown open. Opening it moves the focus to its list, so the sample is inert
        // until the combo opens and the page keeps its focus. The bound value filters the list by
        // the text of the selected item, so the filter is cleared once the dropdown opens.
        afterNextRender(() => {
            const combo = this.combo();
            element.inert = true;
            combo.opened.pipe(take(1)).subscribe(() => {
                element.inert = false;
                combo.filterValue = '';
            });
            combo.open();
        });
    }
}
