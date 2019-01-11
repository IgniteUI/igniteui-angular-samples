import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxBannerModule,
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
    IgxDragDropModule,
    IgxDropDownModule,
    IgxExcelExporterService,
    IgxExpansionPanelModule,
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
    IgxTextHighlightModule,
    IgxTimePickerModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTooltipModule,
    IgxTreeGridModule
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
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CategoryChartPerformanceSamplesModule } from "./category-chart/category-chart-performance-samples.module";
import { CategoryChartSamplesModule } from "./category-chart/category-chart-samples.module";
import { ChipSampleComponent, EmailFilterPipe } from "./chip/chip.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";

import { DisplayDensityComponent } from "./display-density/display-density.component";
import { DropdownMenuComponent } from "./dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component } from "./dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { ExpansionPanelSample1Component } from "./expansion-panel/expansion-sample-1/expansion-sample-1.component";
import { ExpansionPanelSample2Component } from "./expansion-panel/expansion-sample-2/expansion-sample-2.component";
import { ExpansionPanelSample3Component } from "./expansion-panel/expansion-sample-3/expansion-sample-3.component";
import { ExpansionPanelSample4Component } from "./expansion-panel/expansion-sample-4/expansion-sample-4.component";
import { ExpansionPanelSample5Component } from "./expansion-panel/expansion-sample-5/expansion-sample-5.component";
import { ExpansionPanelSample6Component } from "./expansion-panel/expansion-sample-6/expansion-sample-6.component";
import { ExpansionPanelSample7Component } from "./expansion-panel/expansion-sample-7/expansion-sample-7.component";

import { DoughnutChartSamplesModule } from "./doughnut-chart/doughnut-chart-samples.module";
import { CsvExportSample1Component } from "./export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { CsvExportComponent } from "./export-csv/csv-export.component";
import { ExcelExportSample1Component } from "./export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { ExcelExportComponent } from "./export-excel/excel-export.component";
import { FinancialChartSamplesModule } from "./financial-chart/financial-chart-samples.module";
import { CheckboxSample1Component } from "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { RadioGroupSampleComponent } from "./form-elements/radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./form-elements/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./form-elements/radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./form-elements/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./form-elements/switch/switch-sample-2/switch-sample-2.component";
import { PieChartSamplesModule } from "./pie-chart/pie-chart-samples.module";

import { TreeGridFinJSComponent } from "../../src/app/tree-grid/tree-grid-finjs/tree-grid-finjs-sample.component";
import { GaugeSamplesModule } from "./gauges/gauge-samples.module";
import { GridBatchEditingSampleComponent } from "./grid/grid-batch-editing/grid-batch-editing-sample.component";
import { GridWithTransactionsComponent } from "./grid/grid-batch-editing/grid-transaction.component";
import { GridColumnHidingSampleComponent } from "./grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "./grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import {
    GridConditionalCellStyleComponent
} from "./grid/grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCRMComponent } from "./grid/grid-crm/grid-crm.component";
import { GridCustomFilteringComponent } from "./grid/grid-custom-filtering/grid-custom-filtering.component";
import {
    GridDisplayDensitySampleComponent
} from "./grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid/grid-editing-sample/grid-editing-sample.component";
import { FilteringSampleComponent } from "./grid/grid-filtering-sample/grid-filtering-sample.component";
import { FinJSDemoComponent } from "./grid/grid-finjs-demo/grid-finjs-demo.component";
import { GridGroupBySampleComponent } from "./grid/grid-groupby-sample/grid-groupby-sample.component";
import {
    GridGroupBySummarySampleComponent
} from "./grid/grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "./grid/grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid/grid-paste/grid-paste-sample.component";
import { PasteHandler } from "./grid/grid-paste/paste-handler.directive";
import { RemoteFilteringSampleComponent } from "./grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid/grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid/grid-resizing-sample/grid-resizing-sample.component";
import { GridRowEditSampleComponent } from "./grid/grid-row-editing-sample/grid-row-editing-sample.component";
import { FinancialSampleComponent } from "./grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid/grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid/grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid/grid-sample-selection/grid-selection.component";
import { GridSearchSampleComponent } from "./grid/grid-search-sample/grid-search-sample.component";
import { GridContextmenuComponent } from "./grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component";
import { SortingSampleComponent } from "./grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridComponent } from "./grid/grid.component";
import { GridMultiColumnHeadersComponent } from "./grid/multi-column-headers/multi-column-headers";
import { DataService } from "./grid/services/data.service";
import { HomeComponent } from "./home/home.component";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IconSample2Component } from "./icon/icon-sample2/icon-sample2.component";
import { SvgIconSampleComponent } from "./icon/svg-icon-sample/svg-icon-sample.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
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
import {
    LocalizationSample1Component
} from "./localization-samples/localization-sample-1/localization-sample-1.component";
import {
    LocalizationSample2Component
} from "./localization-samples/localization-sample-2/localization-sample-2.component";
import {
    LocalizationSample3Component
} from "./localization-samples/localization-sample-3/localization-sample-3.component";
import { MaskSample1Component } from "./mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "./mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "./mask/mask-sample-3/mask-sample-3.component";
import { DisplayFormatPipe, InputFormatPipe, MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
import { NavbarSample1Component } from "./navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarSample2Component } from "./navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";
import { ShadowsSampleComponent } from "./shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "./shadows/shadows-sample-2/shadows-sample-2.component";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "./tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample5Component } from "./tabs/tabs-sample-5/components/tabs-sample-5.component";
import {
    TextHighlightSample1Component
} from "./text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";
import {
    TextHighlightSample2Component
} from "./text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";
import { DarkThemeSampleComponent } from "./theming/dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "./theming/default-theme-sample/default-theme-sample.component";
import { ThemeChooserSampleComponent } from "./theming/theme-chooser/theme-chooser-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";

