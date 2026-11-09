import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-overview',
    templateUrl: './radio-overview.component.html',
    styleUrls: ['./radio-overview.component.scss'],
    imports: [IgxButtonDirective, IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioOverviewComponent { }
