import { Component, ElementRef, ViewEncapsulation, afterNextRender, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { take } from 'rxjs';

interface Country {
    id: string;
    name: string;
    region: string;
}

@Component({
    selector: 'app-combo-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./combo-styling.component.scss'],
    templateUrl: './combo-styling.component.html',
    imports: [IgxComboComponent, FormsModule]
})
export class ComboStylingComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    public selection = ['BY'];

    private combo = viewChild.required(IgxComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

        // The combo is shown open. Opening it moves the focus to its search input, so the
        // sample is inert until the combo opens and the page keeps its focus.
        afterNextRender(() => {
            const combo = this.combo();
            element.inert = true;
            combo.opened.pipe(take(1)).subscribe(() => {
                element.inert = false;
            });
            combo.open();
        });
    }
}
