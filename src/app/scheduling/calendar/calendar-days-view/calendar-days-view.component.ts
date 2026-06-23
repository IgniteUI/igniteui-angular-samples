import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxDaysViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-days-view.component.scss'],
    templateUrl: './calendar-days-view.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxDaysViewComponent]
})
export class CalendarDaysViewComponent { }
