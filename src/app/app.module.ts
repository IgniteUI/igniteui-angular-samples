
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxBottomNavModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxCarouselModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxColumnHidingModule,
    IgxComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDropDownModule,
    IgxExcelExporterService,
    IgxFilterModule,
    IgxForOfModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxLayoutModule,
    IgxListModule,
    IgxMaskModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxNavigationModule,
    IgxOverlayService,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxTimePickerModule,
    IgxToastModule,
    IgxToggleModule
} from "igniteui-angular";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AvatarSample1Component } from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component } from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component } from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import { ButtonGroupSample1Component } from "./buttonGroup/button-group-sample-1/button-group-sample-1.component";
import { ButtonGroupSample2Component } from "./buttonGroup/button-group-sample-2/button-group-sample-2.component";
import { ButtonGroupSample3Component } from "./buttonGroup/button-group-sample-3/button-group-sample-3.component";
import { ButtonsSample1Component } from "./buttons/buttons-sample-1/buttons-sample-1.component";
import { ButtonsSample2Component } from "./buttons/buttons-sample-2/buttons-sample-2.component";
import { ButtonsSample3Component } from "./buttons/buttons-sample-3/buttons-sample-3.component";
import { ButtonsSample4Component } from "./buttons/buttons-sample-4/buttons-sample-4.component";
import { ButtonsSample5Component } from "./buttons/buttons-sample-5/buttons-sample-5.component";
import { ButtonsSample6Component } from "./buttons/buttons-sample-6/buttons-sample-6.component";
import { ButtonsSample7Component } from "./buttons/buttons-sample-7/buttons-sample-7.component";
import { CalendarSample1Component } from "./calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "./calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "./calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "./calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "./calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ChipSampleComponent, EmailFilterPipe } from "./chip/chip.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
import { CascadingCombos } from "./combo/cascading-combos/cascading-combos.component";
import { ComboFeatures } from "./combo/combo-features/combo-features.component";
import { DatepickerSample1Component } from "./datepicker/datepicker-sample-1/datepicker-sample-1.component";
import { DatepickerSample2Component } from "./datepicker/datepicker-sample-2/datepicker-sample-2.component";
import { DatepickerSample3Component } from "./datepicker/datepicker-sample-3/datepicker-sample-3.component";
import { DatepickerSample4Component } from "./datepicker/datepicker-sample-4/datepicker-sample-4.component";
import { DatepickerSample5Component } from "./datepicker/datepicker-sample-5/datepicker-sample-5.component";
import { DialogSample1Component } from "./dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "./dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "./dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { CsvExportSample1Component } from "./export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { CsvExportComponent } from "./export-csv/csv-export.component";
import { ExcelExportSample1Component } from "./export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { ExcelExportComponent } from "./export-excel/excel-export.component";
import { CheckboxSample1Component } from "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { RadioGroupSampleComponent } from "./form-elements/radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./form-elements/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./form-elements/radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./form-elements/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./form-elements/switch/switch-sample-2/switch-sample-2.component";
import { GridCRMComponent } from "./grid/grid-crm/grid-crm.component";
import { FilteringSampleComponent } from "./grid/grid-filtering-sample/grid-filtering-sample.component";
import { GridMovingSampleComponent } from "./grid/grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
import { ResizingSampleComponent } from "./grid/grid-resizing-sample/grid-resizing-sample.component";
import { FinancialSampleComponent } from "./grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid/grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid/grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid/grid-sample-selection/grid-selection.component";
import { GridContextmenuComponent } from "./grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component";
import { SortingSampleComponent } from "./grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridComponent } from "./grid/grid.component";
import { GridMultiColumnHeadersComponent } from "./grid/multi-column-headers/multi-column-headers";
import { DataService } from "./grid/services/data.service";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import { InputGroupSample1Component } from "./input-group/input-group-sample-1/input-group-sample-1.component";
import { InputGroupSample2Component } from "./input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample3Component } from "./input-group/input-group-sample-3/input-group-sample-3.component";
import { InputGroupSample4Component } from "./input-group/input-group-sample-4/input-group-sample-4.component";
import { InputGroupSample5Component } from "./input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component } from "./input-group/input-group-sample-6/input-group-sample-6.component";
import { ReactiveFormsSampleComponent } from "./input-group/reactive-forms/reactive-forms.component";
import { LayoutComponent } from "./layout/layout.component";
import {
    LinearProgressbarSample1Component
} from "./linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import {
    LinearProgressbarSample2Component
} from "./linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";
import { LinearProgressbarComponent } from "./linear-progressbar/linear-progressbar.component";
import { ListSample1Component } from "./list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "./list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "./list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "./list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "./list/list-sample-5/list-sample-5.component";
import { ListComponent } from "./list/list.component";
import { MaskSample1Component } from "./mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "./mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "./mask/mask-sample-3/mask-sample-3.component";
import { NavbarSample1Component } from "./navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";
import { OverlaySampleComponent } from "./overlay/overlay-sample.component";
import { RippleSample1Component } from "./ripple/ripple-sample-1/ripple-sample-1.component";
import { RippleSample2Component } from "./ripple/ripple-sample-2/ripple-sample-2.component";
import { RippleSample3Component } from "./ripple/ripple-sample-3/ripple-sample-3.component";
import { RippleSample4Component } from "./ripple/ripple-sample-4/ripple-sample-4.component";
import { RippleSample5Component } from "./ripple/ripple-sample-5/ripple-sample-5.component";
import { RippleSample6Component } from "./ripple/ripple-sample-6/ripple-sample-6.component";
import { SliderSample1Component } from "./slider/slider-sample-1/slider-sample-1.component";
import { SliderSample2Component } from "./slider/slider-sample-2/slider-sample-2.component";
import { SliderSample3Component } from "./slider/slider-sample-3/slider-sample-3.component";
import { SliderSample4Component } from "./slider/slider-sample-4/slider-sample-4.component";
import { SliderSample5Component } from "./slider/slider-sample-5/slider-sample-5.component";
import { SnackbarSample1Component } from "./snackbar/snackbar-sample-1/snackbar-sample-1.component";
import { SnackbarSample2Component } from "./snackbar/snackbar-sample-2/snackbar-sample-2.component";
import { SnackbarSample3Component } from "./snackbar/snackbar-sample-3/snackbar-sample-3.component";
import { SnackbarSample4Component } from "./snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TimePickerSample1Component } from "./timepicker/timepicker-sample-1/timepicker-sample-1.component";
import { TimePickerSample2Component } from "./timepicker/timepicker-sample-2/timepicker-sample-2.component";
import { TimePickerSample3Component } from "./timepicker/timepicker-sample-3/timepicker-sample-3.component";
import { TimePickerSample4Component } from "./timepicker/timepicker-sample-4/timepicker-sample-4.component";
import { ToastSample1Component } from "./toast/toast-sample-1/toast-sample-1.component";
import { ToastSample2Component } from "./toast/toast-sample-2/toast-sample-2.component";
import { ToastSample3Component } from "./toast/toast-sample-3/toast-sample-3.component";
import { ToastSample4Component } from "./toast/toast-sample-4/toast-sample-4.component";
import { ToastSample5Component } from "./toast/toast-sample-5/toast-sample-5.component";
import { ToggleSample1Component } from "./toggle/toggle-sample-1/toggle-sample-1.component";
import { ToggleSample2Component } from "./toggle/toggle-sample-2/toggle-sample-2.component";
import { ToggleSample3Component } from "./toggle/toggle-sample-3/toggle-sample-3.component";
import { ToggleComponent } from "./toggle/toggle.component";

