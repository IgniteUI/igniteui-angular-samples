import { Component, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxInputGroupType } from 'igniteui-angular/input-group';
import { forkJoin, take } from 'rxjs';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface ComboSize {
    label: string;
    className: string;
}

interface ComboType {
    label: string;
    type: IgxInputGroupType;
}

@Component({
    selector: 'app-simple-combo-size',
    styleUrls: ['./simple-combo-size.component.scss'],
    templateUrl: './simple-combo-size.component.html',
    imports: [IgxSimpleComboComponent]
})
export class SimpleComboSizeComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    public sizes: ComboSize[] = [
        { label: 'Small', className: 'small' },
        { label: 'Medium', className: 'medium' },
        { label: 'Large', className: 'large' }
    ];

    public types: ComboType[] = [
        { label: 'Border Type', type: 'border' },
        { label: 'Box Type', type: 'box' }
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
}
