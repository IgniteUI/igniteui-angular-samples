import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxInputGroupType } from 'igniteui-angular/input-group';

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
    selector: 'app-combo-size',
    styleUrls: ['./combo-size.component.scss'],
    templateUrl: './combo-size.component.html',
    imports: [IgxComboComponent]
})
export class ComboSizeComponent {
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

    private combos = viewChildren(IgxComboComponent);
    private comboElements = viewChildren(IgxComboComponent, { read: ElementRef<HTMLElement> });

    constructor() {
        const destroyRef = inject(DestroyRef);

        // The combos are display-only, so the sample is inert. Opening a combo moves the focus
        // to its search input, and the inert sample also keeps the focus on the page.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.inert = true;

        afterNextRender(() => {
            this.combos().forEach((combo) => combo.open());

            // A dropdown keeps the place and the width from the moment it opens, and only the
            // Material theme shows the box type, so a theme change moves and resizes the combos.
            // Each combo then publishes its width for its dropdown, and a window resize makes
            // the open dropdowns take their places again.
            const observer = new ResizeObserver((entries) => {
                for (const { target, contentRect } of entries) {
                    (target as HTMLElement).style.setProperty('--combo-width', `${contentRect.width}px`);
                }
                window.dispatchEvent(new Event('resize'));
            });
            this.comboElements().forEach((combo) => observer.observe(combo.nativeElement));
            destroyRef.onDestroy(() => observer.disconnect());
        });
    }
}
