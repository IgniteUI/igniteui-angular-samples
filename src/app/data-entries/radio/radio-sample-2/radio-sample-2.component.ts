import { Component } from '@angular/core';

import { IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-sample-2',
    styleUrls: ['./radio-sample-2.component.scss'],
    templateUrl: './radio-sample-2.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioSample2Component {
    public colors = [{
        hex: '#f06a2f',
        name: 'Carrot'
    }, {
        hex: '#ff134a',
        name: 'Watermelon'
    }, {
        hex: '#7bc96f',
        name: 'Grass'
    },
    {
        hex: 'transparent',
        name: 'No color'
    }];

    public selectedColor: string = this.colors[3].hex;
}
