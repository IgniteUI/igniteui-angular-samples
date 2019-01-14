// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import "rxjs/add/operator/filter";
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
import { ChipSampleComponent } from "./chip/chip.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
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
import { GridBatchEditingSampleComponent } from "./grid/grid-batch-editing/grid-batch-editing-sample.component";
import { GridColumnHidingSampleComponent } from "./grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "./grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import {
    GridConditionalCellStyleComponent
} from "./grid/grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCRMComponent } from "./grid/grid-crm/grid-crm.component";
import {
    GridDisplayDensitySampleComponent
} from "./grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid/grid-editing-sample/grid-editing-sample.component";
import { FilteringSampleComponent } from "./grid/grid-filtering-sample/grid-filtering-sample.component";
import { FinJSDemoComponent } from "./grid/grid-finjs-demo/grid-finjs-demo.component";
import { GridGroupBySampleComponent } from "./grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupBySummarySampleComponent } from "./grid/grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "./grid/grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid/grid-paste/grid-paste-sample.component";
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
import { SortingSampleComponent } from "./grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridComponent } from "./grid/grid.component";
import { GridMultiColumnHeadersComponent } from "./grid/multi-column-headers/multi-column-headers";
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
import { LocalizationSample1Component } from "./localization-samples/localization-sample-1/localization-sample-1.component";
import { LocalizationSample2Component } from "./localization-samples/localization-sample-2/localization-sample-2.component";
import { LocalizationSample3Component } from "./localization-samples/localization-sample-3/localization-sample-3.component";
import { MaskSample1Component } from "./mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "./mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "./mask/mask-sample-3/mask-sample-3.component";
import { MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
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
import { TreeGridBatchEditingSampleComponent } from "./tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRowEditSampleComponent } from "./tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";

import { TreeGridFinJSComponent } from "../../src/app/tree-grid/tree-grid-finjs/tree-grid-finjs-sample.component";
import { GridCustomFilteringComponent } from "./grid/grid-custom-filtering/grid-custom-filtering.component";

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    {
        loadChildren: "app/interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "app/notifications/notifications.module#NotificationsModule",
        path: "notifications"
    },
    {
        loadChildren: "app/charts/charts.module#ChartsModule",
        path: "charts"
    },
    {
        loadChildren: "app/lists/lists.module#ListsModule",
        path: "lists"
    },{
        loadChildren: "app/theming/theming.module#ThemingModule",
        path: "theming"
    },
    {
        loadChildren: "app/scheduling/scheduling.module#SchedulingModule",
        path: "scheduling"
    },
    // excel library samples with lazy loading:
    // {
    //     data: { displayName: "Workbooks Operations", parentName: "Excel Library" },
    //     loadChildren: "app/excel-library/operations-on/workbooks.module#ExcelLibraryOperationsOnWorkbooksModule",
    //     path: "excel-library-operations-on-workbooks"
    // },
    {
        loadChildren: "app/excel-library/excel-library.module#ExcelLibraryModule",
        path: "excel-library"
    },
    {
        loadChildren: "app/gauges/gauges.module#GaugesModule",
        path: "gauges"
    },
    {
        loadChildren: "app/interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "app/notifications/notifications.module#NotificationsModule",
        path: "notifications"
    },
    {
        loadChildren: "app/menus/menus.module#MenusModule",
        path: "menus"
    },
    {
        loadChildren: "app/lists/lists.module#ListsModule",
        path: "lists"
    },
    {
        loadChildren: "app/scheduling/scheduling.module#SchedulingModule",
        path: "scheduling"
    },
    {
        component: AvatarSample1Component,
        data: { displayName: "Avatar with Initials", parentName: "Avatar" },
        path: "avatar-sample-1"
    },
    {
        component: AvatarSample2Component,
        data: { displayName: "Avatar with Image", parentName: "Avatar" },
        path: "avatar-sample-2"
    },
    {
        component: AvatarSample3Component,
        data: { displayName: "Multiple avatars", parentName: "Avatar" },
        path: "avatar-sample-3"
    },
    {
        component: BadgeSample1Component,
        data: { displayName: "Badge for List", parentName: "Badge" },
        path: "badge-sample-1"
    },
    {
        component: BadgeSample2Component,
        data: { displayName: "Badge for List with Avatars", parentName: "Badge" },
        path: "badge-sample-2"
    },
    {
        component: BadgeSample3Component,
        data: { displayName: "Badge for List Items", parentName: "Badge" },
        path: "badge-sample-3"
    },
    {
        component: CardComponent,
        data: { displayName: "Card Overview", parentName: "Card" },
        path: "card"
    },
    {
        component: CarouselSample1Component,
        data: { displayName: "Carousel items with text", parentName: "Carousel" },
        path: "carousel-sample-1"
    },
    {
        component: CarouselSample2Component,
        data: { displayName: "Slides with ngFor directive", parentName: "Carousel" },
        path: "carousel-sample-2"
    },
    {
        component: CarouselSample3Component,
        data: { displayName: "Carousel Navigation", parentName: "Carousel" },
        path: "carousel-sample-3"
    },
    {
        component: CarouselSample4Component,
        data: { displayName: "Carousel Router Navigation", parentName: "Carousel" },
        path: "carousel-sample-4"
    },
    {
        component: CarouselComponent,
        data: { displayName: "Carousel Image Viewer", parentName: "Carousel" },
        path: "carousel"
    },
    {
        component: CarouselDetailsViewComponent,
        path: "details/:index"
    },
    {
        component: CheckboxSample1Component,
        data: { displayName: "Simple Checkbox", parentName: "Checkbox" },
        path: "checkbox-sample-1"
    },
    {
        component: CheckboxSample2Component,
        data: { displayName: "Multiple Checkboxes", parentName: "Checkbox" },
        path: "checkbox-sample-2"
    },
    {
        component: CircularProgressbarComponent,
        data: { displayName: "Circular Progressbar Sample", parentName: "Circular Progressbar" },
        path: "circular-progressbar"
    },
    {
        component: CsvExportComponent,
        data: { displayName: "CSV Export Raw Data", parentName: "CSV Export" },
        path: "export-csv"
    },
    {
        component: CsvExportSample1Component,
        data: { displayName: "CSV Export Grid", parentName: "CSV Export" },
        path: "export-csv-sample-1"
    },
    {
        component: DropdownMenuComponent,
        data: { displayName: "Dropdown as Menu", parentName: "Dropdown" },
        path: "dropdown-menu"
    },
    {
        component: DropDownSample1Component,
        data: { displayName: "Simple Dropdown", parentName: "Dropdown" },
        path: "dropdown-sample-1"
    },
    {
        component: DropDownSample2Component,
        data: { displayName: "Dropdown Selection", parentName: "Dropdown" },
        path: "dropdown-sample-2"
    },
    {
        component: DropDownSample3Component,
        data: { displayName: "Dropdown Headers", parentName: "Dropdown" },
        path: "dropdown-sample-3"
    },
    {
        component: DropDownSample4Component,
        data: { displayName: "Input Dropdown Selection", parentName: "Dropdown" },
        path: "dropdown-sample-4"
    },
    {
        component: ExcelExportComponent,
        data: { displayName: "Excel Export Raw Data", parentName: "Excel Export" },
        path: "export-excel"
    },
    {
        component: ExcelExportSample1Component,
        data: { displayName: "Excel Export Grid", parentName: "Excel Export" },
        path: "export-excel-sample-1"
    },
    {
        component: ExpansionPanelSample1Component,
        data: { displayName: "Expansion Panel 1", parentName: "Expansion Panel" },
        path: "expansion-sample-1"
    },
    {
        component: ExpansionPanelSample2Component,
        data: { displayName: "Expansion Panel 2", parentName: "Expansion Panel" },
        path: "expansion-sample-2"
    },
    {
        component: ExpansionPanelSample3Component,
        data: { displayName: "Expansion Panel 3", parentName: "Expansion Panel" },
        path: "expansion-sample-3"
    },
    {
        component: ExpansionPanelSample4Component,
        data: { displayName: "Expansion Panel 4", parentName: "Expansion Panel" },
        path: "expansion-sample-4"
    },
    {
        component: ExpansionPanelSample5Component,
        data: { displayName: "Expansion Panel 5", parentName: "Expansion Panel" },
        path: "expansion-sample-5"
    },
    {
        component: ExpansionPanelSample6Component,
        data: { displayName: "Expansion Panel 6", parentName: "Expansion Panel" },
        path: "expansion-sample-6"
    },
    {
        component: ExpansionPanelSample7Component,
        data: { displayName: "Expansion Panel 7", parentName: "Expansion Panel" },
        path: "expansion-sample-7"
    },
    {
        component: LayoutComponent,
        data: { displayName: "Layout Overview", parentName: "Layout" },
        path: "layout"
    },
    {
        component: LinearProgressbarComponent,
        data: { displayName: "Simple Linear Progressbar", parentName: "Linear Progressbar" },
        path: "linear-progressbar"
    },
    {
        component: LinearProgressbarSample1Component,
        data: { displayName: "Linear Progressbar Types", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-1"
    },
    {
        component: LinearProgressbarSample2Component,
        data: { displayName: "Linear Progressbar Styling", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-2"
    },
    {
        component: LocalizationSample1Component,
        data: { displayName: "Localize one component", parentName: "Localization" },
        path: "localization-sample-1"
    },
    {
        component: LocalizationSample2Component,
        data: { displayName: "Localize All", parentName: "Localization" },
        path: "localization-sample-2"
    },
    {
        component: LocalizationSample3Component,
        data: { displayName: "Localize partially", parentName: "Localization" },
        path: "localization-sample-3"
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
        component: GridGroupBySummarySampleComponent,
        data: { displayName: "Grid GroupBy Summary", parentName: "Grid" },
        path: "grid-groupby-summary"
    },
    {
        component: GridEditingSampleComponent,
        data: { displayName: "Grid Editing", parentName: "Grid" },
        path: "grid-editing"
    },
    {
        component: GridRowEditSampleComponent,
        data: { displayName: "Grid Row Editing", parentName: "Grid" },
        path: "grid-row-editing"
    },
    {
        component: GridBatchEditingSampleComponent,
        data: { displayName: "Grid Batch Editing", parentName: "Grid" },
        path: "grid-batch-editing"
    },
    {
        component: GridDisplayDensitySampleComponent,
        data: { displayName: "Grid Display Density", parentName: "Grid" },
        path: "grid-displayDensity"
    },
    {
        component: GridConditionalCellStyleComponent,
        data: { displayName: "Grid Conditional Cell Styling", parentName: "Grid" },
        path: "grid-cell-styling"
    },
    {
        component: SwitchSample1Component,
        data: { displayName: "Switch Overview", parentName: "Switch" },
        path: "switch-sample-1"
    },
    {
        component: SwitchSample2Component,
        data: { displayName: "Multiple Switches", parentName: "Switch" },
        path: "switch-sample-2"
    },
    {
        component: RadioSample1Component,
        data: { displayName: "Simple Radio Buttons", parentName: "Radio" },
        path: "radio-sample-1"
    },
    {
        component: RadioSample2Component,
        data: { displayName: "Radio Button Binding", parentName: "Radio" },
        path: "radio-sample-2"
    },
    {
        component: RadioGroupSampleComponent,
        data: { displayName: "Radio Group", parentName: "Radio" },
        path: "radio-group-sample"
    },
    {
        component: TabbarComponent,
        data: { displayName: "Bottom Navigation Overview", parentName: "Bottom Navigation" },
        path: "tabbar"
    },
    {
        component: TabbarSample1Component,
        data: { displayName: "Bottom Navigation Simple Panels", parentName: "Bottom Navigation" },
        path: "tabbar-sample-1"
    },
    {
        component: TabbarSample2Component,
        data: { displayName: "Bottom Navigation Customizing Panels", parentName: "Bottom Navigation" },
        path: "tabbar-sample-2"
    },
    {
        component: TabsSample1Component,
        data: { displayName: "Tabs Overview", parentName: "Tabs" },
        path: "tabs-sample-1"
    },
    {
        component: TabsSample2Component,
        data: { displayName: "Tabs Types", parentName: "Tabs" },
        path: "tabs-sample-2"
    },
    {
        component: TabsSample3Component,
        data: { displayName: "Tabs Customizing", parentName: "Tabs" },
        path: "tabs-sample-3"
    },
    {
        component: TabsSample4Component,
        path: "tabs-sample-4"
    },
    {
        component: TabsSample5Component,
        path: "tabs-sample-5"
    },
    {
        component: CardSample1Component,
        data: { displayName: "Card with Header and Content", parentName: "Card" },
        path: "card-sample-1"
    },
    {
        component: CardSample2Component,
        data: { displayName: "Card with Avatar and Image", parentName: "Card" },
        path: "card-sample-2"
    },
    {
        component: CardSample3Component,
        data: { displayName: "Card Actions", parentName: "Card" },
        path: "card-sample-3"
    },
    {
        component: IconSample1Component,
        data: { displayName: "Simple Icons", parentName: "Icon" },
        path: "icon-sample-1"
    },
    {
        component: IconSample2Component,
        path: "icon-sample2"
    },
    {
        component: SvgIconSampleComponent,
        data: { displayName: "SVG Icons", parentName: "Icon" },
        path: "svg-icon-sample"
    },
    {
        component: ButtonsSample1Component,
        data: { displayName: "Flat Buttons Overview", parentName: "Buttons" },
        path: "buttons-sample-1"
    },
    {
        component: ButtonsSample2Component,
        data: { displayName: "Flat Button", parentName: "Buttons" },
        path: "buttons-sample-2"
    },
    {
        component: ButtonsSample3Component,
        data: { displayName: "Flat Button Ripple Color", parentName: "Buttons" },
        path: "buttons-sample-3"
    },
    {
        component: ButtonsSample4Component,
        data: { displayName: "Flat Button Ripple Color 2", parentName: "Buttons" },
        path: "buttons-sample-4"
    },
    {
        component: ButtonsSample5Component,
        data: { displayName: "Raised Button", parentName: "Buttons" },
        path: "buttons-sample-5"
    },
    {
        component: ButtonsSample6Component,
        data: { displayName: "Floating Action Button", parentName: "Buttons" },
        path: "buttons-sample-6"
    },
    {
        component: ButtonsSample7Component,
        data: { displayName: "Icon Button", parentName: "Buttons" },
        path: "buttons-sample-7"
    },
    {
        component: FilteringSampleComponent,
        data: { displayName: "Grid Filtering", parentName: "Grid" },
        path: "grid-filtering-sample"
    },
    {
        component: GridCustomFilteringComponent,
        data: { displayName: "Custom Filtering Conditions", parentName: "Grid" },
        path: "grid-filter-conditions"
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
        component: IgxForComponent,
        data: { displayName: "List with igxFor directive", parentName: "For" },
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
        data: { displayName: "Button Group Overview", parentName: "Button Group" },
        path: "button-group-sample-1"
    },
    {
        component: ButtonGroupSample2Component,
        data: { displayName: "Vertical Button Group", parentName: "Button Group" },
        path: "button-group-sample-2"
    },
    {
        component: ButtonGroupSample3Component,
        data: { displayName: "Horizontal Button Group", parentName: "Button Group" },
        path: "button-group-sample-3"
    },
    {
        component: MaskSample1Component,
        data: { displayName: "Mask Overview", parentName: "Mask" },
        path: "mask-sample-1"
    },
    {
        component: MaskSample2Component,
        data: { displayName: "Mask on Input", parentName: "Mask" },
        path: "mask-sample-2"
    },
    {
        component: MaskSample3Component,
        data: { displayName: "Mask binding to Formatted/Raw Value", parentName: "Mask" },
        path: "mask-sample-3"
    },
    {
        component: MaskSample4Component,
        data: { displayName: "Additional custom formatting", parentName: "Mask" },
        path: "mask-sample-4"
    },
    {
        component: MaskSample5Component,
        data: { displayName: "Placeholder", parentName: "Mask" },
        path: "mask-sample-5"
    },
    {
        component: InputGroupSample1Component,
        data: { displayName: "Simple Input Group", parentName: "Input Group" },
        path: "input-group-sample-1"
    },
    {
        component: InputGroupSample2Component,
        data: { displayName: "Input Required", parentName: "Input Group" },
        path: "input-group-sample-2"
    },
    {
        component: InputGroupSample3Component,
        data: { displayName: "Input Group Prefix and Sufix", parentName: "Input Group" },
        path: "input-group-sample-3"
    },
    {
        component: InputGroupSample4Component,
        data: { displayName: "Input Group Hint", parentName: "Input Group" },
        path: "input-group-sample-4"
    },
    {
        component: InputGroupSample5Component,
        data: { displayName: "Input Group Styling", parentName: "Input Group" },
        path: "input-group-sample-5"
    },
    {
        component: InputGroupSample6Component,
        data: { displayName: "Input Group Full Form", parentName: "Input Group" },
        path: "input-group-sample-6"
    },
    {
        component: ReactiveFormsSampleComponent,
        data: { displayName: "Reactive Forms Overview", parentName: "Reactive Forms" },
        path: "reactive-forms"
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
        data: { displayName: "Grid Toolbar Title", parentName: "Grid" },
        path: "grid-toolbar-sample-1"
    },
    {
        component: GridToolbarSample2Component,
        data: { displayName: "Grid Toolbar Options", parentName: "Grid" },
        path: "grid-toolbar-sample-2"
    },
    {
        component: GridToolbarSample3Component,
        data: { displayName: "Grid Toolbar Export", parentName: "Grid" },
        path: "grid-toolbar-sample-3"
    },
    {
        component: GridToolbarSample4Component,
        data: { displayName: "Grid Toolbar Custom Content", parentName: "Grid" },
        path: "grid-toolbar-sample-4"
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
    },
    {
        component: RemotePagingGridSample,
        data: { displayName: "Grid Remote Paging", parentName: "Grid" },
        path: "grid-remote-paging-sample"
    },
    {
        component: GridPasteSampleComponent,
        data: { displayName: "Grid Paste From Excel", parentName: "Grid" },
        path: "grid-paste"
    },
    {
        component: FinJSDemoComponent,
        data: { displayName: "Grid Finance demo sample", parentName: "Grid" },
        path: "finjs-sample"
    },
    {
        component: TextHighlightSample1Component,
        data: { displayName: "Search within a single container", parentName: "Text Highlight" },
        path: "text-highlight-1"
    },
    {
        component: TextHighlightSample2Component,
        data: { displayName: "Search within multiple containers", parentName: "Text Highlight" },
        path: "text-highlight-2"
    },
    {
        component: TreeGridBatchEditingSampleComponent,
        data: { displayName: "TreeGrid Batch Editing", parentName: "TreeGrid" },
        path: "treegrid-batchediting"
    },
    {
        component: TreeGridChilddatakeySampleComponent,
        data: { displayName: "TreeGrid ChildDataKey", parentName: "TreeGrid" },
        path: "treegrid-childdatakey"
    },
    {
        component: TreeGridPrimaryforeignkeySampleComponent,
        data: { displayName: "TreeGrid Primary/Foreign key", parentName: "TreeGrid" },
        path: "treegrid-primaryforeignkey"
    },
    {
        component: TreeGridRowEditSampleComponent,
        data: { displayName: "TreeGrid Row Editing", parentName: "TreeGrid" },
        path: "treegrid-row-edit"
    },
    {
        component: TreeGridFinJSComponent,
        data: { displayName: "TreeGrid Finance demo sample", parentName: "TreeGrid" },
        path: "treegrid-finjs-sample"
    }
];
export const appRoutes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: "/samples/home"
    },
    {
        children: samplesRoutes,
        component: DocsLayoutComponent,
        path: ""
    },
    {
        children: samplesRoutes,
        component: IndexComponent,
        path: "samples"
    }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {

    constructor(private router: Router) {
        router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.setOverflow(event.url);
            });
    }

    public setOverflow(url: string) {
        if (url.endsWith("finjs-sample")) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
}
