import { Component } from '@angular/core';
import { IFormattingOptions } from 'igniteui-angular';

@Component({
    selector: 'app-monthpicker-sample-3',
    styleUrls: ['./monthpicker-sample-3.component.scss'],
    templateUrl: './monthpicker-sample-3.component.html'
})
export class MonthpickerSample3Component {
    public formatOptions: IFormattingOptions = {
        month: 'long'
    };

    public date = new Date();
    public locales = ['en', 'de', 'fr', 'ar', 'zh'];
    public locale = 'en';
}
