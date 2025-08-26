import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-tailwind-styling',
    styleUrls: ['./radio-tailwind-styling-sample.component.scss'],
    templateUrl: './radio-tailwind-styling-sample.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioTailwindStylingSampleComponent {
    public selected: string;
}
