import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
    selector: 'app-accordion-sample-3',
    styleUrls: ['./accordion-sample-3.component.scss'],
    templateUrl: './accordion-sample-3.component.html',
    standalone: false
})
export class AccordionSample3Component {
    public sliderType = IgxSliderType;
    public priceRange: PriceRange = new PriceRange(200, 800);
    public checkedItems = '';
    public arriveTime: Date;
    public rating: string;

    public categories = [
        { checked: false, type: 'Bike' },
        { checked: false, type: 'Motorcycle' },
        { checked: false, type: 'Car' },
        { checked: false, type: 'Taxi' },
        { checked: false, type: 'Public Transport' }
    ];

    public checkedChange() {
        this.checkedItems = '';
        this.categories.forEach(item => {
            if (item.checked) {
                this.checkedItems = this.checkedItems ? this.checkedItems + ', ' + item.type : ': ' + item.type;
            }
        });
    }

    public get time() {
        return this.arriveTime ?
            ': Arrive before ' + this.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    }
}
class PriceRange {
    constructor(
        public lower: number,
        public upper: number
    ) {
    }
}
