import { Component } from '@angular/core';
import { RadioGroupAlignment } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-radio-group-vertical',
    styleUrls: ['./radio-group-vertical.component.scss'],
    templateUrl: './radio-group-vertical.component.html'
})
export class RadioGroupVerticalComponent {
    public alignment = RadioGroupAlignment.vertical;
    public selected: string;
}

