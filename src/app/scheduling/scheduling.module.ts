import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    IgxAutocompleteModule, IgxButtonModule, IgxCalendarModule, IgxCardModule, IgxDatePickerModule,
    IgxDateRangePickerModule, IgxDateTimeEditorModule, IgxDialogModule, IgxDropDownModule, IgxIconModule,
    IgxInputGroupModule, IgxSelectModule, IgxSnackbarModule, IgxSwitchModule, IgxTextSelectionModule,
    IgxTimePickerModule, IgxToastModule, IgxToggleModule
} from '@infragistics/igniteui-angular';
import { CalendarDaysViewComponent } from './calendar/calendar-days-view/calendar-days-view.component';
import { CalendarMonthsViewComponent } from './calendar/calendar-months-view/calendar-months-view.component';
import { CalendarSample1Component } from './calendar/calendar-sample-1/calendar-sample-1.component';
import { CalendarSample2Component } from './calendar/calendar-sample-2/calendar-sample-2.component';
import { CalendarSample3Component } from './calendar/calendar-sample-3/calendar-sample-3.component';
import { CalendarSample4Component } from './calendar/calendar-sample-4/calendar-sample-4.component';
import { CalendarSample5Component } from './calendar/calendar-sample-5/calendar-sample-5.component';
import { CalendarSample6Component } from './calendar/calendar-sample-6/calendar-sample-6.component';
import { CalendarSample7Component } from './calendar/calendar-sample-7/calendar-sample-7.component';
import { CalendarSample8Component } from './calendar/calendar-sample-8/calendar-sample-8.component';
import { CalendarRtlSampleComponent } from './calendar/calendar-rtl-sample/calendar-rtl-sample.component';
import { CalendarStylingSampleComponent } from './calendar/calendar-styling-sample/calendar-styling-sample.component';
import { CalendarYearsViewComponent } from './calendar/calendar-years-view/calendar-years-view.component';
import { CalendarMultiViewComponent } from './calendar/multiview/multiview.component';
import { DatepickerDropdownComponent } from './datepicker/datepicker-dropdown/datepicker-dropdown.component';
import { DatepickerSample1Component } from './datepicker/datepicker-sample-1/datepicker-sample-1.component';
import { DatepickerSample2Component } from './datepicker/datepicker-sample-2/datepicker-sample-2.component';
import { DatepickerSample3Component } from './datepicker/datepicker-sample-3/datepicker-sample-3.component';
import { DatepickerSample4Component } from './datepicker/datepicker-sample-4/datepicker-sample-4.component';
import { DatepickerSample5Component } from './datepicker/datepicker-sample-5/datepicker-sample-5.component';
import { DatepickerSample6Component } from './datepicker/datepicker-sample-6/datepicker-sample-6.component';
import { DatepickerSample7Component } from './datepicker/datepicker-sample-7/datepicker-sample-7.component';
import { DatepickerSample8Component } from './datepicker/datepicker-sample-8/datepicker-sample-8.component';
import { AutocompletePipeStartsWith, DatepickerSample9Component, PipeWithoutTownFrom
} from './datepicker/datepicker-sample-9/datepicker-sample-9.component';
import { DatepickerStylingSampleComponent } from './datepicker/datepicker-styling-sample/datepicker-styling-sample.component';
import {DateTimePickerTDFSampleComponent} from './datepicker/template-driven-form/template-driven-form.component';
import {DateTimePickerRFSampleComponent} from './datepicker/reactive-form/reactive-form.component';
import {
    BasicDateRangePickerComponent } from './daterangepicker/daterangepicker-basic/daterangepicker-basic';
import {
    FlightBookingComponent } from './daterangepicker/daterangepicker-flight-booking/daterangepicker-flight-booking';
import { DateRangePickerModeComponent } from './daterangepicker/daterangepicker-mode/daterangepicker-mode';
import {
    DateRangePickerStartEndComponent } from './daterangepicker/daterangepicker-start-end/daterangepicker-start-end';
