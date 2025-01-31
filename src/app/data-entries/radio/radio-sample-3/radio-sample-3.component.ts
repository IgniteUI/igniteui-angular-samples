import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-sample-3',
    styleUrls: ['./radio-sample-3.component.scss'],
    templateUrl: './radio-sample-3.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioSample3Component {
    public selected: string;
}
