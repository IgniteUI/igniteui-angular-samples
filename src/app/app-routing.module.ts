import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
import {
    CategoryChartAxisOptionsComponent
} from "./category-chart/axis-options/category-chart-axis-options-sample.component";
import {
    CategoryChartConfigOptionsComponent
} from "./category-chart/config-options/category-chart-config-options-sample.component";
import {
    CategoryChartCustomTooltipsComponent
} from "./category-chart/custom-tooltips/category-chart-custom-tooltips-sample.component";
import {
    CategoryChartHighFrequencyComponent
} from "./category-chart/high-frequency/category-chart-high-frequency-sample.component";
import {
    CategoryChartHighVolumeComponent
} from "./category-chart/high-volume/category-chart-high-volume-sample.component";
import {
    CategoryChartOverviewComponent
} from "./category-chart/overview/category-chart-overview-sample.component";
import { ChipSampleComponent } from "./chip/chip.component";
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
import {
    FinancialChartAxisTypesComponent
} from "./financial-chart/axis-types/financial-chart-axis-types.component";
import {
    FinancialChartCustomIndicatorsComponent
} from "./financial-chart/custom-indicators/financial-chart-custom-indicators.component";
import {
    FinancialChartCustomTooltipsComponent
} from "./financial-chart/custom-tooltips/financial-chart-custom-tooltips.component";
import {
    FinancialChartHighFrequencyComponent
} from "./financial-chart/high-frequency/financial-chart-high-frequency.component";
import {
    FinancialChartHighVolumeComponent
} from "./financial-chart/high-volume/financial-chart-high-volume.component";
import {
    FinancialChartIndicatorTypesComponent
} from "./financial-chart/indicator-types/financial-chart-indicator-types.component";
import {
    FinancialChartMultipleDataComponent
} from "./financial-chart/multiple-data/financial-chart-multiple-data.component";
import {
    FinancialChartOverviewComponent
} from "./financial-chart/overview/financial-chart-overview-sample.component";
import {
    FinancialChartPanesComponent
} from "./financial-chart/panes/financial-chart-panes.component";
import {
    FinancialChartPerformanceComponent
} from "./financial-chart/performance/financial-chart-performance.component";
import {
    FinancialChartTitlesComponent
} from "./financial-chart/titles/financial-chart-titles.component";
import {
    FinancialChartTrendlinesComponent
} from "./financial-chart/trendlines/financial-chart-trendlines.component";
import {
    FinancialChartVolumeTypeComponent
} from "./financial-chart/volume-type/financial-chart-volume-type.component";
import { CheckboxSample1Component } from "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { RadioGroupSampleComponent } from "./form-elements/radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./form-elements/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./form-elements/radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./form-elements/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./form-elements/switch/switch-sample-2/switch-sample-2.component";
import { BulletGraphAnimationComponent } from "./gauges/bullet-graph-animation/bullet-graph-animation.component";
import { BulletGraphBackgroundComponent } from "./gauges/bullet-graph-background/bullet-graph-background.component";
import { BulletGraphLabelsComponent } from "./gauges/bullet-graph-labels/bullet-graph-labels.component";
import { BulletGraphMeasuresComponent } from "./gauges/bullet-graph-measures/bullet-graph-measures.component";
import { BulletGraphRangesComponent } from "./gauges/bullet-graph-ranges/bullet-graph-ranges.component";
import { BulletGraphScaleComponent } from "./gauges/bullet-graph-scale/bullet-graph-scale.component";
import { BulletGraphTickmarksComponent } from "./gauges/bullet-graph-tickmarks/bullet-graph-tickmarks.component";
import { LinearGaugeAnimationComponent } from "./gauges/linear-gauge-animation/linear-gauge-animation.component";
import { LinearGaugeBackingComponent } from "./gauges/linear-gauge-backing/linear-gauge-backing.component";
import { LinearGaugeLabelsComponent } from "./gauges/linear-gauge-labels/linear-gauge-labels.component";
import { LinearGaugeNeedleComponent } from "./gauges/linear-gauge-needle/linear-gauge-needle.component";
import { LinearGaugeRangesComponent } from "./gauges/linear-gauge-ranges/linear-gauge-ranges.component";
import { LinearGaugeScaleComponent } from "./gauges/linear-gauge-scale/linear-gauge-scale.component";
import { LinearGaugeTickmarksComponent } from "./gauges/linear-gauge-tickmarks/linear-gauge-tickmarks.component";
import { RadialGaugeAnimationComponent } from "./gauges/radial-gauge-animation/radial-gauge-animation.component";
import { RadialGaugeBackingComponent } from "./gauges/radial-gauge-backing/radial-gauge-backing.component";
import { RadialGaugeLabelsComponent } from "./gauges/radial-gauge-labels/radial-gauge-labels.component";
import { RadialGaugeNeedleComponent } from "./gauges/radial-gauge-needle/radial-gauge-needle.component";
import { RadialGaugeRangesComponent } from "./gauges/radial-gauge-ranges/radial-gauge-ranges.component";
import { RadialGaugeScaleComponent } from "./gauges/radial-gauge-scale/radial-gauge-scale.component";
import { RadialGaugeTickmarksComponent } from "./gauges/radial-gauge-tickmarks/radial-gauge-tickmarks.component";
import { GridColumnHidingSampleComponent } from "./grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "./grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridCRMComponent } from "./grid/grid-crm/grid-crm.component";
import { GridDisplayDensitySampleComponent
} from "./grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid/grid-editing-sample/grid-editing-sample.component";
import { FilteringSampleComponent } from "./grid/grid-filtering-sample/grid-filtering-sample.component";
import { GridGroupBySampleComponent } from "./grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridMovingSampleComponent } from "./grid/grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
import { RemoteFilteringSampleComponent } from "./grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { ResizingSampleComponent } from "./grid/grid-resizing-sample/grid-resizing-sample.component";
import { FinancialSampleComponent } from "./grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid/grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid/grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid/grid-sample-selection/grid-selection.component";
import { GridSearchSampleComponent } from "./grid/grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "./grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component} from "./grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component} from "./grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component} from "./grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridComponent } from "./grid/grid.component";
import { GridMultiColumnHeadersComponent } from "./grid/multi-column-headers/multi-column-headers";
import { HomeComponent } from "./home/home.component";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IconSample2Component } from "./icon/icon-sample2/icon-sample2.component";
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
import { ListSample6Component } from "./list/list-sample-6/list-sample-6.component";
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
import { OverlaySampleMain1Component } from "./overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component } from "./overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlaySampleMain3Component } from "./overlay/overlay-main-3/overlay-main-sample-3.component";
import { OverlayPositionSample1Component } from "./overlay/overlay-positioning-1/overlay-position-sample-1.component";
import { OverlayPositionSample2Component } from "./overlay/overlay-positioning-2/overlay-position-sample-2.component";
import { OverlayScrollSample1Component } from "./overlay/overlay-scroll-1/overlay-scroll-sample-1.component";
import { OverlayScrollSample2Component } from "./overlay/overlay-scroll-2/overlay-scroll-sample-2.component";
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
export const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/home"
    },
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    {
        component: AvatarSample1Component,
        data: { displayName: "Avatar Sample 1", parentName: "Avatar" },
        path: "avatar-sample-1"
    },
    {
        component: AvatarSample2Component,
        data: { displayName: "Avatar Sample 2", parentName: "Avatar" },
        path: "avatar-sample-2"
    },
    {
        component: AvatarSample3Component,
        data: { displayName: "Avatar Sample 3", parentName: "Avatar" },
        path: "avatar-sample-3"
    },
    {
        component: BadgeSample1Component,
        data: { displayName: "Badge Sample 1", parentName: "Badge" },
        path: "badge-sample-1"
    },
    {
        component: BadgeSample2Component,
        data: { displayName: "Badge Sample 2", parentName: "Badge" },
        path: "badge-sample-2"
    },
    {
        component: BadgeSample3Component,
        data: { displayName: "Badge Sample 3", parentName: "Badge" },
        path: "badge-sample-3"
    },
    {
        component: CardComponent,
        data: { displayName: "Card Overview", parentName: "Card" },
        path: "card"
    },
    {
        component: CalendarSample1Component,
        data: { displayName: "Calendar Sample 1", parentName: "Calendar" },
        path: "calendar-sample-1"
    },
    {
        component: CalendarSample2Component,
        data: { displayName: "Calendar Sample 2", parentName: "Calendar" },
        path: "calendar-sample-2"
    },
    {
        component: CalendarSample3Component,
        data: { displayName: "Calendar Sample 3", parentName: "Calendar" },
        path: "calendar-sample-3"
    },
    {
        component: CalendarSample4Component,
        data: { displayName: "Calendar Sample 4", parentName: "Calendar" },
        path: "calendar-sample-4"
    },
    {
        component: CalendarSample5Component,
        data: { displayName: "Calendar Sample 5", parentName: "Calendar" },
        path: "calendar-sample-5"
    },
    {
        component: CalendarComponent,        
        path: "calendar"
    },
    {
        component: CarouselSample1Component,
        data: { displayName: "Carousel Sample 1", parentName: "Carousel" },
        path: "carousel-sample-1"
    },
    {
        component: CarouselSample2Component,
        data: { displayName: "Carousel Sample 2", parentName: "Carousel" },
        path: "carousel-sample-2"
    },
    {
        component: CarouselSample3Component,
        data: { displayName: "Carousel Sample 3", parentName: "Carousel" },
        path: "carousel-sample-3"
    },
    {
        component: CarouselSample4Component,
        path: "carousel-sample-4"
    },
    {
        component: CarouselComponent,
        data: { displayName: "Carousel Sample 4", parentName: "Carousel" },
        path: "carousel"
    },
    {
        component: CarouselDetailsViewComponent,        
        path: "details/:index"
    },
    {
        component: CheckboxSample1Component,
        data: { displayName: "Checkbox Sample 1", parentName: "Checkbox" },
        path: "checkbox-sample-1"
    },
    {
        component: CheckboxSample2Component,
        data: { displayName: "Checkbox Sample 2", parentName: "Checkbox" },
        path: "checkbox-sample-2"
    },
    {
        component: CircularProgressbarComponent,
        data: { displayName: "Circular Progressbar Sample", parentName: "Circular Progressbar" },
        path: "circular-progressbar"
    },
    {
        component: ComboFeatures,
        data: { displayName: "Combo Features", parentName: "Combo" },
        path: "combo-features"
    },
    {
        component: CascadingCombos,
        data: { displayName: "Cascading Combos", parentName: "Combo" },
        path: "cascading-combos"
    },
    {
        component: CsvExportComponent,
        data: { displayName: "CSV Export Sample 1", parentName: "CSV Export" },
        path: "export-csv"
    },
    {
        component: CsvExportSample1Component,
        data: { displayName: "CSV Export Sample 2", parentName: "CSV Export" },
        path: "export-csv-sample-1"
    },
    {
        component: DatepickerSample1Component,
        data: { displayName: "Datepicker Sample 1", parentName: "Datepicker" },
        path: "datepicker-sample-1"
    },
    {
        component: DatepickerSample2Component,
        data: { displayName: "Datepicker Sample 2", parentName: "Datepicker" },
        path: "datepicker-sample-2"
    },
    {
        component: DatepickerSample3Component,
        data: { displayName: "Datepicker Sample 3", parentName: "Datepicker" },
        path: "datepicker-sample-3"
    },
    {
        component: DatepickerSample4Component,
        data: { displayName: "Datepicker Sample 4", parentName: "Datepicker" },
        path: "datepicker-sample-4"
    },
    {
        component: DatepickerSample5Component,
        data: { displayName: "Datepicker Sample 5", parentName: "Datepicker" },
        path: "datepicker-sample-5"
    },
    {
        component: DialogSample1Component,
        data: { displayName: "Dialog Sample 1", parentName: "Dialog" },
        path: "dialog-sample-1"
    },
    {
        component: DialogSample2Component,
        data: { displayName: "Dialog Sample 2", parentName: "Dialog" },
        path: "dialog-sample-2"
    },
    {
        component: DialogSample3Component,
        data: { displayName: "Dialog Sample 3", parentName: "Dialog" },
        path: "dialog-sample-3"
    },
    {
        component: DialogComponent,
        data: { displayName: "Dialog Sample 4", parentName: "Dialog" },
        path: "dialog"
    },
    {
        component: DropDownSample1Component,
        data: { displayName: "Drop Down Sample 1", parentName: "Drop Down" },
        path: "dropdown-sample-1"
    },
    {
        component: DropDownSample2Component,
        data: { displayName: "Drop Down Sample 2", parentName: "Drop Down" },
        path: "dropdown-sample-2"
    },
    {
        component: DropDownSample3Component,
        data: { displayName: "Drop Down Sample 3", parentName: "Drop Down" },
        path: "dropdown-sample-3"
    },
    {
        component: ExcelExportComponent,
        data: { displayName: "Excel Export Sample 1", parentName: "Excel Export" },
        path: "export-excel"
    },
    {
        component: ExcelExportSample1Component,
        data: { displayName: "Excel Export Sample 2", parentName: "Excel Export" },
        path: "export-excel-sample-1"
    },
    {
        component: LayoutComponent,
        data: { displayName: "Layout Sample 1", parentName: "Layout" },
        path: "layout"
    },
    {
        component: LinearProgressbarComponent,
        data: { displayName: "Linear Progressbar Sample 1", parentName: "Linear Progressbar" },
        path: "linear-progressbar"
    },
    {
        component: LinearProgressbarSample1Component,
        data: { displayName: "Linear Progressbar Sample 2", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-1"
    },
    {
        component: LinearProgressbarSample2Component,
        data: { displayName: "Linear Progressbar Sample 3", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-2"
    },
    {
        component: ListComponent,
        data: { displayName: "List Sample 1", parentName: "List" },
        path: "list"
    },
    {
        component: ListSample1Component,
        data: { displayName: "List Sample 2", parentName: "List" },
        path: "list-sample-1"
    },
    {
        component: ListSample2Component,
        data: { displayName: "List Sample 3", parentName: "List" },
        path: "list-sample-2"
    },
    {
        component: ListSample3Component,
        data: { displayName: "List Sample 4", parentName: "List" },
        path: "list-sample-3"
    },
    {
        component: ListSample4Component,
        data: { displayName: "List Sample 5", parentName: "List" },
        path: "list-sample-4"
    },
    {
        component: ListSample5Component,
        data: { displayName: "List Sample 6", parentName: "List" },
        path: "list-sample-5"
    },
    {
        component: ListSample6Component,
        data: { displayName: "List Sample 7", parentName: "List" },
        path: "list-sample-6"
    },
    {
        component: NavdrawerComponent,        
        path: "navigation-drawer"
    },
    {
        component: NavDrawerSimpleComponent,        
        path: "navigation-drawer-simple"
    },
    {
        component: NavDrawerPinComponent,        
        path: "navigation-drawer-pin"
    },
    {
        component: NavDrawerMiniComponent,        
        path: "navigation-drawer-mini"
    },
    {
        component: GridComponent,
        data: { displayName: "Grid Basic Features", parentName: "Grid" },
        path: "grid"
    },
    {
        component: GridCRMComponent,
        data: { displayName: "Grid CRM", parentName: "Grid" },
        path: "grid-crm"
    },
    {
        component: GridSample3Component,
        data: { displayName: "Grid Summary", parentName: "Grid" },
        path: "grid-summary"
    },
    {
        component: GridGroupBySampleComponent,
        data: { displayName: "Grid GroupBy", parentName: "Grid" },
        path: "grid-groupby"
    },
    {
        component: GridEditingSampleComponent,
        data: { displayName: "Grid Editing", parentName: "Grid" },
        path: "grid-editing"
    },
    {
        component: GridDisplayDensitySampleComponent,
        data: { displayName: "Grid Display Density", parentName: "Grid" },
        path: "grid-displayDensity"
    },
    {
        component: SnackbarSample1Component,
        data: { displayName: "Snackbar Sample 1", parentName: "Snackbar" },
        path: "snackbar-sample-1"
    },
    {
        component: SnackbarSample2Component,
        data: { displayName: "Snackbar Sample 2", parentName: "Snackbar" },
        path: "snackbar-sample-2"
    },
    {
        component: SnackbarSample3Component,
        data: { displayName: "Snackbar Sample 3", parentName: "Snackbar" },
        path: "snackbar-sample-3"
    },
    {
        component: SnackbarSample4Component,
        data: { displayName: "Snackbar Sample 4", parentName: "Snackbar" },
        path: "snackbar-sample-4"
    },
    {
        component: SwitchSample1Component,
        data: { displayName: "Switch Sample 1", parentName: "Switch" },
        path: "switch-sample-1"
    },
    {
        component: SwitchSample2Component,
        data: { displayName: "Switch Sample 2", parentName: "Switch" },
        path: "switch-sample-2"
    },
    {
        component: RadioSample1Component,
        data: { displayName: "Radio Sample 1", parentName: "Radio" },
        path: "radio-sample-1"
    },
    {
        component: RadioSample2Component,
        data: { displayName: "Radio Sample 2", parentName: "Radio" },
        path: "radio-sample-2"
    },
    {
        component: RadioGroupSampleComponent,
        data: { displayName: "Radio Group", parentName: "Radio" },
        path: "radio-group-sample"
    },
    {
        component: ToastSample1Component,
        data: { displayName: "Toast Sample 1", parentName: "Toast" },
        path: "toast-sample-1"
    },
    {
        component: ToastSample2Component,
        data: { displayName: "Toast Sample 2", parentName: "Toast" },
        path: "toast-sample-2"
    },
    {
        component: ToastSample3Component,
        data: { displayName: "Toast Sample 3", parentName: "Toast" },
        path: "toast-sample-3"
    },
    {
        component: ToastSample4Component,
        data: { displayName: "Toast Sample 4", parentName: "Toast" },
        path: "toast-sample-4"
    },
    {
        component: ToastSample5Component,
        data: { displayName: "Toast Sample 5", parentName: "Toast" },
        path: "toast-sample-5"
    },
    {
        component: SliderSample1Component,
        data: { displayName: "Slider Sample 1", parentName: "Slider" },
        path: "slider-sample-1"
    },
    {
        component: SliderSample2Component,
        data: { displayName: "Slider Sample 2", parentName: "Slider" },
        path: "slider-sample-2"
    },
    {
        component: SliderSample3Component,
        data: { displayName: "Slider Sample 3", parentName: "Slider" },
        path: "slider-sample-3"
    },
    {
        component: SliderSample4Component,
        data: { displayName: "Slider Sample 4", parentName: "Slider" },
        path: "slider-sample-4"
    },
    {
        component: SliderSample5Component,
        data: { displayName: "Slider Sample 5", parentName: "Slider" },
        path: "slider-sample-5"
    },
    {
        component: TabbarComponent,
        data: { displayName: "Tabbar Sample 1", parentName: "Tabbar" },
        path: "tabbar"
    },
    {
        component: TabbarSample1Component,
        data: { displayName: "Tabbar Sample 2", parentName: "Tabbar" },
        path: "tabbar-sample-1"
    },
    {
        component: TabbarSample2Component,
        data: { displayName: "Tabbar Sample 3", parentName: "Tabbar" },
        path: "tabbar-sample-2"
    },
    {
        component: TabsSample1Component,
        data: { displayName: "Tabs Sample 1", parentName: "Tabs" },
        path: "tabs-sample-1"
    },
    {
        component: TabsSample2Component,
        data: { displayName: "Tabs Sample 2", parentName: "Tabs" },
        path: "tabs-sample-2"
    },
    {
        component: TabsSample3Component,
        data: { displayName: "Tabs Sample 3", parentName: "Tabs" },
        path: "tabs-sample-3"
    },
    {
        component: TimePickerSample1Component,
        data: { displayName: "Timepicker Sample 1", parentName: "Timepicker" },
        path: "timepicker-sample-1"
    },
    {
        component: TimePickerSample2Component,
        data: { displayName: "Timepicker Sample 2", parentName: "Timepicker" },
        path: "timepicker-sample-2"
    },
    {
        component: TimePickerSample3Component,
        data: { displayName: "Timepicker Sample 3", parentName: "Timepicker" },
        path: "timepicker-sample-3"
    },
    {
        component: TimePickerSample4Component,
        data: { displayName: "Timepicker Sample 4", parentName: "Timepicker" },
        path: "timepicker-sample-4"
    },
    {
        component: BulletGraphAnimationComponent,
        data: { displayName: "Bullet Graph Animation", parentName: "Bullet Graph" },
        path: "bullet-graph-animation"
    },
    {
        component: BulletGraphLabelsComponent,
        data: { displayName: "Bullet Graph Labels", parentName: "Bullet Graph" },
        path: "bullet-graph-labels"
    },
    {
        component: BulletGraphBackgroundComponent,
        data: { displayName: "Bullet Graph Background", parentName: "Bullet Graph" },
        path: "bullet-graph-background"
    },
    {
        component: BulletGraphRangesComponent,
        data: { displayName: "Bullet Graph Ranges", parentName: "Bullet Graph" },
        path: "bullet-graph-ranges"
    },
    {
        component: BulletGraphScaleComponent,
        data: { displayName: "Bullet Graph Scale", parentName: "Bullet Graph" },
        path: "bullet-graph-scale"
    },
    {
        component: BulletGraphTickmarksComponent,
        data: { displayName: "Bullet Graph Tickmarks", parentName: "Bullet Graph" },
        path: "bullet-graph-tickmarks"
    },
    {
        component: BulletGraphMeasuresComponent,
        data: { displayName: "Bullet Graph Measures", parentName: "Bullet Graph" },
        path: "bullet-graph-measures"
    },
    {
        component: RadialGaugeAnimationComponent,
        data: { displayName: "Radial Gauge Animation", parentName: "Radial Gauge" },
        path: "radial-gauge-animation"
    },
    {
        component: RadialGaugeLabelsComponent,
        data: { displayName: "Radial Gauge Labels", parentName: "Radial Gauge" },
        path: "radial-gauge-labels"
    },
    {
        component: RadialGaugeNeedleComponent,
        data: { displayName: "Radial Gauge Needle", parentName: "Radial Gauge" },
        path: "radial-gauge-needle"
    },
    {
        component: RadialGaugeScaleComponent,
        data: { displayName: "Radial Gauge Scale", parentName: "Radial Gauge" },
        path: "radial-gauge-scale"
    },
    {
        component: RadialGaugeTickmarksComponent,
        data: { displayName: "Radial Gauge Tickmarks", parentName: "Radial Gauge" },
        path: "radial-gauge-tickmarks"
    },
    {
        component: RadialGaugeRangesComponent,
        data: { displayName: "Radial Gauge Ranges", parentName: "Radial Gauge" },
        path: "radial-gauge-ranges"
    },
    {
        component: RadialGaugeBackingComponent,
        data: { displayName: "Radial Gauge Backing", parentName: "Radial Gauge" },
        path: "radial-gauge-backing"
    },
    {
        component: LinearGaugeAnimationComponent,
        data: { displayName: "Linear Gauge Animation", parentName: "Linear Gauge" },
        path: "linear-gauge-animation"
    },
    {
        component: LinearGaugeNeedleComponent,
        data: { displayName: "Linear Gauge Needle", parentName: "Linear Gauge" },
        path: "linear-gauge-needle"
    },
    {
        component: LinearGaugeBackingComponent,
        data: { displayName: "Linear Gauge Backing", parentName: "Linear Gauge" },
        path: "linear-gauge-backing"
    },
    {
        component: LinearGaugeLabelsComponent,
        data: { displayName: "Linear Gauge Labels", parentName: "Linear Gauge" },
        path: "linear-gauge-labels"
    },
    {
        component: LinearGaugeScaleComponent,
        data: { displayName: "Linear Gauge Scale", parentName: "Linear Gauge" },
        path: "linear-gauge-scale"
    },
    {
        component: LinearGaugeTickmarksComponent,
        data: { displayName: "Linear Gauge Tickmarks", parentName: "Linear Gauge" },
        path: "linear-gauge-tickmarks"
    },
    {
        component: LinearGaugeRangesComponent,
        data: { displayName: "Linear Gauge Ranges", parentName: "Linear Gauge" },
        path: "linear-gauge-ranges"
    },
    {
        component: NavbarComponent,
        data: { displayName: "Navbar Sample 1", parentName: "Navbar" },
        path: "navbar"
    },
    {
        component: NavbarSample1Component,
        data: { displayName: "Navbar Sample 2", parentName: "Navbar" },
        path: "navbar-sample-1"
    },
    {
        component: CardSample1Component,
        data: { displayName: "Card Sample 1", parentName: "Card" },
        path: "card-sample-1"
    },
    {
        component: CardSample2Component,
        data: { displayName: "Card Sample 2", parentName: "Card" },
        path: "card-sample-2"
    },
    {
        component: CardSample3Component,
        data: { displayName: "Card Sample 3", parentName: "Card" },
        path: "card-sample-3"
    },
    {
        component: IconSample1Component,
        data: { displayName: "Icon Sample 1", parentName: "Icon" },
        path: "icon-sample-1"
    },
    {
        component: IconSample2Component,
        path: "icon-sample2"
    },
    {
        component: ButtonsSample1Component,
        data: { displayName: "Buttons Sample 1", parentName: "Buttons" },
        path: "buttons-sample-1"
    },
    {
        component: ButtonsSample2Component,
        data: { displayName: "Buttons Sample 2", parentName: "Buttons" },
        path: "buttons-sample-2"
    },
    {
        component: ButtonsSample3Component,
        data: { displayName: "Buttons Sample 3", parentName: "Buttons" },
        path: "buttons-sample-3"
    },
    {
        component: ButtonsSample4Component,
        data: { displayName: "Buttons Sample 4", parentName: "Buttons" },
        path: "buttons-sample-4"
    },
    {
        component: ButtonsSample5Component,
        data: { displayName: "Buttons Sample 5", parentName: "Buttons" },
        path: "buttons-sample-5"
    },
    {
        component: ButtonsSample6Component,
        data: { displayName: "Buttons Sample 6", parentName: "Buttons" },
        path: "buttons-sample-6"
    },
    {
        component: ButtonsSample7Component,
        data: { displayName: "Buttons Sample 7", parentName: "Buttons" },
        path: "buttons-sample-7"
    },
    {
        component: OverlaySampleMain1Component,
        data: { displayName: "Overlay Main Sample 1", parentName: "Overlay" },
        path: "overlay-sample-main-1"
    },
    {
        component: OverlaySampleMain2Component,
        data: { displayName: "Overlay Main Sample 2", parentName: "Overlay" },
        path: "overlay-sample-main-2"
    },
    {
        component: OverlaySampleMain3Component,
        data: { displayName: "Overlay Main Sample 3", parentName: "Overlay" },
        path: "overlay-sample-main-3"
    },
    {
        component: OverlayPositionSample1Component,
        data: { displayName: "Overlay Position Sample 1", parentName: "Overlay" },
        path: "overlay-position-sample-1"
    },
    {
        component: OverlayPositionSample2Component,
        data: { displayName: "Overlay Position Sample 2", parentName: "Overlay" },
        path: "overlay-position-sample-2"
    },
    {
        component: OverlayScrollSample1Component,
        data: { displayName: "Overlay Scroll Sample 1", parentName: "Overlay" },
        path: "overlay-scroll-sample-1"
    },
    {
        component: OverlayScrollSample2Component,
        data: { displayName: "Overlay Scroll Sample 2", parentName: "Overlay" },
        path: "overlay-scroll-sample-2"
    },
    {
        component: ToggleComponent,
        data: { displayName: "Toggle Sample 1", parentName: "Toggle" },
        path: "toggle"
    },
    {
        component: ToggleSample1Component,
        data: { displayName: "Toggle Sample 2", parentName: "Toggle" },
        path: "toggle-sample-1"
    },
    {
        component: ToggleSample2Component,
        data: { displayName: "Toggle Sample 3", parentName: "Toggle" },
        path: "toggle-sample-2"
    },
    {
        component: ToggleSample3Component,
        data: { displayName: "Toggle Sample 4", parentName: "Toggle" },
        path: "toggle-sample-3"
    },
    {
        component: FilteringSampleComponent,
        data: { displayName: "Grid Filtering", parentName: "Grid" },
        path: "grid-filtering-sample"
    },
    {
        component: PagingSampleComponent,
        data: { displayName: "Grid Paging", parentName: "Grid" },
        path: "grid-paging-sample"
    },
    {
        component: ResizingSampleComponent,
        data: { displayName: "Grid Resizing", parentName: "Grid" },
        path: "grid-resizing-sample"
    },
    {
        component: RippleSample1Component,
        data: { displayName: "Ripple Sample 1", parentName: "Ripple" },
        path: "ripple-sample-1"
    },
    {
        component: RippleSample2Component,
        data: { displayName: "Ripple Sample 2", parentName: "Ripple" },
        path: "ripple-sample-2"
    },
    {
        component: RippleSample3Component,
        data: { displayName: "Ripple Sample 3", parentName: "Ripple" },
        path: "ripple-sample-3"
    },
    {
        component: RippleSample4Component,
        data: { displayName: "Ripple Sample 4", parentName: "Ripple" },
        path: "ripple-sample-4"
    },
    {
        component: RippleSample5Component,
        data: { displayName: "Ripple Sample 5", parentName: "Ripple" },
        path: "ripple-sample-5"
    },
    {
        component: RippleSample6Component,
        data: { displayName: "Ripple Sample 6", parentName: "Ripple" },
        path: "ripple-sample-6"
    },
    {
        component: IgxForComponent,
        data: { displayName: "For Sample 1", parentName: "For" },
        path: "igx-for-sample-1"
    },
    {
        component: FinancialSampleComponent,
        data: { displayName: "Grid Financial Sample", parentName: "Grid" },
        path: "grid-sample-2"
    },
    {
        component: PinningSampleComponent,
        data: { displayName: "Grid Pinning", parentName: "Grid" },
        path: "grid-sample-pinning"
    },
    {
        component: GridRemoteVirtualizationSampleComponent,
        data: { displayName: "Grid Remote Virtualization", parentName: "Grid" },
        path: "grid-sample-4"
    },
    {
        component: RemoteFilteringSampleComponent,
        data: { displayName: "Grid Remote Filtering", parentName: "Grid" },
        path: "grid-remote-filtering"
    },
    {
        component: GridSelectionSampleComponent,
        data: { displayName: "Grid Selection", parentName: "Grid" },
        path: "grid-selection"
    },
    {
        component: GridSearchSampleComponent,
        data: { displayName: "Grid Search", parentName: "Grid" },
        path: "grid-search-sample"
    },
    {
        component: GridColumnHidingSampleComponent,
        data: { displayName: "Grid Column Hiding", parentName: "Grid" },
        path: "grid-column-hiding-sample"
    },
    {
        component: GridColumnHidingToolbarSampleComponent,
        data: { displayName: "Grid Column Hiding with Toolbar", parentName: "Grid" },
        path: "grid-column-hiding-toolbar-sample"
    },
    {
        component: ButtonGroupSample1Component,
        data: { displayName: "Button Group Sample 1", parentName: "Button Group" },
        path: "button-group-sample-1"
    },
    {
        component: ButtonGroupSample2Component,
        data: { displayName: "Button Group Sample 2", parentName: "Button Group" },
        path: "button-group-sample-2"
    },
    {
        component: ButtonGroupSample3Component,
        data: { displayName: "Button Group Sample 3", parentName: "Button Group" },
        path: "button-group-sample-3"
    },
    {
        component: MaskSample1Component,
        data: { displayName: "Mask Sample 1", parentName: "Mask" },
        path: "mask-sample-1"
    },
    {
        component: MaskSample2Component,
        data: { displayName: "Mask Sample 2", parentName: "Mask" },
        path: "mask-sample-2"
    },
    {
        component: MaskSample3Component,
        data: { displayName: "Mask Sample 3", parentName: "Mask" },
        path: "mask-sample-3"
    },
    {
        component: InputGroupSample1Component,
        data: { displayName: "Input Group Sample 1", parentName: "Input Group" },
        path: "input-group-sample-1"
    },
    {
        component: InputGroupSample2Component,
        data: { displayName: "Input Group Sample 2", parentName: "Input Group" },
        path: "input-group-sample-2"
    },
    {
        component: InputGroupSample3Component,
        data: { displayName: "Input Group Sample 3", parentName: "Input Group" },
        path: "input-group-sample-3"
    },
    {
        component: InputGroupSample4Component,
        data: { displayName: "Input Group Sample 4", parentName: "Input Group" },
        path: "input-group-sample-4"
    },
    {
        component: InputGroupSample5Component,
        data: { displayName: "Input Group Sample 5", parentName: "Input Group" },
        path: "input-group-sample-5"
    },
    {
        component: InputGroupSample6Component,
        data: { displayName: "Input Group Sample 6", parentName: "Input Group" },
        path: "input-group-sample-6"
    },
    {
        component: ReactiveFormsSampleComponent,
        data: { displayName: "Reactive Forms Sample 1", parentName: "Reactive Forms" },
        path: "reactive-forms"
    },
    {
        component: CategoryChartOverviewComponent,
        data: { displayName: "Category Chart Overview", parentName: "Category Chart" },
        path: "category-chart-overview-sample"
    },
    {
        component: CategoryChartCustomTooltipsComponent,
        data: { displayName: "Category Chart Custom Tooltips", parentName: "Category Chart" },
        path: "category-chart-custom-tooltips-sample"
    },
    {
        component: CategoryChartHighVolumeComponent,
        data: { displayName: "Category Chart High Volume", parentName: "Category Chart" },
        path: "category-chart-high-volume-sample"
    },
    {
        component: FinancialChartOverviewComponent,
        data: { displayName: "Financial Chart Overview", parentName: "Financial Chart" },
        path: "financial-chart-overview-sample"
    },
    {
        component: CategoryChartHighFrequencyComponent,
        data: { displayName: "Category Chart High Frequency", parentName: "Category Chart" },
        path: "category-chart-high-frequency-sample"
    },
    {
        component: CategoryChartAxisOptionsComponent,
        data: { displayName: "Category Chart Axis Options", parentName: "Category Chart" },
        path: "category-chart-axis-options-sample"
    },
    {
        component: CategoryChartConfigOptionsComponent,
        data: { displayName: "Category Chart Configuring Options", parentName: "Category Chart" },
        path: "category-chart-config-options-sample"
    },
    {
        component: FinancialChartPerformanceComponent,
        data: { displayName: "Financial Chart Performance", parentName: "Financial Chart" },
        path: "financial-chart-performance"
    },
    {
        component: FinancialChartTitlesComponent,
        data: { displayName: "Financial Chart Titles", parentName: "Financial Chart" },
        path: "financial-chart-titles"
    },
    {
        component: FinancialChartPanesComponent,
        data: { displayName: "Financial Chart Panes", parentName: "Financial Chart" },
        path: "financial-chart-panes"
    },
    {
        component: FinancialChartMultipleDataComponent,
        data: { displayName: "Financial Chart Multiple Data", parentName: "Financial Chart" },
        path: "financial-chart-multiple-data"
    },
    {
        component: FinancialChartCustomTooltipsComponent,
        data: { displayName: "Financial Chart Custom Tooltips", parentName: "Financial Chart" },
        path: "financial-chart-custom-tooltips"
    },
    {
        component: FinancialChartIndicatorTypesComponent,
        data: { displayName: "Financial Chart Indicator Types", parentName: "Financial Chart" },
        path: "financial-chart-indicator-types"
    },
    {
        component: FinancialChartVolumeTypeComponent,
        data: { displayName: "Financial Chart Volume Types", parentName: "Financial Chart" },
        path: "financial-chart-volume-type"
    },
    {
        component: FinancialChartCustomIndicatorsComponent,
        data: { displayName: "Financial Chart Custom Indicators", parentName: "Financial Chart" },
        path: "financial-chart-custom-indicators"
    },
    {
        component: FinancialChartHighVolumeComponent,
        data: { displayName: "Financial Chart High Volume", parentName: "Financial Chart" },
        path: "financial-chart-high-volume"
    },
    {
        component: FinancialChartHighFrequencyComponent,
        data: { displayName: "Financial Chart High Frequency", parentName: "Financial Chart" },
        path: "financial-chart-high-frequency"
    },
    {
        component: FinancialChartAxisTypesComponent,
        data: { displayName: "Financial Chart Axis Types", parentName: "Financial Chart" },
        path: "financial-chart-axis-types"
    },
    {
        component: FinancialChartTrendlinesComponent,
        data: { displayName: "Financial Chart Trendlines", parentName: "Financial Chart" },
        path: "financial-chart-trendlines"
    },
    {
        component: SortingSampleComponent,
        data: { displayName: "Grid Sorting", parentName: "Grid" },
        path: "grid-sorting-sample"
    },
    {
        component: ChipSampleComponent,
        data: { displayName: "Chip Overview", parentName: "Chip" },
        path: "chip-sample"
    },
    {
        component: GridToolbarSample1Component,
        data: { displayName: "Grid Toolbar Sample 1", parentName: "Grid" },
        path: "grid-toolbar-sample-1"
    },
    {
        component: GridToolbarSample2Component,
        data: { displayName: "Grid Toolbar Sample 2", parentName: "Grid" },
        path: "grid-toolbar-sample-2"
    },
    {
        component: GridToolbarSample3Component,
        data: { displayName: "Grid Toolbar Sample 3", parentName: "Grid" },
        path: "grid-toolbar-sample-3"
    },
    {
        component: GridMovingSampleComponent,
        data: { displayName: "Grid Column Moving", parentName: "Grid" },
        path: "grid-moving-sample"
    },
    {
        component: GridMultiColumnHeadersComponent,
        data: { displayName: "Grid Multi Column Headers", parentName: "Grid" },
        path: "multi-column-headers"
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
