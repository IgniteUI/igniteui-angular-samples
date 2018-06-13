import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent } from "igniteui-angular";
import { DateParser} from "../../date-parser";

@Component({
  providers: [DateParser],
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-4.component.scss"],
  templateUrl: "./calendar-sample-4.component.html"
})

export class CalendarSample4Component {
  public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
  public formatParts: boolean = this.intlDateTimeFormat.formatToParts;

  constructor(public parser: DateParser) { }

 }
