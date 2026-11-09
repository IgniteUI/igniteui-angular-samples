import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-orientation',
    templateUrl: './radio-orientation.component.html',
    styleUrls: ['./radio-orientation.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioOrientationComponent { }
