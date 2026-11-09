import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-on-off-state',
    templateUrl: './radio-on-off-state.component.html',
    styleUrls: ['./radio-on-off-state.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioOnOffStateComponent { }
