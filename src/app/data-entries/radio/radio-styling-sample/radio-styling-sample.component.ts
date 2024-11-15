import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-sample-1',
    styleUrls: ['./radio-styling-sample.component.scss'],
    templateUrl: './radio-styling-sample.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioStylingSampleComponent {
    public selected: string;
}