import { CategoryChartPerformanceSamplesModule } from "./category-chart/category-chart-performance-samples.module";
import { CategoryChartSamplesModule } from "./category-chart/category-chart-samples.module";
import { FinancialChartSamplesModule } from "./financial-chart/financial-chart-samples.module";
import { GridColumnHidingSampleComponent } from "./grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "./grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridEditingSampleComponent } from "./grid/grid-editing-sample/grid-editing-sample.component";
import { GridGroupBySampleComponent } from "./grid/grid-groupby-sample/grid-groupby-sample.component";
import { RemoteFilteringSampleComponent } from "./grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { GridSearchSampleComponent } from "./grid/grid-search-sample/grid-search-sample.component";
import { GridToolbarSample1Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-3.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        EmailFilterPipe,
        AppComponent,
        BadgeSample1Component,
        BadgeSample2Component,
        BadgeSample3Component,
        CardComponent,
        CardSample1Component,
        CardSample2Component,
        CardSample3Component,
        CheckboxSample1Component,
        CheckboxSample2Component,
        CircularProgressbarComponent,
        LinearProgressbarComponent,
        ListComponent,
        ListSample1Component,
        ListSample2Component,
        ListSample3Component,
        ListSample4Component,
        ListSample5Component,
        GridCRMComponent,
        GridComponent,
        CarouselComponent,
        CarouselDetailsViewComponent,
        CarouselSample1Component,
        CarouselSample2Component,
        CarouselSample3Component,
        CarouselSample4Component,
        CalendarSample1Component,
        CalendarSample2Component,
        CalendarSample3Component,
        CalendarSample4Component,
        CalendarSample5Component,
        CalendarComponent,
        CascadingCombos,
        ComboFeatures,
        DialogComponent,
        DialogSample1Component,
        DialogSample2Component,
        DialogSample3Component,
        DropDownSample1Component,
        DropDownSample2Component,
        DropDownSample3Component,
        LayoutComponent,
        NavdrawerComponent,
        NavDrawerMiniComponent,
        NavDrawerPinComponent,
        NavDrawerSimpleComponent,
        TabbarComponent,
        TabbarSample1Component,
        TabbarSample2Component,
        TabsSample1Component,
        TabsSample2Component,
        TabsSample3Component,
        NavbarComponent,
        NavbarSample1Component,
        SliderSample1Component,
        SliderSample2Component,
        SliderSample3Component,
        SliderSample4Component,
        SliderSample5Component,
        CardSample1Component,
        CardSample2Component,
        CardSample3Component,
        ButtonsSample1Component,
        ButtonsSample2Component,
        ButtonsSample3Component,
        ButtonsSample4Component,
        ButtonsSample5Component,
        ButtonsSample6Component,
        ButtonsSample7Component,
        FilteringSampleComponent,
        PagingSampleComponent,
        ResizingSampleComponent,
        SwitchSample1Component,
        SwitchSample2Component,
        RadioSample1Component,
        RadioSample2Component,
        IconSample1Component,
        ToggleComponent,
        OverlaySampleComponent,
        ToggleSample1Component,
        ToggleSample2Component,
        ToggleSample3Component,
        AvatarSample1Component,
        AvatarSample2Component,
        AvatarSample3Component,
        IgxForComponent,
        FinancialSampleComponent,
        PinningSampleComponent,
        GridRemoteVirtualizationSampleComponent,
        GridSelectionSampleComponent,
        LinearProgressbarSample1Component,
        LinearProgressbarSample2Component,
        RippleSample1Component,
        RippleSample2Component,
        RippleSample3Component,
        RippleSample4Component,
        RippleSample5Component,
        RippleSample6Component,
        NavbarSample1Component,
        DatepickerSample1Component,
        DatepickerSample2Component,
        DatepickerSample3Component,
        DatepickerSample4Component,
        DatepickerSample5Component,
        SnackbarSample1Component,
        SnackbarSample2Component,
        SnackbarSample3Component,
        SnackbarSample4Component,
        ToastSample1Component,
        ToastSample2Component,
        ToastSample3Component,
        ToastSample4Component,
        ToastSample5Component,
        ButtonGroupSample1Component,
        ButtonGroupSample2Component,
        ButtonGroupSample3Component,
        MaskSample1Component,
        MaskSample2Component,
        MaskSample3Component,
        TimePickerSample1Component,
        TimePickerSample2Component,
        TimePickerSample3Component,
        TimePickerSample4Component,
        InputGroupSample1Component,
        InputGroupSample2Component,
        InputGroupSample3Component,
        InputGroupSample4Component,
        InputGroupSample5Component,
        InputGroupSample6Component,
        GridSample3Component,
        GridGroupBySampleComponent,
        ExcelExportComponent,
        ExcelExportSample1Component,
        CsvExportComponent,
        CsvExportSample1Component,
        SortingSampleComponent,
        GridContextmenuComponent,
        GridSearchSampleComponent,
        ChipSampleComponent,
        GridColumnHidingSampleComponent,
        GridColumnHidingToolbarSampleComponent,
        GridToolbarSample1Component,
        GridToolbarSample2Component,
        GridToolbarSample3Component,
        RemoteFilteringSampleComponent,
        RadioGroupSampleComponent,
        GridMovingSampleComponent,
        GridMultiColumnHeadersComponent,
        RemoteFilteringSampleComponent,
        ReactiveFormsSampleComponent,
        RadioGroupSampleComponent,
        GridEditingSampleComponent
    ],
    imports: [
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxChipsModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        IgxGridModule.forRoot(),
        IgxCarouselModule,
        IgxComboModule,
        IgxLayoutModule,
        IgxRadioModule,
        IgxSwitchModule,
        IgxNavigationModule,
        IgxNavigationDrawerModule,
        IgxProgressBarModule,
        IgxAvatarModule,
        IgxFilterModule,
        IgxBadgeModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxRippleModule,
        IgxIconModule,
        IgxDialogModule,
        IgxDropDownModule,
        IgxDatePickerModule,
        IgxDropDownModule,
        IgxCalendarModule,
        IgxSnackbarModule,
        IgxCardModule,
        IgxListModule,
        IgxCheckboxModule,
        IgxToastModule,
        IgxSliderModule,
        IgxBottomNavModule,
        IgxTabsModule,
        IgxNavbarModule,
        IgxToggleModule,
        HttpClientModule,
        HttpModule,
        IgxForOfModule,
        IgxMaskModule,
        IgxTimePickerModule,
        IgxInputGroupModule,
        CategoryChartSamplesModule.forRoot(),
        CategoryChartPerformanceSamplesModule.forRoot(),
        FinancialChartSamplesModule.forRoot(),
        IgxColumnHidingModule
    ],
    providers: [
        DataService,
        IgxCsvExporterService,
        IgxExcelExporterService,
        IgxOverlayService
    ]
})
export class AppModule { }
