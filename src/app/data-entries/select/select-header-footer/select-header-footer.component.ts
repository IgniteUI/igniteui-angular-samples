import { ChangeDetectorRef, Component, ElementRef, OnInit, inject } from '@angular/core';
import { IgxSelectComponent, IgxSelectFooterDirective, IgxSelectHeaderDirective, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-select-header-footer',
    styleUrls: ['select-header-footer.component.scss'],
    templateUrl: 'select-header-footer.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxIconComponent, IgxSelectHeaderDirective, IgxButtonGroupComponent, IgxButtonDirective, IgxSelectFooterDirective]
})
export class SelectHeaderFooterComponent implements OnInit {
    cdr = inject(ChangeDetectorRef);
    element = inject(ElementRef);

    public flightCount: number;
    public trainCount: number;
    public boatCount: number;
    public selected: string;
    public fruits: { type: string; delivery: string }[];

    public fruitsDS: { type: string; delivery: string }[] = [
            { type: 'Apple', delivery: 'boat' },
            { type: 'Banana', delivery: 'flight'},
            { type: 'Blackberry', delivery: 'train'},
            { type: 'Blueberry', delivery: 'train'},
            { type: 'Coconut', delivery: 'flight'},
            { type: 'Cherry', delivery: 'boat'},
            { type: 'Grape', delivery: 'train'},
            { type: 'Japanese plum', delivery: 'flight'},
            { type: 'Pineapple', delivery: 'flight'},
            { type: 'Melon', delivery: 'flight'},
            { type: 'Orange', delivery: 'boat' },
            { type: 'Pear', delivery: 'train'},
            { type: 'Peach', delivery: 'boat'},
            { type: 'Pineapple', delivery: 'flight'},
            { type: 'Pomegranate', delivery: 'flight'},
            { type: 'Watermelon', delivery: 'train'}
        ];

    public ngOnInit() {
        this.flightCount = this.fruitsDS.filter(items => items.delivery === 'flight').length;
        this.trainCount = this.fruitsDS.filter(items => items.delivery === 'train').length;
        this.boatCount = this.fruitsDS.filter(items => items.delivery === 'boat').length;
        this.fruits = this.fruitsDS;
    }

    public filter(target: EventTarget) {
        let value = (target as HTMLButtonElement).title;
        if (this.selected === value) {
            this.fruits = this.fruitsDS;
            this.selected = 'allData';
            this.cdr.detectChanges();
            return;
        }
        this.selected = value;
        this.fruits = this.fruitsDS.filter(fruit => fruit.delivery === value);
        this.cdr.detectChanges();
    }
}
