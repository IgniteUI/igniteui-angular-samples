import { Component, Pipe, PipeTransform, ViewChild } from "@angular/core";
import { IgxDropDownComponent, DateRange } from "igniteui-angular";

@Component({
    selector: "flight-booking",
    styleUrls: ["./daterangepicker-flight-booking.scss"],
    templateUrl: "./daterangepicker-flight-booking.html"
})
export class FlightBookingComponent {
    @ViewChild("fromTownsDropDown")
    public fromTownsDropDown: IgxDropDownComponent;

    @ViewChild("toTownsDropDown")
    public toTownsDropDown: IgxDropDownComponent;

    public towns: string[] = [
        "New York",
        "Washington, D.C.",
        "London",
        "Berlin",
        "Sofia",
        "Rome",
        "Kiev",
        "Copenhagen",
        "Paris",
        "Barcelona",
        "Vienna",
        "Athens",
        "Dublin",
        "Yerevan",
        "Oslo",
        "Helsinki",
        "Stockholm",
        "Prague",
        "Istanbul"
    ];
    public townFrom = "Barcelona";
    public townTo = "New York";
    public minDate: Date;
    public maxDate: Date;
    public range: DateRange;

    constructor() {
        const today = new Date();
        this.minDate = new Date();
        this.minDate.setDate(today.getDate() + 10);

        this.maxDate = new Date();
        this.maxDate.setDate(today.getDate() + 10);
        this.maxDate.setMonth(today.getMonth() + 1);
    }
}
@Pipe({ name: "startsWith" })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = "") {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}

@Pipe({ name: "withoutTownFrom" })
export class PipeWithoutTownFrom implements PipeTransform {
    public transform(collection: any[], townFrom: string) {
        return collection.filter((item) => item !== townFrom);
    }
}
