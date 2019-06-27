import { Component, ViewChild } from "@angular/core";
import { IgxMonthPickerComponent } from "igniteui-angular";

@Component({
    selector: "app-monthpicker-sample-1",
    styleUrls: ["./monthpicker-sample-1.component.scss"],
    templateUrl: "./monthpicker-sample-1.component.html"
})
export class MonthpickerSample1Component {
    @ViewChild(IgxMonthPickerComponent, { static: true })
    public monthPicker;

    public date = new Date(2020, 6, 18);

    public today() {
        this.monthPicker.selectDate(new Date());
    }

    public deselect() {
        this.monthPicker.deselectDate();
    }
}
