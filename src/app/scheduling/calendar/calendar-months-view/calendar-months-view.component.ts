import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxMonthsViewComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-months-view.component.scss'],
    templateUrl: './calendar-months-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxMonthsViewComponent]
})
export class CalendarMonthsViewComponent { }
