import { Component, ElementRef, Injector, afterNextRender, inject } from '@angular/core';
import { IChipKeyDownEventArgs, IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { icons } from './icons';

interface Activity {
    label: string;
    icon: string;
}

const activities: Activity[] = [
    { label: 'Yoga', icon: 'self_improvement' },
    { label: 'Swimming', icon: 'pool' },
    { label: 'Hiking', icon: 'hiking' },
    { label: 'Lifting', icon: 'fitness_center' },
    { label: 'Cycling', icon: 'directions_bike' },
    { label: 'Tennis', icon: 'sports_tennis' },
    { label: 'Soccer', icon: 'sports_soccer' },
    { label: 'Baseball', icon: 'sports_baseball' }
];

@Component({
    selector: 'app-chip-tailwind-styling',
    styleUrls: ['./chip-tailwind-styling.component.scss'],
    templateUrl: './chip-tailwind-styling.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})
export class ChipTailwindStylingSampleComponent {
    public selected: Activity[] = activities.slice(0, 2);

    private element: HTMLElement = inject(ElementRef).nativeElement;
    private injector = inject(Injector);

    constructor() {
        const iconService = inject(IgxIconService);
        Object.entries(icons).forEach(([name, svg]) => iconService.addSvgIconFromText(name, svg, 'activity'));
    }

    public get available(): Activity[] {
        return activities.filter((activity) => !this.selected.includes(activity));
    }

    // The chip only handles Space when it is selectable, so Enter and Space add the activity here.
    public onAvailableKeyDown(event: IChipKeyDownEventArgs, activity: Activity) {
        if (event.originalEvent.key === 'Enter' || event.originalEvent.key === ' ') {
            this.addActivity(activity);
        }
    }

    public addActivity(activity: Activity) {
        const available = this.available;
        const rest = available.filter((item) => item !== activity);
        const next = rest[Math.min(available.indexOf(activity), rest.length - 1)];
        this.selected = [...this.selected, activity];
        this.focusChip(next ? 'available' : 'selected', next ? next.label : activity.label);
    }

    public removeActivity(activity: Activity) {
        const rest = this.selected.filter((item) => item !== activity);
        const next = rest[Math.min(this.selected.indexOf(activity), rest.length - 1)];
        this.selected = rest;
        this.focusChip(next ? 'selected' : 'available', next ? next.label : activity.label);
    }

    // The chip that had focus is gone, so focus a chip in the same list, or the moved chip when that list is empty.
    private focusChip(list: 'selected' | 'available', label: string) {
        afterNextRender(() => {
            const chip = this.element.querySelector<HTMLElement>(`[data-activity="${label}"]`);
            const control = list === 'selected' ? chip?.querySelector<HTMLElement>('.igx-chip__remove') : chip;
            control?.focus();
        }, { injector: this.injector });
    }
}
