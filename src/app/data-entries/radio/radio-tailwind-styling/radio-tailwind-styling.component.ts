import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-tailwind-styling',
    templateUrl: './radio-tailwind-styling.component.html',
    styleUrls: ['./radio-tailwind-styling.component.scss'],
    imports: [IgxButtonDirective, IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioTailwindStylingComponent {
    public format = 'csv';

    public formats = [
        { value: 'pdf', label: 'PDF Document' },
        { value: 'xls', label: 'XLS Editable spreadsheet' },
        { value: 'csv', label: 'CSV Raw data, no styling' }
    ];
}
