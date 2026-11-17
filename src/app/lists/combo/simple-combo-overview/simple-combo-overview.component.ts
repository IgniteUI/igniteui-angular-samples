import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { take } from 'rxjs';

interface Country {
    id: string;
    name: string;
    region: string;
}

@Component({
    selector: 'app-simple-combo-overview',
    styleUrls: ['./simple-combo-overview.component.scss'],
    templateUrl: './simple-combo-overview.component.html',
    imports: [IgxSimpleComboComponent, IgxLabelDirective]
})
export class SimpleComboOverviewComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' },
        { id: 'HR', name: 'Croatia', region: 'Europe' },
        { id: 'CZ', name: 'Czechia', region: 'Europe' },
        { id: 'DK', name: 'Denmark', region: 'Europe' }
    ];

    private combo = viewChild.required(IgxSimpleComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

        // The combo is shown open. Opening it moves the focus to its list, so the
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
