import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxMonthsViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-months-view.component.scss'],
    templateUrl: './calendar-months-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxMonthsViewComponent]
})
export class CalendarMonthsViewComponent { }
