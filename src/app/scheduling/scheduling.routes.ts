import { Routes } from '@angular/router';
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
import { CalendarSample9Component } from './calendar/calendar-sample-9/calendar-sample-9.component';
import { CalendarRtlSampleComponent } from './calendar/calendar-rtl-sample/calendar-rtl-sample.component';
import { CalendarStylingSampleComponent } from './calendar/calendar-styling-sample/calendar-styling-sample.component';
import { CalendarTailwindStylingSampleComponent } from './calendar/calendar-tailwind-styling-sample/calendar-tailwind-styling-sample.component';
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
import { DatepickerStylingSampleComponent } from './datepicker/datepicker-styling-sample/datepicker-styling-sample.component';
import {  DateTimePickerTDFSampleComponent } from './datepicker/template-driven-form/template-driven-form.component';
import {  DateTimePickerRFSampleComponent } from './datepicker/reactive-form/reactive-form.component';
import { BasicDateRangePickerComponent } from './daterangepicker/daterangepicker-basic/daterangepicker-basic';
import {
    FlightBookingComponent } from './daterangepicker/daterangepicker-flight-booking/daterangepicker-flight-booking';
import { DateRangePickerModeComponent } from './daterangepicker/daterangepicker-mode/daterangepicker-mode';
import { DateRangePickerRangeButtonsComponent } from './daterangepicker/daterangepicker-range-buttons/daterangepicker-range-buttons';
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
import { MonthpickerTailwindStylingComponent } from './monthpicker/monthpicker-tailwind-styling/monthpicker-tailwind-styling.component';
import { schedulingRoutesData } from './scheduling-routes-data';
import { TimepickerDropdownComponent } from './timepicker/timepicker-dropdown/timepicker-dropdown.component';
import { TimePickerSample1Component } from './timepicker/timepicker-sample-1/timepicker-sample-1.component';
import { TimePickerSample4Component } from './timepicker/timepicker-sample-4/timepicker-sample-4.component';
import { TimePickerSample5Component } from './timepicker/timepicker-sample-5/timepicker-sample-5.component';
import { TimePickerSample6Component } from './timepicker/timepicker-sample-6/timepicker-sample-6.component';
import { TimePickerStylingComponent } from './timepicker/timepicker-styling/timepicker-styling.component';

