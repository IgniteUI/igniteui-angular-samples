import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';

@Component({
    selector: 'app-accordion-customization',
    styleUrls: ['./accordion-customization.component.scss'],
    templateUrl: './accordion-customization.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxCheckboxComponent, IgxSliderComponent, IgxRadioComponent, IgxIconComponent, IgxTimePickerComponent, IgxLabelDirective]
})
export class AccordionCustomizationComponent {
    public readonly ratingOptions = [2, 3, 4, 5];
    public readonly sliderType = IgxSliderType;
    public priceRange = new PriceRange(200, 800);
    public rating = '';
    public arriveTime: Date | null = null;

    public categories = [
        { checked: false, type: 'Bike' },
        { checked: false, type: 'Motorcycle' },
        { checked: false, type: 'Car' },
        { checked: false, type: 'Taxi' },
        { checked: false, type: 'Public Transport' }
    ];

    public get selectedCategories(): string {
        return this.categories
            .filter(item => item.checked)
            .map(item => item.type)
            .join(', ');
    }

    public get time(): string {
        return this.arriveTime ? `: ${this.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : '';
    }
}

class PriceRange {
    constructor(
        public lower: number,
        public upper: number
    ) {
    }
}
