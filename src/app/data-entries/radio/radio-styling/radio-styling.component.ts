import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

interface ShippingMethod {
    value: string;
    name: string;
    detail: string;
    disabled?: boolean;
}

@Component({
    selector: 'app-radio-styling',
    templateUrl: './radio-styling.component.html',
    styleUrls: ['./radio-styling.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioStylingComponent {
    public methods: ShippingMethod[] = [
        { value: 'standard', name: 'Standard', detail: '(2-4 business days)' },
        { value: 'express', name: 'Express', detail: '(next day by 6 pm)' },
        { value: 'pickup', name: 'Pickup point', detail: '(400 + locations)' },
        { value: 'same-day', name: 'Same-day', detail: '(not available)', disabled: true }
    ];
}
