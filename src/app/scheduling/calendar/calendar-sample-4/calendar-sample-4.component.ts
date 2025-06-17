import { Component, inject } from '@angular/core';
import { DateParser } from '../../../date-parser';
import { IgxCalendarComponent, IgxCalendarHeaderTemplateDirective, IgxCalendarSubheaderTemplateDirective } from 'igniteui-angular';
import { TitleCasePipe } from '@angular/common';

@Component({
    providers: [DateParser],
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-4.component.scss'],
    templateUrl: './calendar-sample-4.component.html',
    imports: [IgxCalendarComponent, IgxCalendarHeaderTemplateDirective, IgxCalendarSubheaderTemplateDirective, TitleCasePipe]
})

export class CalendarSample4Component {
  parser = inject(DateParser);

  public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
  public formatParts: boolean = this.intlDateTimeFormat.formatToParts;
}
