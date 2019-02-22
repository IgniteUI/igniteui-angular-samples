import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxCalendarModule, IgxCardModule, IgxDatePickerModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule,
    IgxSnackbarModule, IgxSwitchModule, IgxTimePickerModule, IgxToastModule, IgxLabelDirective
} from "igniteui-angular";
import { CalendarSample1Component } from "./calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "./calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "./calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "./calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "./calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarSample6Component } from "./calendar/calendar-sample-6/calendar-sample-6.component";
import { CalendarSample7Component } from "./calendar/calendar-sample-7/calendar-sample-7.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { DatepickerSample1Component } from "./datepicker/datepicker-sample-1/datepicker-sample-1.component";
import { DatepickerSample2Component } from "./datepicker/datepicker-sample-2/datepicker-sample-2.component";
import { DatepickerSample3Component } from "./datepicker/datepicker-sample-3/datepicker-sample-3.component";
import { DatepickerSample4Component } from "./datepicker/datepicker-sample-4/datepicker-sample-4.component";
import { DatepickerSample5Component } from "./datepicker/datepicker-sample-5/datepicker-sample-5.component";
import { DatepickerSample6Component } from "./datepicker/datepicker-sample-6/datepicker-sample-6.component";
import { SchedulingRoutingModule } from "./scheduling-routing.module";
import { TimepickerDropdownSampleComponent } from "./timepicker/timepicker-dropdown-sample/timepicker-dropdown-sample.component";
import { TimePickerSample1Component } from "./timepicker/timepicker-sample-1/timepicker-sample-1.component";
import { TimePickerSample2Component } from "./timepicker/timepicker-sample-2/timepicker-sample-2.component";
import { TimePickerSample3Component } from "./timepicker/timepicker-sample-3/timepicker-sample-3.component";
import { TimePickerSample4Component } from "./timepicker/timepicker-sample-4/timepicker-sample-4.component";
import { TimePickerSample5Component } from "./timepicker/timepicker-sample-5/timepicker-sample-5.component";

@NgModule({
    declarations: [
        CalendarComponent,
        CalendarSample1Component,
        CalendarSample2Component,
        CalendarSample3Component,
        CalendarSample4Component,
        CalendarSample5Component,
        CalendarSample6Component,
        CalendarSample7Component,
        DatepickerSample1Component,
        DatepickerSample2Component,
        DatepickerSample3Component,
        DatepickerSample4Component,
        DatepickerSample5Component,
        DatepickerSample6Component,
        TimePickerSample1Component,
        TimePickerSample2Component,
        TimePickerSample3Component,
        TimePickerSample4Component,
        TimePickerSample5Component,
        TimepickerDropdownSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SchedulingRoutingModule,
        IgxCalendarModule,
        IgxCardModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxSnackbarModule,
        IgxTimePickerModule,
        IgxToastModule,
        IgxSwitchModule
    ]
})
export class SchedulingModule { }
