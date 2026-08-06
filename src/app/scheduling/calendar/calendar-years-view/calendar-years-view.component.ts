import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxYearsViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-years-view.component.scss'],
    templateUrl: './calendar-years-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxYearsViewComponent]
})
export class CalendarYearsViewComponent { }
