import { HttpClientModule } from "@angular/common/http";
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
import { TreeGridFinJSComponent } from "../../src/app/tree-grid/tree-grid-finjs/tree-grid-finjs-sample.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
import { CardSampleModule } from "./layouts/card/card-sample-1/card-sample-1.module";
import {
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import {
    TreeGridRowEditSampleComponent
} from "./tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        GridCRMComponent,
        GridCustomFilteringComponent,
        GridComponent,
        FilteringSampleComponent,
        PagingSampleComponent,
        ResizingSampleComponent,
        FinancialSampleComponent,
        PinningSampleComponent,
        GridRemoteVirtualizationSampleComponent,
        GridSelectionSampleComponent,
        GridSample3Component,
        GridGroupBySampleComponent,
        GridGroupBySummarySampleComponent,
        SortingSampleComponent,
        GridContextmenuComponent,
        GridSearchSampleComponent,
        GridColumnHidingSampleComponent,
        GridColumnHidingToolbarSampleComponent,
        GridToolbarSample1Component,
        GridToolbarSample2Component,
        GridToolbarSample3Component,
        GridToolbarSample4Component,
        RemoteFilteringSampleComponent,
        GridMovingSampleComponent,
        GridMultiColumnHeadersComponent,
        GridPasteSampleComponent,
        PasteHandler,
        RemoteFilteringSampleComponent,
        GridEditingSampleComponent,
        RemotePagingGridSample,
        GridDisplayDensitySampleComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent,
        GridConditionalCellStyleComponent,
        FinJSDemoComponent,
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent,
        GridWithTransactionsComponent,
        GridBatchEditingSampleComponent,
        GridRowEditSampleComponent,
        TreeGridRowEditSampleComponent,
        TreeGridBatchEditingSampleComponent,
        GridRowEditSampleComponent,
        GridCustomFilteringComponent,
        TreeGridFinJSComponent
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
