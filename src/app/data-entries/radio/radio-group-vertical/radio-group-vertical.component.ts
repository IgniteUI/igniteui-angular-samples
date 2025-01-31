import { Component } from '@angular/core';
import { RadioGroupAlignment, IgxRadioGroupDirective, IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-group-vertical',
    styleUrls: ['./radio-group-vertical.component.scss'],
    templateUrl: './radio-group-vertical.component.html',
    imports: [IgxRadioGroupDirective, IgxRadioComponent, FormsModule]
})
export class RadioGroupVerticalComponent {
    public alignment = RadioGroupAlignment.vertical;
    public selected: string;
}

