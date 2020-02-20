import { Component, ViewChild } from "@angular/core";
import {
    DateRangeType,
    IgxCalendarComponent,
    IgxDialogComponent,
    IgxDropDownComponent
} from "igniteui-angular";

@Component({
    selector: "datepicker-sample-9",
    styleUrls: ["./datepicker-sample-9.component.scss"],
    templateUrl: "./datepicker-sample-9.component.html"
})
export class DatepickerSample9Component {
    @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild("alert", { static: true }) public dialog: IgxDialogComponent;
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;

    public startDate: any = new Date(Date.now());
    public endDate: any = new Date();
    public inputStartDate: any = this.startDate.getDate() + "/"
        + (this.startDate.getMonth() + 1) + "/" + this.startDate.getFullYear();
    public inputEndDate: any = "One Way";
    public slash = " - ";
    public isClickedTwice: boolean;
    public oneWayTicket = true;
    public items: Array<{ field: string }> = [
        { field: "Los Angelis" },
        { field: "New York" },
        { field: "London" },
        { field: "Boston" },
        { field: "Paris" },
        { field: "Rome" },
        { field: "Berlin" }
    ];
    constructor() { }

    public openDropDown() {
        if (this.igxDropDown.collapsed) {
            this.igxDropDown.open();
        }
    }

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Before, dateRange: [new Date(Date.now())]}];
    }

    public ngAfterViewInit() {
        this.calendar.selectDate([this.startDate, this.startDate]);
    }

    public verifyRange(dates: Date[]) {
        this.startDate = dates[0];
        this.isClickedTwice = false;
        if (this.startDate !== dates[dates.length - 1]) {
            this.endDate = dates[dates.length - 1];
            this.isClickedTwice = true;
        }

        this.inputStartDate = this.startDate.getDate() + "/"
            + (this.startDate.getMonth() + 1) + "/" + this.startDate.getFullYear();
        this.slash = " - ";
        this.inputEndDate = "";
        if (this.isClickedTwice) {
            this.inputEndDate = this.endDate.getDate() + "/"
                + (this.endDate.getMonth() + 1) + "/" + this.endDate.getFullYear();
        }
        this.oneWayTicket = false;
    }

    public oneWay(dropDownCalendar) {
        this.inputEndDate = "One Way";
        this.oneWayTicket = true;
        if (!this.isClickedTwice) {
            this.calendar.selectDate(this.startDate);
        } else {
            this.calendar.deselectDate([this.endDate]);
            this.calendar.selectDate([this.startDate]);
        }
        dropDownCalendar.close();
    }

    public onDoneSelected(dropDownCalendar) {

        dropDownCalendar.close();
    }

    public onClosing() {
        if (!this.isClickedTwice && !this.oneWayTicket) {
            this.inputEndDate = this.inputStartDate;
            this.calendar.selectDate(this.startDate);
        }
    }
}
