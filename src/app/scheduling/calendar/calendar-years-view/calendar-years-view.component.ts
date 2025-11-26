import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxYearsViewComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-years-view.component.scss'],
    templateUrl: './calendar-years-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxYearsViewComponent]
})
export class CalendarYearsViewComponent { }