import { CardSampleModule } from "./card/card-sample-1/card-sample-1.module";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridRowEditSampleComponent
} from "./tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { MyDynamicCardComponent } from './interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component';
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        EmailFilterPipe,
        DisplayFormatPipe,
        InputFormatPipe,
        AppComponent,
        BadgeSample1Component,
        BadgeSample2Component,
        BadgeSample3Component,
        CardComponent,
        CardSample2Component,
        CardSample3Component,
        CheckboxSample1Component,
        CheckboxSample2Component,
        CircularProgressbarComponent,
        LinearProgressbarComponent,
        GridCRMComponent,
        GridCustomFilteringComponent,
        GridComponent,
        CarouselComponent,
        CarouselDetailsViewComponent,
        CarouselSample1Component,
        CarouselSample2Component,
        CarouselSample3Component,
        CarouselSample4Component,
        DropDownSample1Component,
        DropDownSample2Component,
        DropDownSample3Component,
        DropDownSample4Component,
        ExpansionPanelSample1Component,
        ExpansionPanelSample2Component,
        ExpansionPanelSample3Component,
        ExpansionPanelSample4Component,
        ExpansionPanelSample5Component,
        ExpansionPanelSample6Component,
        ExpansionPanelSample7Component,
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
        TabsSample4Component,
        TabsSample5Component,
        NavbarComponent,
        NavbarSample1Component,
        NavbarSample2Component,
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
        IconSample2Component,
        SvgIconSampleComponent,
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
        NavbarSample1Component,
        NavbarSample2Component,
        ButtonGroupSample1Component,
        ButtonGroupSample2Component,
        ButtonGroupSample3Component,
        MaskSample1Component,
        MaskSample2Component,
        MaskSample3Component,
        MaskSample4Component,
        MaskSample5Component,
        InputGroupSample1Component,
        InputGroupSample2Component,
        InputGroupSample3Component,
        InputGroupSample4Component,
        InputGroupSample5Component,
        InputGroupSample6Component,
        GridSample3Component,
        GridGroupBySampleComponent,
        GridGroupBySummarySampleComponent,
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
        GridToolbarSample4Component,
        RemoteFilteringSampleComponent,
        RadioGroupSampleComponent,
        GridMovingSampleComponent,
        GridMultiColumnHeadersComponent,
        GridPasteSampleComponent,
        PasteHandler,
        RemoteFilteringSampleComponent,
        ReactiveFormsSampleComponent,
        RadioGroupSampleComponent,
        GridEditingSampleComponent,
        RemotePagingGridSample,
        GridDisplayDensitySampleComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent,
        TextHighlightSample1Component,
        TextHighlightSample2Component,
        ThemeChooserSampleComponent,
        DefaultThemeSampleComponent,
        DarkThemeSampleComponent,
        GridConditionalCellStyleComponent,
        FinJSDemoComponent,
        SvgIconSampleComponent,
        ShadowsSampleComponent,
        ShadowsSample2Component,
        DropdownMenuComponent,
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent,
        DisplayDensityComponent,
        GridWithTransactionsComponent,
        GridBatchEditingSampleComponent,
        GridRowEditSampleComponent,
        TreeGridRowEditSampleComponent,
        TreeGridBatchEditingSampleComponent,
        GridRowEditSampleComponent,
        GridCustomFilteringComponent,
        TreeGridFinJSComponent,
        LocalizationSample1Component,
        LocalizationSample2Component,
        LocalizationSample3Component
    ],

    entryComponents: [MyDynamicCardComponent],
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
        IgxBannerModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxRippleModule,
        IgxIconModule,
        IgxDialogModule,
        IgxDatePickerModule,
        IgxExpansionPanelModule,
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
        PieChartSamplesModule.forRoot(),
        DoughnutChartSamplesModule.forRoot(),
        GaugeSamplesModule.forRoot(),
        IgxColumnHidingModule,
        IgxTextHighlightModule,
        IgxDragDropModule,
        IgxTooltipModule,
        IgxTreeGridModule,
        CardSampleModule
    ],
    providers: [
        DataService,
        IgxCsvExporterService,
        IgxExcelExporterService,
        IgxOverlayService
    ]
})
export class AppModule { }
