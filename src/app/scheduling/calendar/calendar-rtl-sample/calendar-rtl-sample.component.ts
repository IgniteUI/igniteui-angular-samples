import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent } from "igniteui-angular";

@Component({
    selector: "app-calendar",
    styleUrls: ["./calendar-rtl-sample.component.scss"],
    templateUrl: "./calendar-rtl-sample.component.html"
})
export class CalendarRtlSampleComponent {
    @ViewChild("calendar", { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public formatOptions: any;
    public formatViews: any;
    public locales = ["EN", "DE", "FR", "AR", "ZH"];
    public locale = "EN";
    public directionality = 'rtl'

    changeDirectionality(){
        this.directionality === 'rtl' ? this.directionality = 'ltr' : this.directionality = 'rtl';
    }

    public ngOnInit() {
        this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
        this.formatViews = { day: true, month: true, year: true };
    }
}
