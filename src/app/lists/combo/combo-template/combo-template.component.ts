import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_COMBO_DIRECTIVES, IComboItemAdditionEvent, IgxComboComponent } from 'igniteui-angular/combo';
import { IgxOverlayOutletDirective, SortingDirection } from 'igniteui-angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { take } from 'rxjs';
import { Destination, destinations } from './local-data';

const icons: Record<string, string> = {
    place: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
    public: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    flight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
    add: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
    location_searching: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>'
};

type TemplateName = 'item' | 'headerItem' | 'header' | 'footer' | 'empty' | 'add' | 'toggleIcon' | 'clearIcon' | 'input';

interface TemplateSwitch {
    name: TemplateName;
    label: string;
}

@Component({
    selector: 'app-combo-template',
    styleUrls: ['./combo-template.component.scss'],
    templateUrl: './combo-template.component.html',
    imports: [IGX_COMBO_DIRECTIVES, IgxSwitchComponent, IgxIconComponent, IgxBadgeComponent, IgxButtonDirective, IgxOverlayOutletDirective, FormsModule]
})
export class ComboTemplateComponent {
    public readonly SortingDirection = SortingDirection;

    public destinations: Destination[] = destinations;

    public templateSwitches: TemplateSwitch[] = [
        { name: 'item', label: 'Item template' },
        { name: 'headerItem', label: 'Header Item template' },
        { name: 'header', label: 'Header template' },
        { name: 'footer', label: 'Footer template' },
        { name: 'empty', label: 'Empty template' },
        { name: 'add', label: 'Add template' },
        { name: 'toggleIcon', label: 'Toggle Icon template' },
        { name: 'clearIcon', label: 'Clear Icon template' },
        { name: 'input', label: 'Templated input' }
    ];

    // which templates the switches have turned on
    public templates: Record<TemplateName, boolean> = {
        item: false,
        headerItem: false,
        header: false,
        footer: false,
        empty: false,
        add: false,
        toggleIcon: false,
        clearIcon: false,
        input: false
    };

    // the `id` values of the selected destinations
    public selected: string[] = [];

    private combo = viewChild.required(IgxComboComponent);

    constructor() {
        const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
        const iconService = inject(IgxIconService);

        for (const [name, svg] of Object.entries(icons)) {
            iconService.addSvgIconFromText(name, svg, 'material');
        }

        // The combo is shown open when the sample loads. Opening it moves the focus to its search
        // input, so the sample is inert until the combo opens and the page keeps its focus.
        afterNextRender(() => {
            const combo = this.combo();
            element.inert = true;
            combo.opened.pipe(take(1)).subscribe(() => {
                element.inert = false;
            });
            combo.open();
        });
    }

    public get selectedNames(): string[] {
        return this.destinations.filter((d) => this.selected.includes(d.id)).map((d) => d.name);
    }

    public citiesIn(region: string): number {
        return this.destinations.filter((d) => d.region === region).length;
    }

    // a custom value becomes a destination whose `id` and `name` hold the search text
    public onAddition(event: IComboItemAdditionEvent): void {
        event.addedItem.country = 'Custom destination';
        event.addedItem.offset = '—';
    }
}
