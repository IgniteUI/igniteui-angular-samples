import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxMonthsViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-months-view.component.scss'],
    templateUrl: './calendar-months-view.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxMonthsViewComponent]
})
export class CalendarMonthsViewComponent { }
