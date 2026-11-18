import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { take } from 'rxjs';

const placeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';

interface City {
    id: string;
    name: string;
    country: string;
}

@Component({
    selector: 'app-combo-overview',
    styleUrls: ['./combo-overview.component.scss'],
    templateUrl: './combo-overview.component.html',
    imports: [IgxComboComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent]
})
export class ComboOverviewComponent {
    public cities: City[] = [
        { id: 'BG01', name: 'Sofia', country: 'Country of Bulgaria' },
        { id: 'BG02', name: 'Plovdiv', country: 'Country of Bulgaria' },
        { id: 'BG03', name: 'Varna', country: 'Country of Bulgaria' },
        { id: 'BG04', name: 'Burgas', country: 'Country of Bulgaria' },
        { id: 'BG05', name: 'Pleven', country: 'Country of Bulgaria' }
    ];

    private combo = viewChild.required(IgxComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
        inject(IgxIconService).addSvgIconFromText('place', placeIcon, 'material');

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
