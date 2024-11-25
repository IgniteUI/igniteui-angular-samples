import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-sample-1',
    styleUrls: ['./radio-sample-1.component.scss'],
    templateUrl: './radio-sample-1.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioSample1Component {
    public selected: string;
}