import { StyledDateRangePickerComponent } from './daterangepicker/daterangepicker-styling/daterangepicker-styling';
import {
    DateRangePickerValidationComponent } from './daterangepicker/daterangepicker-validation/daterangepicker-validation';
import { DateTimeAdvancedComponent } from './datetimeeditor/datetime-advanced/datetime-advanced';
import { DateTimeBasicComponent } from './datetimeeditor/datetime-basic/datetime-basic.component';
import { MonthpickerSample1Component } from './monthpicker/monthpicker-sample-1/monthpicker-sample-1.component';
import { MonthpickerSample3Component } from './monthpicker/monthpicker-sample-3/monthpicker-sample-3.component';
import { MonthpickerStylingComponent } from './monthpicker/monthpicker-styling/monthpicker-styling.component';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { TimepickerDropdownComponent } from './timepicker/timepicker-dropdown/timepicker-dropdown.component';
import { TimePickerSample1Component } from './timepicker/timepicker-sample-1/timepicker-sample-1.component';
import { TimePickerSample4Component } from './timepicker/timepicker-sample-4/timepicker-sample-4.component';
import { TimePickerSample5Component } from './timepicker/timepicker-sample-5/timepicker-sample-5.component';
import { TimePickerSample6Component } from './timepicker/timepicker-sample-6/timepicker-sample-6.component';
import { TimePickerStylingComponent } from './timepicker/timepicker-styling/timepicker-styling.component';
import { DateRangePickerRangeButtonsComponent } from './daterangepicker/daterangepicker-range-buttons/daterangepicker-range-buttons';

@NgModule({
    declarations: [
        AutocompletePipeStartsWith,
        CalendarDaysViewComponent,
        CalendarMonthsViewComponent,
        CalendarYearsViewComponent,
        CalendarSample1Component,
        CalendarSample2Component,
        CalendarSample3Component,
        CalendarSample4Component,
        CalendarSample5Component,
        CalendarSample6Component,
        CalendarSample7Component,
        CalendarSample8Component,
        CalendarRtlSampleComponent,
        CalendarMultiViewComponent,
        CalendarStylingSampleComponent,
        DateTimeAdvancedComponent,
        DatepickerSample1Component,
        DatepickerSample2Component,
        DatepickerSample3Component,
        DatepickerSample4Component,
        DatepickerSample5Component,
        DatepickerSample6Component,
        DatepickerSample7Component,
        DatepickerSample8Component,
        DatepickerSample9Component,
        DateTimePickerTDFSampleComponent,
        DateTimePickerRFSampleComponent,
        DateTimeBasicComponent,
        DatepickerDropdownComponent,
        DatepickerStylingSampleComponent,
        TimePickerSample1Component,
        TimePickerSample4Component,
        TimePickerSample5Component,
        TimePickerSample6Component,
        TimePickerStylingComponent,
        DatepickerDropdownComponent,
        TimepickerDropdownComponent,
        MonthpickerSample1Component,
        MonthpickerSample3Component,
        MonthpickerStylingComponent,
        PipeWithoutTownFrom,
        BasicDateRangePickerComponent,
        DateRangePickerModeComponent,
        DateRangePickerRangeButtonsComponent,
        DateRangePickerStartEndComponent,
        DateRangePickerValidationComponent,
        StyledDateRangePickerComponent,
        FlightBookingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SchedulingRoutingModule,
        IgxAutocompleteModule,
        IgxCalendarModule,
        IgxCardModule,
        IgxDatePickerModule,
        IgxDateRangePickerModule,
        IgxDateTimeEditorModule,
        IgxDialogModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxSnackbarModule,
        IgxTimePickerModule,
        IgxToastModule,
        IgxSwitchModule,
        IgxButtonModule,
        IgxSelectModule,
        IgxDropDownModule,
        IgxToggleModule,
        IgxTextSelectionModule
    ]
})
export class SchedulingModule { }
