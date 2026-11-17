import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-disabled',
    templateUrl: './radio-disabled.component.html',
    styleUrls: ['./radio-disabled.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioDisabledComponent { }
