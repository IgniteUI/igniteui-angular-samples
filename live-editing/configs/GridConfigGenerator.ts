import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
// tslint:disable:max-line-length
import { IgxActionStripModule, IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule, IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule, IgxDividerModule, IgxDragDropModule, IgxExcelExporterService, IgxExpansionPanelModule, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxListModule, IgxOverlayService, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSnackbarModule, IgxSwitchModule, IgxTabsModule, IgxToastModule, IgxTooltipModule, IgxToggleModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "../../src/app/directives/prevent-scroll.directive";
import { GridColumnGroupSelectionComponent } from "../../src/app/grid/column-group-selection-sample/column-group-selection-sample.component";
import { GridColumnSelectionComponent } from "../../src/app/grid/column-selection-sample/column-selection-sample.component";
import { GridColumnSelectionStylesComponent } from "../../src/app/grid/column-selection-styles/column-selection-styles.component";
import { CustomGridPagingStyleSample } from "../../src/app/grid/custom-grid-paging-style/custom-grid-paging-style.component";
import { GridActionStripSampleComponent } from "../../src/app/grid/grid-action-strip/grid-action-strip-sample";
import { GridAdvancedFilteringSampleComponent } from "../../src/app/grid/grid-advanced-filtering-sample/grid-advanced-filtering-sample.component";
import { GridAdvancedFilteringStyleComponent } from "../../src/app/grid/grid-advanced-filtering-style/grid-advanced-filtering-style.component";
import { GridAllDataSummaryComponent } from "../../src/app/grid/grid-allData-summary/grid-allData-summary.component";
import { GridBatchEditingSampleComponent } from "../../src/app/grid/grid-batch-editing/grid-batch-editing-sample.component";
import { GridWithTransactionsComponent } from "../../src/app/grid/grid-batch-editing/grid-transaction.component";
import { RemotePagingBatchEditingComponent } from "../../src/app/grid/grid-batchEditing-remotePaging/batch-editing-remote-paging.component";
import { GridCellSelectionComponent } from "../../src/app/grid/grid-cellSelection-sample/grid-cellSelection.component";
import { GridClipboardSampleComponent } from "../../src/app/grid/grid-clipboard-operations-sample/grid-clipboard-operations-sample.component";
import { GridCollapsibleColumnGroupsComponent } from "../../src/app/grid/grid-collapsible-columnGroups/grid-collapsible-column-groups.component";
import { GridColumnHidingSampleComponent } from "../../src/app/grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import { GridColumnHidingToolbarSampleComponent } from "../../src/app/grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridColumnHidingToolbarStyleComponent } from "../../src/app/grid/grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component";
import { GridCompositeDataComponent } from "../../src/app/grid/grid-composite-data-binding/grid-composite-data.component";
import { GridConditionalCellStyle2Component } from "../../src/app/grid/grid-conditional-cell-style-2/grid-conditional-cell-style-2.component";
import { GridConditionalCellStyleComponent } from "../../src/app/grid/grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridConditionalRowSelectorsComponent } from "../../src/app/grid/grid-conditional-row-selectors/grid-conditional-row-selectors-sample.component";
import { ContextmenuComponent } from "../../src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component";
import { GridContextmenuSampleComponent } from "../../src/app/grid/grid-contextmenu-sample/grid-contextmenu-sample.component";
import { GridCustomFilteringComponent } from "../../src/app/grid/grid-custom-filtering/grid-custom-filtering.component";
import { GridCustomKBNavigationComponent } from "../../src/app/grid/grid-custom-kb-navigation/grid-custom-kb-navigation-sample.component";
import { CustomRemotePagingGridSample } from "../../src/app/grid/grid-custom-remote-paging-sample/custom-remote-paging-sample.component";
import { GridCustomSummariesSelection } from "../../src/app/grid/grid-custom-summaries-selection/grid-custom-summaries-selection.component";
import { GridDisplayDensitySampleComponent } from "../../src/app/grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingEventsComponent } from "../../src/app/grid/grid-editing-events/grid-editing-events.component";
import { GridEditingSampleComponent } from "../../src/app/grid/grid-editing-sample/grid-editing-sample.component";
import { GridEditingStyleSample } from "../../src/app/grid/grid-editing-style-sample/grid-editing-style-sample.component";
import {
    GridExcelStyleFilteringLoadOnDemandComponent
} from "../../src/app/grid/grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component";
import { RemoteValuesService } from "../../src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service";
import { ExcelStyleFilteringSample1Component } from "../../src/app/grid/grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component";
import { ExcelStyleFilteringSample2Component } from "../../src/app/grid/grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component";
import { ExcelStyleFilteringSample3Component } from "../../src/app/grid/grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component";
import { ExcelStyleFilteringStyleComponent } from "../../src/app/grid/grid-excel-style-filtering-style/grid-excel-style-filtering-style.component";
import { GridExternalAdvancedFilteringComponent } from "../../src/app/grid/grid-external-advanced-filtering/grid-external-advanced-filtering.component";
import { GridExternalExcelStyleFilteringComponent } from "../../src/app/grid/grid-external-excel-style-filtering/grid-external-excel-style-filtering.component";
import { GridExternalOutletComponent } from "../../src/app/grid/grid-external-outlet-sample/grid-external-outlet-sample.component";
import { FilteringSampleComponent } from "../../src/app/grid/grid-filtering-sample/grid-filtering-sample.component";
import { GridFilteringStyleComponent } from "../../src/app/grid/grid-filtering-style/grid-filtering-style.component";
import { FilteringTemplateSampleComponent } from "../../src/app/grid/grid-filtering-template-sample/grid-filtering-template-sample.component";
import { GridGroupByPagingSampleComponent } from "../../src/app/grid/grid-group-by-paging-sample/grid-group-by-paging-sample.component";
import { GridGroupBySampleComponent } from "../../src/app/grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupByCustomSampleComponent } from "../../src/app/grid/grid-groupby-custom-sample/grid-groupby-custom-sample.component";
import { GridGroupByStyling } from "../../src/app/grid/grid-groupby-styling/grid-groupby-styling.component";
import { GridGroupBySummarySampleComponent } from "../../src/app/grid/grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridGroupBySummaryStylingSampleComponent } from "../../src/app/grid/grid-groupby-summary-styling-sample/grid-groupby-summary-styling-sample.component";
import { GridKeyboardnavGuide } from "../../src/app/grid/grid-keyboardnav-guide-sample/grid-keyboardnav-sample.component";
import { GridMovingSampleComponent } from "../../src/app/grid/grid-moving-sample/grid-moving-sample.component";
import { GridMovingStyledSampleComponent } from "../../src/app/grid/grid-moving-styled-sample/grid-moving-styled-sample.component";
import { GridMRLCustomNavigationComponent } from "../../src/app/grid/grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";
import { GridMultiCellSelectionStyleComponent } from "../../src/app/grid/grid-multi-cell-selection-style/grid-multi-cell-selection-style.component";
import { GridMultiCellSelectionComponent } from "../../src/app/grid/grid-multi-cell-selection/grid-multi-cell-selection.component";
import { GridMultiRowLayoutConfigurationComponent } from "../../src/app/grid/grid-multi-row-layout-configuration/grid-multi-row-layout-configuration.component";
import { GridMultiRowLayoutStylingComponent } from "../../src/app/grid/grid-multi-row-layout-styling/grid-multi-row-layout-styling.component";
import { GridMultiRowLayoutComponent } from "../../src/app/grid/grid-multi-row-layout/grid-multi-row-layout.component";
import { GridMultipleRowDragComponent } from "../../src/app/grid/grid-multiple-row-drag/grid-multiple-row-drag.component";
import { GridNestedDataBindComponent } from "../../src/app/grid/grid-nested-data-binding/grid-nested-data-bind";
import { GridNestedDataBindAminoacidComponent } from "../../src/app/grid/grid-nested-data-binding-2/grid-nested-data-bind2";
import { GridPagerSampleComponent } from "../../src/app/grid/grid-pager-sample/grid-pager-sample.component";
import { PagingSampleComponent } from "../../src/app/grid/grid-paging-sample/grid-paging-sample.component";
import { RemoteFilteringSampleComponent } from "../../src/app/grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingDefaultTemplateComponent } from "../../src/app/grid/grid-remote-paging-defaultTemplate-sample/remote-paging-default-template.component";
import { RemotePagingGridSample } from "../../src/app/grid/grid-remote-paging-sample/remote-paging-sample.component";
import { GridResizeLineStylingSampleComponent } from "../../src/app/grid/grid-resize-line-styling-sample/grid-resize-line-styling-sample";
import { ResizingSampleComponent } from "../../src/app/grid/grid-resizing-sample/grid-resizing-sample.component";
import { GridDragBaseSampleComponent } from "../../src/app/grid/grid-row-drag-base/grid-row-drag-base.component";
import { GridDragToGridSampleComponent } from "../../src/app/grid/grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import { GridDragSampleComponent } from "../../src/app/grid/grid-row-drag/grid-row-drag.component";
import { PlanetComponent } from "../../src/app/grid/grid-row-drag/planet/planet.component";
import { GridRowEditSampleComponent } from "../../src/app/grid/grid-row-editing-sample/grid-row-editing-sample.component";
import { GridRowEditStyleComponent } from "../../src/app/grid/grid-row-editing-style/grid-row-editing-style.component";
import { GridPinningDragSampleComponent } from "../../src/app/grid/grid-row-pinning-drag/grid-row-pinning-drag.component";
import { GridRowPinningExtraColumnSampleComponent } from "../../src/app/grid/grid-row-pinning-extra-column/grid-row-pinning-extra-column.component";
import { GridRowPinningStylingSampleComponent } from "../../src/app/grid/grid-row-pinning-styling/grid-row-pinning-styling.component";
import { GridRowPinningSampleComponent } from "../../src/app/grid/grid-row-pinning/grid-row-pinning.component";
import { GridRowReorderComponent } from "../../src/app/grid/grid-row-reorder-sample/grid-row-reorder";
import { FinancialSampleComponent, LocalService } from "../../src/app/grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "../../src/app/grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "../../src/app/grid/grid-sample-4/grid-sample-4.component";
import { GridRemoteVirtualizationAddRowSampleComponent } from "../../src/app/grid/grid-sample-5/grid-sample-5.component";
import { RemoteService } from "../../src/app/grid/grid-sample-5/remote.service";
import { PinningStylingComponent } from "../../src/app/grid/grid-sample-pinning-styling/grid-pinning-styling.component";
import { PinningSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-pinning.component";
import { PinningToolbarSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-toolbar-pinning.component";
import { RightPinningSampleComponent } from "../../src/app/grid/grid-sample-right-pinning/grid-right-pinning.component";
import { GridSelectionTemplateExcelComponent } from "../../src/app/grid/grid-sample-selection-template-excel/grid-sample-selection-template-excel.component";
import { GridSelectionTemplateNumbersComponent } from "../../src/app/grid/grid-sample-selection-template-numbers/grid-sample-selection-template-numbers.component";
import { GridSelectionSampleComponent } from "../../src/app/grid/grid-sample-selection/grid-selection.component";
import { AboutComponent } from "../../src/app/grid/grid-save-state/about.component";
import { GridSaveStateComponent } from "../../src/app/grid/grid-save-state/grid-state.component";
import { GridSearchSampleComponent } from "../../src/app/grid/grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "../../src/app/grid/grid-sorting-sample/grid-sorting-sample.component";
import { SortingStylingComponent } from "../../src/app/grid/grid-sorting-styling/grid-sorting-styling.component";
import { GridToolbarSample1Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridToolbarStyleComponent } from "../../src/app/grid/grid-toolbar-style/grid-toolbar-style.component";
import { GridMultiColumnHeaderTemplateComponent } from "../../src/app/grid/multi-column-header-template/multi-column-header-template";
import { GridMultiColumnHeadersStylingComponent } from "../../src/app/grid/multi-column-headers-styling/multi-column-headers-styling.component";
import { GridMultiColumnHeadersComponent } from "../../src/app/grid/multi-column-headers/multi-column-headers";
import { RemoteFilteringService } from "../../src/app/grid/services/remoteFilteringService";
import { RemotePagingService } from "../../src/app/grid/services/remotePagingService";
import { RemoteServiceVirt } from "../../src/app/grid/services/remoteService";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import {GridSortingIndicatorsComponent} from '../../src/app/grid/grid-sorting-indicators/grid-sorting-indicators.component'
export class GridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'FinancialSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'FinancialSampleComponent', 'LocalService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['FinancialSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'HttpClientModule'],
                ngProviders: ['LocalService']
            })
        }));

        configs.push(new Config({
            component: 'GridSample3Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxButtonModule', 'IgxGridModule', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'GridSample3Component', 'LocalService', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'HttpClientModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupByCustomSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupBySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupBySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySummarySampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySummarySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule', 'IgxSwitchModule'],
                ngDeclarations: ['GridGroupBySummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxBadgeModule', 'IgxSwitchModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySummaryStylingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySummaryStylingSampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupBySummaryStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxBadgeModule']
                })
        }));

        configs.push(new Config({
            component: 'GridFilteringStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'FilteringSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxRippleModule', 'FilteringSampleComponent', 'IgxInputGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['FilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxInputGroupModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'FilteringTemplateSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxGridModule',
                    'IgxRippleModule',
                    'FilteringTemplateSampleComponent',
                    'IgxInputGroupModule',
                    'IgxDatePickerModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['FilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'PagingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'PagingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'HttpClientModule']
            })
        }));

        configs.push(new Config({
            component: 'GridPagerSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxRippleModule', 'IgxSwitchModule', 'GridPagerSampleComponent', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxSwitchModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxSnackbarModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSwitchModule', 'GridSelectionSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule', 'IgxSnackbarModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxSwitchModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateExcelComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridSelectionTemplateExcelComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSelectionTemplateExcelComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateNumbersComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'IgxGridModule',
                    'GridSelectionTemplateNumbersComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSelectionTemplateNumbersComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxCheckboxModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSearchSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/grid-search-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule', 'GridSearchSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSearchSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxChipsModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'IgxRadioModule',
                    'IgxColumnHidingModule', 'GridColumnHidingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRadioModule', 'IgxColumnHidingModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'GridColumnHidingToolbarSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnHidingToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'GridColumnHidingToolbarStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'ResizingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'ResizingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ResizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridResizeLineStylingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridResizeLineStylingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridResizeLineStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'SortingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/localData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'IgxRippleModule',
                    'SortingSampleComponent', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['SortingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/localData.ts"],
            component: 'SortingStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'IgxRippleModule',
                    'SortingStylingComponent', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['SortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/remoteService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRemoteVirtualizationSampleComponent', 'IgxGridModule', 'IgxToastModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteServiceVirt', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRemoteVirtualizationSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule', 'IgxBadgeModule', 'HttpClientModule'],
                ngProviders: ['RemoteServiceVirt']
            })
        }));

        configs.push(new Config({
            component: 'RemoteFilteringSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/remoteFilteringService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemoteFilteringSampleComponent', 'IgxGridModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteFilteringService', 'IgxToastModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemoteFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxBadgeModule', 'HttpClientModule', 'IgxToastModule'],
                ngProviders: ['RemoteFilteringService']
            })
        }));

        configs.push(new Config({
            component: 'PinningSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts", "/src/app/grid/services/svgIcons.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningSampleComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'PinningToolbarSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningToolbarSampleComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PinningToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        // column-moving sample
        configs.push(new Config({
            component: 'GridMovingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMovingSampleComponent', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridMovingStyledSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMovingStyledSampleComponent', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMovingStyledSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample1Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample1Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample2Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample2Component', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample3Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample3Component', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample4Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample4Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample4Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarStyleComponent', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/grid-editing-sample/data.ts",
                "/src/app/grid/grid-editing-sample/product.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxDialogModule',
                    'IgxGridModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxComboModule', 'IgxToastModule',
                    'IgxRippleModule', 'GridEditingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxDialogModule',
                    'IgxGridModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxRippleModule', 'IgxToastModule', 'IgxComboModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingEventsComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxToastModule', 'GridEditingEventsComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingStyleSample',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridEditingStyleSample', 'IgxGridModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridEditingStyleSample'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDatePickerModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeadersComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersStylingComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersStylingComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingGridSample',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingGridSample', 'IgxGridModule', 'RouterModule', 'HttpClientModule', 'RemotePagingService',
                    'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingGridSample'],
                ngImports: ['IgxPreventDocumentScrollModule', "RouterModule.forRoot([])", 'IgxGridModule', 'HttpClientModule', 'IgxSelectModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'CustomRemotePagingGridSample',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['CustomRemotePagingGridSample', 'IgxGridModule', 'RouterModule', 'HttpClientModule',
                    'RemotePagingService', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['CustomRemotePagingGridSample'],
                ngImports: ['IgxPreventDocumentScrollModule', "RouterModule.forRoot([])", 'IgxGridModule', 'HttpClientModule', 'IgxSelectModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'GridDisplayDensitySampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxGridModule', 'GridDisplayDensitySampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDisplayDensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxGridModule']
            })
        }));

        // Grid cellClasses
        configs.push(new Config({
            component: 'GridConditionalCellStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridConditionalCellStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridConditionalCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        // Grid cellStyles
        configs.push(new Config({
            component: 'GridConditionalCellStyle2Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridConditionalCellStyle2Component', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridConditionalCellStyle2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        // Grid Batch Editing
        configs.push(new Config({
            component: 'GridBatchEditingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts", "/src/app/data/utils.ts",
                "/src/app/grid/grid-batch-editing/grid-transaction.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridBatchEditingSampleComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'GridWithTransactionsComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridBatchEditingSampleComponent', 'GridWithTransactionsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule']
            })
        }));

        // Grid with Action Strip
        configs.push(new Config({
            component: 'GridActionStripSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts", "/src/app/data/utils.ts",
                "/src/app/grid/grid-batch-editing/grid-transaction.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridActionStripSampleComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'GridWithTransactionsComponent', 'IgxPreventDocumentScrollModule', 'IgxActionStripModule'],
                ngDeclarations: ['GridActionStripSampleComponent', 'GridWithTransactionsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxActionStripModule',
                    'IgxFocusModule']
            })
        }));

        // Grid Custom Summaries
        configs.push(new Config({
            component: 'GridCustomSummariesSelection',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomSummariesSelection', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCustomSummariesSelection'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        // Grid Row Editing
        configs.push(new Config({
            component: 'GridRowEditSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowEditSampleComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowEditSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxFocusModule']
            })
        }));

        // Grid Row Editing Styling
        configs.push(new Config({
            component: 'GridRowEditStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowEditStyleComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxFocusModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCustomFilteringComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomFilteringComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCustomFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample1Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample1Component', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonGroupModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample2Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample2Component', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample3Component',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample3Component', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExcelStyleFilteringLoadOnDemandComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service.ts",
                              "/src/app/grid/grid-excel-style-filtering-load-on-demand/employees.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExcelStyleFilteringLoadOnDemandComponent', 'IgxGridModule', 'RemoteValuesService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: ['RemoteValuesService']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringStyleComponent', 'IgxGridModule' , 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalExcelStyleFilteringComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalExcelStyleFilteringComponent', 'IgxGridModule' , 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalAdvancedFilteringComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalAdvancedFilteringComponent', 'IgxGridModule' , 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiCellSelectionComponent', 'IgxGridModule', 'IgxToastModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiCellSelectionStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiCellSelectionStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiRowLayoutComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        const gridSaveStateSampleConfig = new Config({
            component: 'GridSaveStateComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/grid/grid-save-state/localData.ts",
                "/src/app/grid/grid-save-state/about.component.ts",
                "/src/app/grid/grid-save-state/about.component.html"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSaveStateComponent', 'IgxGridModule', 'IgxTooltipModule',
                    'IgxToastModule', 'IgxSwitchModule', 'AboutComponent', 'Router', 'RouterModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSaveStateComponent', 'AboutComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxTooltipModule',
                    // tslint:disable-next-line:max-line-length
                    "RouterModule.forRoot([\{component: 'AboutComponent', path: 'grid-about'},\{component: 'GridSaveStateComponent', path: 'grid-state'},\{ path: '', redirectTo: '/grid-state', pathMatch: 'full' }])",
                    'IgxToastModule', 'IgxSwitchModule']
            })
        });
        gridSaveStateSampleConfig.usesRouting = true;
        configs.push(gridSaveStateSampleConfig);

        configs.push(new Config({
            component: 'GridMultiRowLayoutConfigurationComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutConfigurationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiRowLayoutConfigurationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragToGridSampleComponent', 'IgxDragDropModule',
                    'IgxIconModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDragToGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            component: 'GridDragToGridSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/grid-nested-data-binding/nestedData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridNestedDataBindComponent', 'IgxGridModule', 'IgxInputGroupModule', 'IgxExpansionPanelModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridNestedDataBindComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxInputGroupModule', 'IgxExpansionPanelModule']
            })
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindAminoacidComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/grid-nested-data-binding-2/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridNestedDataBindAminoacidComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridNestedDataBindAminoacidComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCompositeDataComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCompositeDataComponent', 'IgxGridModule', 'IgxInputGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCompositeDataComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxInputGroupModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragBaseSampleComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDragBaseSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule', 'IgxButtonModule']
            }),
            component: 'GridDragBaseSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts",
                "src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.ts",
                "src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.html",
                "src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridContextmenuSampleComponent', 'ContextmenuComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridContextmenuSampleComponent', 'ContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            }),
            component: 'GridContextmenuSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridCustomKBNavigationComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomKBNavigationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCustomKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/grid/grid-row-drag/data.ts",
                "/src/app/grid/grid-row-drag/planet/planet.component.html",
                "/src/app/grid/grid-row-drag/planet/planet.component.scss",
                "/src/app/grid/grid-row-drag/planet/planet.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragSampleComponent', 'PlanetComponent', 'IgxDragDropModule', 'IgxDialogModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDragSampleComponent', 'PlanetComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule', 'IgxDialogModule']
            }),
            component: 'GridDragSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridMRLCustomNavigationComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/company-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMRLCustomNavigationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMRLCustomNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'CustomGridPagingStyleSample',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['CustomGridPagingStyleSample', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['CustomGridPagingStyleSample'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultipleRowDragComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridMultipleRowDragComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultipleRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridRowReorderComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridRowReorderComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupByPagingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/data/invoiceData.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'GridGroupByPagingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupByPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridMultiColumnHeaderTemplateComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeaderTemplateComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeaderTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));
        configs.push(new Config({
            component: 'GridClipboardSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridClipboardSampleComponent', 'IgxGridModule', 'IgxSwitchModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridClipboardSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSwitchModule']
            })
        }));
        configs.push(new Config({
            component: 'PinningStylingComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningStylingComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PinningStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridGroupByStyling',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridGroupByStyling', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupByStyling'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));
        configs.push(new Config({
            component: 'GridCellSelectionComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCellSelectionComponent', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxIconModule', 'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxSnackbarModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSnackbarModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutStylingComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutStylingComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiRowLayoutStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAdvancedFilteringSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringStyleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAdvancedFilteringStyleComponent', 'IgxGridModule' , 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridConditionalRowSelectorsComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxGridModule', 'GridConditionalRowSelectorsComponent', 'IgxCheckboxModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridConditionalRowSelectorsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxCheckboxModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridAllDataSummaryComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAllDataSummaryComponent', 'IgxGridModule' , 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCollapsibleColumnGroupsComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCollapsibleColumnGroupsComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCollapsibleColumnGroupsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxTooltipModule']
            })
        }));

        configs.push(new Config({
            component: 'RightPinningSampleComponent',
            additionalFiles: [
                "/src/app/data/athletesData.ts",
                "/src/app/grid/services/data.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['RightPinningSampleComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxAvatarModule'],
                ngDeclarations: ['RightPinningSampleComponent'],
                ngImports: ['IgxGridModule', 'IgxTooltipModule', 'IgxAvatarModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionComponent',
            additionalFiles: [
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnSelectionComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnSelectionComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnGroupSelectionComponent',
            additionalFiles: [
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnGroupSelectionComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnGroupSelectionComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionStylesComponent',
            additionalFiles: [
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnSelectionStylesComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnSelectionStylesComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationAddRowSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/grid-sample-5/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRemoteVirtualizationAddRowSampleComponent', 'IgxGridModule', 'IgxToastModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRemoteVirtualizationAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule', 'IgxBadgeModule', 'HttpClientModule'],
                ngProviders: ['RemoteService']
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningSampleComponent', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningExtraColumnSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts", "/src/app/grid/services/svgIcons.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningExtraColumnSampleComponent', 'IgxSwitchModule', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxSwitchModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridPinningDragSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridPinningDragSampleComponent', 'IgxActionStripModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridPinningDragSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningStylingSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningStylingSampleComponent', 'IgxActionStripModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridKeyboardnavGuide',
            additionalFiles: [
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridKeyboardnavGuide', 'IgxGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['GridKeyboardnavGuide'],
                ngImports: ['IgxGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingDefaultTemplateComponent', 'IgxGridModule', 'RouterModule',
                    'HttpClientModule', 'RemotePagingService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', "RouterModule.forRoot([])", 'IgxGridModule', 'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        // Grid Batch Editing with remote paging
        configs.push(new Config({
            component: 'RemotePagingBatchEditingComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts", "/src/app/data/utils.ts",
                "/src/app/grid/grid-batchEditing-remotePaging/transaction.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingBatchEditingComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'GridWithTransactionsComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingBatchEditingComponent', 'GridWithTransactionsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingDefaultTemplateComponent', 'IgxGridModule', 'RouterModule',
                    'HttpClientModule', 'RemotePagingService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', "RouterModule.forRoot([])", 'IgxGridModule', 'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalOutletComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalOutletComponent', 'IgxGridModule', 'IgxToggleModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToggleModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSortingIndicatorsComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/utils.ts", "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSortingIndicatorsComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSortingIndicatorsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        return configs;
    }
}