export const SchedulingRoutes: Routes = [
    {
        component: CalendarSample1Component,
        data: schedulingRoutesData['calendar-sample-1'],
        path: 'calendar-sample-1'
    },
    {
        component: CalendarSample2Component,
        data: schedulingRoutesData['calendar-sample-2'],
        path: 'calendar-sample-2'
    },
    {
        component: CalendarSample3Component,
        data: schedulingRoutesData['calendar-sample-3'],
        path: 'calendar-sample-3'
    },
    {
        component: CalendarSample4Component,
        data: schedulingRoutesData['calendar-sample-4'],
        path: 'calendar-sample-4'
    },
    {
        component: CalendarSample5Component,
        data: schedulingRoutesData['calendar-sample-5'],
        path: 'calendar-sample-5'
    },
    {
        component: CalendarSample6Component,
        data: schedulingRoutesData['calendar-sample-6'],
        path: 'calendar-sample-6'
    },
    {
        component: CalendarSample7Component,
        data: schedulingRoutesData['calendar-sample-7'],
        path: 'calendar-sample-7'
    },
    {
        component: CalendarSample8Component,
        data: schedulingRoutesData['calendar-sample-8'],
        path: 'calendar-sample-8'
    },
    {
        component: CalendarSample9Component,
        data: schedulingRoutesData['calendar-sample-9'],
        path: 'calendar-sample-9'
    },
    {
        component: CalendarRtlSampleComponent,
        data: schedulingRoutesData['calendar-rtl-sample'],
        path: 'calendar-rtl-sample'
    },
    {
        component: CalendarStylingSampleComponent,
        data: schedulingRoutesData['calendar-styling-sample'],
        path: 'calendar-styling-sample'
    },
    {
        component: CalendarTailwindStylingSampleComponent,
        data: schedulingRoutesData['calendar-tailwind-styling-sample'],
        path: 'calendar-tailwind-styling-sample'
    },
    {
        component: CalendarDaysViewComponent,
        data: schedulingRoutesData['calendar-days-view'],
        path: 'calendar-days-view'
    },
    {
        component: CalendarMonthsViewComponent,
        data: schedulingRoutesData['calendar-months-view'],
        path: 'calendar-months-view'
    },
    {
        component: CalendarYearsViewComponent,
        data: schedulingRoutesData['calendar-years-view'],
        path: 'calendar-years-view'
    },
    {
        component: DatepickerSample1Component,
        data: schedulingRoutesData['datepicker-sample-1'],
        path: 'datepicker-sample-1'
    },
    {
        component: DatepickerSample2Component,
        data: schedulingRoutesData['datepicker-sample-2'],
        path: 'datepicker-sample-2'
    },
    {
        component: DatepickerSample3Component,
        data: schedulingRoutesData['datepicker-sample-3'],
        path: 'datepicker-sample-3'
    },
    {
        component: DatepickerSample4Component,
        data: schedulingRoutesData['datepicker-sample-4'],
        path: 'datepicker-sample-4'
    },
    {
        component: DatepickerSample5Component,
        data: schedulingRoutesData['datepicker-sample-5'],
        path: 'datepicker-sample-5'
    },
    {
        component: DatepickerSample6Component,
        data: schedulingRoutesData['datepicker-sample-6'],
        path: 'datepicker-sample-6'
    },
    {
        component: DatepickerSample7Component,
        data: schedulingRoutesData['datepicker-sample-7'],
        path: 'datepicker-sample-7'
    },
    {
        component: DatepickerSample8Component,
        data: schedulingRoutesData['datepicker-sample-8'],
        path: 'datepicker-sample-8'
    },
    {
        component:  DateTimePickerTDFSampleComponent,
        data: schedulingRoutesData['template-driven-form'],
        path: 'template-driven-form'
    },
    {
        component:  DateTimePickerRFSampleComponent,
        data: schedulingRoutesData['reactive-form'],
        path: 'reactive-form'
    },
    {
        component: DateTimeBasicComponent,
        data: schedulingRoutesData['datetime-basic'],
        path: 'datetime-basic'
    },
    {
        component: DatepickerDropdownComponent,
        data: schedulingRoutesData['datepicker-dropdown'],
        path: 'datepicker-dropdown'
    },
    {
        component: DatepickerStylingSampleComponent,
        data: schedulingRoutesData['datepicker-styling-sample'],
        path: 'datepicker-styling-sample'
    },
    {
        component: TimePickerSample1Component,
        data: schedulingRoutesData['timepicker-sample-1'],
        path: 'timepicker-sample-1'
    },
    {
        component: TimePickerSample4Component,
        data: schedulingRoutesData['timepicker-sample-4'],
        path: 'timepicker-sample-4'
    },
    {
        component: TimePickerSample5Component,
        data: schedulingRoutesData['timepicker-sample-5'],
        path: 'timepicker-sample-5'
    },
    {
        component: TimePickerSample6Component,
        data: schedulingRoutesData['timepicker-sample-6'],
        path: 'timepicker-sample-6'
    },
    {
        component: TimePickerStylingComponent,
        data: schedulingRoutesData['timepicker-styling'],
        path: 'timepicker-styling'
    },
    {
        component: TimepickerDropdownComponent,
        data: schedulingRoutesData['timepicker-dropdown'],
        path: 'timepicker-dropdown'
    },
    {
        component: MonthpickerSample1Component,
        data: schedulingRoutesData['monthpicker-sample-1'],
        path: 'monthpicker-sample-1'
    },
    {
        component: MonthpickerSample3Component,
        data: schedulingRoutesData['monthpicker-sample-3'],
        path: 'monthpicker-sample-3'
    },
    {
        component: MonthpickerStylingComponent,
        data: schedulingRoutesData['monthpicker-styling'],
        path: 'monthpicker-styling'
    },
    {
        component: MonthpickerTailwindStylingComponent,
        data: schedulingRoutesData['monthpicker-tailwind-styling'],
        path: 'monthpicker-tailwind-styling'
    },
    {
        component: CalendarMultiViewComponent,
        data: schedulingRoutesData['multiview-calendar'],
        path: 'multiview-calendar'
    },
    {
        component: DateTimeAdvancedComponent,
        data: schedulingRoutesData['datetime-advanced'],
        path: 'datetime-advanced'
    },
    {
        component: BasicDateRangePickerComponent,
        data: schedulingRoutesData['basic-daterangepicker'],
        path: 'basic-daterangepicker'
    },
    {
        component: DateRangePickerModeComponent,
        data: schedulingRoutesData['daterangepicker-mode'],
        path: 'daterangepicker-mode'
    },
    {
        component: DateRangePickerStartEndComponent,
        data: schedulingRoutesData['daterangepicker-start-end'],
        path: 'daterangepicker-start-end'
    },
    {
        component: DateRangePickerValidationComponent,
        data: schedulingRoutesData['daterangepicker-validation'],
        path: 'daterangepicker-validation'
    },
    {
        component: StyledDateRangePickerComponent,
        data: schedulingRoutesData['styled-daterangepicker'],
        path: 'styled-daterangepicker'
    },
    {
        component: DateRangePickerRangeButtonsComponent,
        data: schedulingRoutesData['daterangepicker-range-buttons'],
        path: 'daterangepicker-range-buttons'
    },
    {
        component: FlightBookingComponent,
        data: schedulingRoutesData['flight-booking'],
        path: 'flight-booking'
    }
];
