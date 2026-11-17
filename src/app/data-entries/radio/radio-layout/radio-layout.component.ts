import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-layout',
    templateUrl: './radio-layout.component.html',
    styleUrls: ['./radio-layout.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioLayoutComponent { }
