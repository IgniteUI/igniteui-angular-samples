import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxSelectComponent, IgxPrefixDirective, IgxSelectItemComponent } from 'igniteui-angular';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeES from '@angular/common/locales/es';
import localeZH from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { ISelectionEventArgs } from 'igniteui-angular/drop-down';
import { IgxResourceStringsDE, IgxResourceStringsFR, IgxResourceStringsES, IgxResourceStringsZHHANS } from 'igniteui-angular-i18n';
import { CalendarResourceStringsEN } from 'igniteui-angular/core';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-2.component.scss'],
    templateUrl: './calendar-sample-2.component.html',
    imports: [IgxSelectComponent, FormsModule, IgxPrefixDirective, IgxSelectItemComponent, IgxCalendarComponent]
})
export class CalendarSample2Component implements OnInit {
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public formatOptions: any;
    public formatViews: any;
    public locales = ['EN', 'DE', 'FR', 'ES', 'ZH'];
    public locale = 'EN';

    public ngOnInit() {
        this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
        this.formatViews = { day: true, month: true, year: true };

        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeES);
        registerLocaleData(localeZH);
    }

    public localeChanged(event: ISelectionEventArgs) {
        const locale = event.newSelection.value;
        switch (locale) {
            case 'DE':
                this.calendar.resourceStrings = IgxResourceStringsDE;
                break;
            case 'FR':
                this.calendar.resourceStrings = IgxResourceStringsFR;
                break;
            case 'ES':
                this.calendar.resourceStrings = IgxResourceStringsES;
                break;
            case 'ZH':
                this.calendar.resourceStrings = IgxResourceStringsZHHANS;
                break;
            default:
                this.calendar.resourceStrings = CalendarResourceStringsEN;
                break;
        }
    }
}
