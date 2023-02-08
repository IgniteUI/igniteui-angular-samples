import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeAR from '@angular/common/locales/ar';
import localeZH from '@angular/common/locales/zh';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-2.component.scss'],
    templateUrl: './calendar-sample-2.component.html'
})
export class CalendarSample2Component implements OnInit{
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public formatOptions: any;
    public formatViews: any;
    public locales = ['EN', 'DE', 'FR', 'AR', 'ZH'];
    public locale = 'EN';

    public ngOnInit() {
        this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
        this.formatViews = { day: true, month: true, year: true };

        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeAR);
        registerLocaleData(localeZH);
    }
}
