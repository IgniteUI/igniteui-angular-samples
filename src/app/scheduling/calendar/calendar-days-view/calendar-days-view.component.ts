import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxDaysViewComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-days-view.component.scss'],
    templateUrl: './calendar-days-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxDaysViewComponent]
})
export class CalendarDaysViewComponent { }
