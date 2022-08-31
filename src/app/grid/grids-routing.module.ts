/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBatchEditingSampleComponent } from './grid-batch-editing/grid-batch-editing-sample.component';
import { GridClipboardSampleComponent } from './grid-clipboard-operations-sample/grid-clipboard-operations-sample.component';
import { GridColumnHidingSampleComponent } from './grid-column-hiding-sample/grid-column-hiding-sample.component';
import { GridColumnHidingToolbarSampleComponent } from './grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component';
import { GridColumnHidingToolbarStyleComponent } from './grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component';
import { GridCompositeDataComponent } from './grid-composite-data-binding/grid-composite-data.component';
import { GridConditionalCellStyle2Component } from './grid-conditional-cell-style-2/grid-conditional-cell-style-2.component';
import { GridConditionalCellStyleComponent } from './grid-conditional-cell-style/grid-conditional-cell-style.component';
import { GridContextmenuSampleComponent } from './grid-contextmenu-sample/grid-contextmenu-sample.component';
import { GridCustomFilteringComponent } from './grid-custom-filtering/grid-custom-filtering.component';
import { GridCustomKBNavigationComponent } from './grid-custom-kb-navigation/grid-custom-kb-navigation-sample.component';
import { CustomRemotePagingGridSampleComponent } from './grid-custom-remote-paging-sample/custom-remote-paging-sample.component';
import { GridCustomSummariesSelectionComponent } from './grid-custom-summaries-selection/grid-custom-summaries-selection.component';
import { GridDisplayDensitySampleComponent } from './grid-displaydensity-sample/grid-displaydensity-sample.component';
import { GridEditingSampleComponent } from './grid-editing-sample/grid-editing-sample.component';
import { GridExcelStyleFilteringLoadOnDemandComponent } from './grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component';
import { ExcelStyleFilteringSample1Component } from './grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component';
import { ExcelStyleFilteringSample2Component } from './grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component';
import { ExcelStyleFilteringSample3Component } from './grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component';
import { ExcelStyleFilteringStyleComponent } from './grid-excel-style-filtering-style/grid-excel-style-filtering-style.component';
import { GridExternalAdvancedFilteringComponent } from './grid-external-advanced-filtering/grid-external-advanced-filtering.component';
import { GridExternalExcelStyleFilteringComponent } from './grid-external-excel-style-filtering/grid-external-excel-style-filtering.component';
import { GridExternalOutletComponent } from './grid-external-outlet-sample/grid-external-outlet-sample.component';
import { FilteringSampleComponent } from './grid-filtering-sample/grid-filtering-sample.component';
import { GridFilteringStyleComponent } from './grid-filtering-style/grid-filtering-style.component';
import { FilteringTemplateSampleComponent } from './grid-filtering-template-sample/grid-filtering-template-sample.component';
import { GridGroupByCustomSampleComponent } from './grid-groupby-custom-sample/grid-groupby-custom-sample.component';
import { GridGroupByPagingSampleComponent } from './grid-group-by-paging-sample/grid-group-by-paging-sample.component';
import { GridGroupBySampleComponent } from './grid-groupby-sample/grid-groupby-sample.component';
import { GridGroupByStylingComponent } from './grid-groupby-styling/grid-groupby-styling.component';
import { GridGroupBySummarySampleComponent } from './grid-groupby-summary-sample/grid-groupby-summary-sample.component';
import { GridGroupBySummaryStylingSampleComponent } from './grid-groupby-summary-styling-sample/grid-groupby-summary-styling-sample.component';
import { GridMovingSampleComponent } from './grid-moving-sample/grid-moving-sample.component';
import { GridMovingStyledSampleComponent } from './grid-moving-styled-sample/grid-moving-styled-sample.component';
import { GridMultiCellSelectionStyleComponent } from './grid-multi-cell-selection-style/grid-multi-cell-selection-style.component';
import { GridMultiCellSelectionComponent } from './grid-multi-cell-selection/grid-multi-cell-selection.component';
import { GridMultiRowLayoutConfigurationComponent } from './grid-multi-row-layout-configuration/grid-multi-row-layout-configuration.component';
import { GridMultiRowLayoutStylingComponent } from './grid-multi-row-layout-styling/grid-multi-row-layout-styling.component';
import { GridMultiRowLayoutComponent } from './grid-multi-row-layout/grid-multi-row-layout.component';
import { GridNestedDataBindComponent } from './grid-nested-data-binding/grid-nested-data-bind';
import { GridNestedDataBindAminoacidComponent } from './grid-nested-data-binding-2/grid-nested-data-bind2';
import { PagingSampleComponent } from './grid-paging-sample/grid-paging-sample.component';
import { GridPasteSampleComponent } from './grid-paste/grid-paste-sample.component';
import { RemoteFilteringSampleComponent } from './grid-remote-filtering-sample/remote-filtering-sample.component';
import { RemotePagingGridSampleComponent } from './grid-remote-paging-sample/remote-paging-sample.component';
import { ResizingSampleComponent } from './grid-resizing-sample/grid-resizing-sample.component';
import { gridsRoutesData } from './grid-routes-data';
import { GridDragBaseSampleComponent } from './grid-row-drag-base/grid-row-drag-base.component';
import { GridDragToGridSampleComponent } from './grid-row-drag-to-grid/grid-row-drag-to-grid.component';
import { GridDragSampleComponent } from './grid-row-drag/grid-row-drag.component';
import { GridRowEditSampleComponent } from './grid-row-editing-sample/grid-row-editing-sample.component';
import { GridAddRowSampleComponent } from './grid-add-row-sample/grid-add-row-sample.component';
import { GridRowEditStyleComponent } from './grid-row-editing-style/grid-row-editing-style.component';
import { GridPinningDragSampleComponent } from './grid-row-pinning-drag/grid-row-pinning-drag.component';
import { GridRowPinningExtraColumnSampleComponent } from './grid-row-pinning-extra-column/grid-row-pinning-extra-column.component';
import { GridRowPinningStylingSampleComponent } from './grid-row-pinning-styling/grid-row-pinning-styling.component';
import { GridRowPinningSampleComponent } from './grid-row-pinning/grid-row-pinning.component';
import { GridRowReorderComponent } from './grid-row-reorder-sample/grid-row-reorder';
import { GridDropIndicatorComponent } from './grid-drop-indicator/grid-drop-indicator';
import { FinancialSampleComponent } from './grid-sample-2/grid-sample-2.component';
import { GridSample3Component } from './grid-sample-3/grid-sample-3.component';
import { GridRemoteVirtualizationSampleComponent } from './grid-sample-4/grid-sample-4.component';
import { GridRemoteVirtualizationAddRowSampleComponent } from './grid-sample-5/grid-sample-5.component';
import { PinningSampleComponent } from './grid-sample-pinning/grid-pinning.component';
import { PinningToolbarSampleComponent } from './grid-sample-pinning/grid-toolbar-pinning.component';
import { GridSelectionTemplateExcelComponent } from './grid-sample-selection-template-excel/grid-sample-selection-template-excel.component';
import { GridSelectionTemplateNumbersComponent } from './grid-sample-selection-template-numbers/grid-sample-selection-template-numbers.component';
import { GridSelectionSampleComponent } from './grid-sample-selection/grid-selection.component';
import { AboutComponent } from './grid-save-state/about.component';
import { GridSaveStateComponent } from './grid-save-state/grid-state.component';
import { GridSearchSampleComponent } from './grid-search-sample/grid-search-sample.component';
import { SortingSampleComponent } from './grid-sorting-sample/grid-sorting-sample.component';
import { SortingStylingComponent } from './grid-sorting-styling/grid-sorting-styling.component';
import { GridToolbarSample1Component } from './grid-toolbar-sample/grid-toolbar-sample-1.component';
import { GridToolbarSample2Component } from './grid-toolbar-sample/grid-toolbar-sample-2.component';
import { GridToolbarSample3Component } from './grid-toolbar-sample/grid-toolbar-sample-3.component';
import { GridToolbarSample4Component } from './grid-toolbar-sample/grid-toolbar-sample-4.component';
import { GridToolbarStyleComponent } from './grid-toolbar-style/grid-toolbar-style.component';
import { GridMultiColumnHeaderTemplateComponent } from './multi-column-header-template/multi-column-header-template';
import { GridMultiColumnHeadersComponent } from './multi-column-headers/multi-column-headers';

import { GridColumnGroupSelectionComponent } from './column-group-selection-sample/column-group-selection-sample.component';
import { GridColumnSelectionComponent } from './column-selection-sample/column-selection-sample.component';
import { GridColumnSelectionStylesComponent } from './column-selection-styles/column-selection-styles.component';
import { CustomGridPagingStyleSampleComponent } from './custom-grid-paging-style/custom-grid-paging-style.component';
import { GridActionStripSampleComponent } from './grid-action-strip/grid-action-strip-sample';
import { GridAdvancedFilteringSampleComponent } from './grid-advanced-filtering-sample/grid-advanced-filtering-sample.component';
import { GridColumnDataTypesSampleComponent } from './grid-column-data-types-sample/grid-column-data-types-sample.component';
import { GridAdvancedFilteringStyleComponent } from './grid-advanced-filtering-style/grid-advanced-filtering-style.component';
import { GridAllDataSummaryComponent } from './grid-allData-summary/grid-allData-summary.component';
import { RemotePagingBatchEditingComponent } from './grid-batchEditing-remotePaging/batch-editing-remote-paging.component';
import { GridCellSelectionComponent } from './grid-cellSelection-sample/grid-cellSelection.component';
import { GridCollapsibleColumnGroupsComponent } from './grid-collapsible-columnGroups/grid-collapsible-column-groups.component';
import {
    GridConditionalRowSelectorsComponent
} from './grid-conditional-row-selectors/grid-conditional-row-selectors-sample.component';
import { GridEditingEventsComponent } from './grid-editing-events/grid-editing-events.component';
import { GridEditingLifecycleComponent } from './grid-editing-lifecycle-sample/grid-editing-lifecycle.component';
import { GridEditingStyleSampleComponent } from './grid-editing-style-sample/grid-editing-style-sample.component';
import { GridKeyboardnavGuide } from './grid-keyboardnav-guide-sample/grid-keyboardnav-sample.component';
import { GridMRLCustomNavigationComponent } from './grid-mrl-custom-navigation/grid-mrl-custom-navigation.component';
import { GridMultipleRowDragComponent } from './grid-multiple-row-drag/grid-multiple-row-drag.component';
import { GridPagerSampleComponent } from './grid-pager-sample/grid-pager-sample.component';
import { RemotePagingDefaultTemplateComponent } from './grid-remote-paging-defaultTemplate-sample/remote-paging-default-template.component';
import { GridResizeLineStylingSampleComponent } from './grid-resize-line-styling-sample/grid-resize-line-styling-sample';
import { PinningStylingComponent } from './grid-sample-pinning-styling/grid-pinning-styling.component';
import { RightPinningSampleComponent } from './grid-sample-right-pinning/grid-right-pinning.component';
import {
    GridMultiColumnHeadersStylingComponent
} from './multi-column-headers-styling/multi-column-headers-styling.component';
import { GridSortingIndicatorsComponent } from './grid-sorting-indicators/grid-sorting-indicators.component';
import { GridExportVisualizationComponent } from './grid-export-visualization/grid-export-visualization.component';
import { GridSelectComponent } from './grid-select/grid-select-sample.component';
import { GridFormattedFilteringStrategyComponent } from './grid-formatted-filtering-strategy/grid-formatted-filtering-strategy.component';
import { GridSummaryFormatterComponent } from './grid-summary-formatter/grid-summary-formatter.component';
import { GridMultiColumnHeadersExportComponent } from './multi-column-headers-export/multi-column-headers-export.component';
import { CRUDSampleComponent } from './grid-crud-sample/crud-sample.component';
import { GridRowClassesComponent } from './grid-rowClasses-sample/grid-rowClasses.component';
import { GridRowStylesComponent } from './grid-rowStyles-sample/grid-rowStyles.component';
import { GridSummaryTemplateComponent } from './grid-summary-template/grid-summary-template.component';
import { GridExcelStyleEditingComponent } from './grid-editing-excel-style/grid-editing-excel-style.component';
import { GridColumnAutosizingComponent } from './grid-column-autosizing/grid-column-autosizing.component';
import { GridWithRatingComponent } from './grid-with-rating/grid-with-rating.component';
import { GridValidatorServiceCrossCellComponent } from './grid-validator-service-cross-cell/grid-validator-service-cross-cell.component';
// tslint:enable:max-line-length

export const gridsRoutes: Routes = [
    {
        component: GridSample3Component,
        data: gridsRoutesData['grid-summary'],
        path: 'grid-summary'
    },
    {
        component: GridGroupByPagingSampleComponent,
        data: gridsRoutesData['grid-groupby-paging'],
        path: 'grid-groupby-paging'
    },
    {
        component: GridGroupByCustomSampleComponent,
        data: gridsRoutesData['grid-groupby-custom'],
        path: 'grid-groupby-custom'
    },
    {
        component: GridGroupBySampleComponent,
        data: gridsRoutesData['grid-groupby'],
        path: 'grid-groupby'
    },
    {
        component: GridGroupByStylingComponent,
        data: gridsRoutesData['grid-groupby-styling'],
        path: 'grid-groupby-styling'
    },
    {
        component: GridGroupBySummarySampleComponent,
        data: gridsRoutesData['grid-groupby-summary'],
        path: 'grid-groupby-summary'
    },
    {
        component: GridGroupBySummaryStylingSampleComponent,
        data: gridsRoutesData['grid-groupby-summary-styling'],
        path: 'grid-groupby-summary-styling'
    },
    {
        component: GridEditingSampleComponent,
        data: gridsRoutesData['grid-editing'],
        path: 'grid-editing'
    },
    {
        component: GridEditingStyleSampleComponent,
        data: gridsRoutesData['grid-editing-style'],
        path: 'grid-editing-style'
    },
    {
        component: GridExcelStyleEditingComponent,
        data: gridsRoutesData['grid-editing-excel-style'],
        path: 'grid-editing-excel-style'
    },
    {
        component: GridAddRowSampleComponent,
        data: gridsRoutesData['grid-add-row'],
        path: 'grid-add-row'
    },
    {
        component: GridEditingEventsComponent,
        data: gridsRoutesData['grid-editing-events'],
        path: 'grid-editing-events'
    },
    {
        component: GridRowEditSampleComponent,
        data: gridsRoutesData['grid-row-editing'],
        path: 'grid-row-editing'
    },
    {
        component: GridRowEditStyleComponent,
        data: gridsRoutesData['grid-row-editing-style'],
        path: 'grid-row-edit-style'
    },
    {
        component: GridDragSampleComponent,
        data: gridsRoutesData['grid-row-drag'],
        path: 'grid-row-drag'
    },
    {
        component: GridDragToGridSampleComponent,
        data: gridsRoutesData['grid-row-drag-to-grid'],
        path: 'grid-row-drag-to-grid'
    },
    {
        component: GridDragBaseSampleComponent,
        data: gridsRoutesData['grid-row-drag-base'],
        path: 'grid-row-drag-base'
    },
    {
        component: GridMultipleRowDragComponent,
        data: gridsRoutesData['grid-multiple-row-drag'],
        path: 'grid-multiple-row-drag'
    },
    {
        component: GridRowReorderComponent,
        data: gridsRoutesData['grid-row-reorder'],
        path: 'grid-row-reorder'
    },
    {
        component: GridDropIndicatorComponent,
        data: gridsRoutesData['grid-drop-indicator'],
        path: 'grid-drop-indicator'
    },
    {
        component: GridRowPinningSampleComponent,
        data: gridsRoutesData['grid-row-pinning'],
        path: 'grid-row-pinning'
    },
    {
        component: GridRowPinningExtraColumnSampleComponent,
        data: gridsRoutesData['grid-row-pinning-extra-column'],
        path: 'grid-row-pinning-extra-column'
    },
    {
        component: GridPinningDragSampleComponent,
        data: gridsRoutesData['grid-row-pinning-drag'],
        path: 'grid-row-pinning-drag'
    },
    {
        component: GridRowPinningStylingSampleComponent,
        data: gridsRoutesData['grid-row-pinning-styling'],
        path: 'grid-row-pinning-styling'
    },
    {
        component: GridBatchEditingSampleComponent,
        data: gridsRoutesData['grid-batch-editing'],
        path: 'grid-batch-editing'
    },
    {
        component: GridActionStripSampleComponent,
        data: gridsRoutesData['grid-action-strip'],
        path: 'grid-action-strip'
    },
    {
        component: GridDisplayDensitySampleComponent,
        data: gridsRoutesData['grid-displayDensity'],
        path: 'grid-displayDensity'
    },
    {
        component: GridConditionalCellStyleComponent,
        data: gridsRoutesData['grid-cell-styling'],
        path: 'grid-cell-styling'
    },
    {
        component: GridConditionalCellStyle2Component,
        data: gridsRoutesData['grid-cell-cellStyling'],
        path: 'grid-cell-cellStyling'
    },
    {
        component: FilteringSampleComponent,
        data: gridsRoutesData['grid-filtering-sample'],
        path: 'grid-filtering-sample'
    },
    {
        component: FilteringTemplateSampleComponent,
        data: gridsRoutesData['grid-filtering-template-sample'],
        path: 'grid-filtering-template-sample'
    },
    {
        component: ExcelStyleFilteringSample1Component,
        data: gridsRoutesData['grid-excel-style-filtering-sample-1'],
        path: 'grid-excel-style-filtering-sample-1'
    },
    {
        component: ExcelStyleFilteringSample2Component,
        data: gridsRoutesData['grid-excel-style-filtering-sample-2'],
        path: 'grid-excel-style-filtering-sample-2'
    },
    {
        component: ExcelStyleFilteringSample3Component,
        data: gridsRoutesData['grid-excel-style-filtering-sample-3'],
        path: 'grid-excel-style-filtering-sample-3'
    },
    {
        component: ExcelStyleFilteringStyleComponent,
        data: gridsRoutesData['grid-excel-style-filtering-style'],
        path: 'grid-excel-style-filtering-style'
    },
    {
        component: GridExternalExcelStyleFilteringComponent,
        data: gridsRoutesData['grid-external-excel-style-filtering'],
        path: 'grid-external-excel-style-filtering'
    },
    {
        component: GridExternalAdvancedFilteringComponent,
        data: gridsRoutesData['grid-external-advanced-filtering'],
        path: 'grid-external-advanced-filtering'
    },
    {
        component: GridCustomFilteringComponent,
        data: gridsRoutesData['grid-filter-conditions'],
        path: 'grid-filter-conditions'
    },
    {
        component: GridExternalOutletComponent,
        data: gridsRoutesData['grid-external-outlet'],
        path: 'grid-external-outlet'
    },
    {
        component: GridPagerSampleComponent,
        data: gridsRoutesData['grid-pager-sample'],
        path: 'grid-pager-sample'
    },
    {
        component: PagingSampleComponent,
        data: gridsRoutesData['grid-paging-sample'],
        path: 'grid-paging-sample'
    },
    {
        component: ResizingSampleComponent,
        data: gridsRoutesData['grid-resizing-sample'],
        path: 'grid-resizing-sample'
    },
    {
        component: GridResizeLineStylingSampleComponent,
        data: gridsRoutesData['grid-resize-line-styling-sample'],
        path: 'grid-resize-line-styling-sample'
    },
    {
        component: FinancialSampleComponent,
        data: gridsRoutesData['grid-sample-2'],
        path: 'grid-sample-2'
    },
    {
        component: PinningSampleComponent,
        data: gridsRoutesData['grid-sample-pinning'],
        path: 'grid-sample-pinning'
    },
    {
        component: RightPinningSampleComponent,
        data: gridsRoutesData['grid-sample-right-pinning'],
        path: 'grid-sample-right-pinning'
    },
    {
        component: PinningToolbarSampleComponent,
        data: gridsRoutesData['grid-sample-toolbar-pinning'],
        path: 'grid-sample-toolbar-pinning'
    },
    {
        component: GridRemoteVirtualizationSampleComponent,
        data: gridsRoutesData['grid-sample-4'],
        path: 'grid-sample-4'
    },
    {
        component: RemoteFilteringSampleComponent,
        data: gridsRoutesData['grid-remote-filtering'],
        path: 'grid-remote-filtering'
    },
    {
        component: CRUDSampleComponent,
        data: gridsRoutesData['grid-crud'],
        path: 'grid-crud'
    },
    {
        component: GridSelectionSampleComponent,
        data: gridsRoutesData['grid-selection'],
        path: 'grid-selection'
    },
    {
        component: GridSelectionTemplateNumbersComponent,
        data: gridsRoutesData['grid-selection-template-numbering'],
        path: 'grid-selection-template-numbering'
    },
    {
        component: GridSelectionTemplateExcelComponent,
        data: gridsRoutesData['grid-selection-template-excel'],
        path: 'grid-selection-template-excel'
    },
    {
        component: GridSearchSampleComponent,
        data: gridsRoutesData['grid-search-sample'],
        path: 'grid-search-sample'
    },
    {
        component: GridColumnHidingSampleComponent,
        data: gridsRoutesData['grid-column-hiding-sample'],
        path: 'grid-column-hiding-sample'
    },
    {
        component: GridColumnHidingToolbarSampleComponent,
        data: gridsRoutesData['grid-column-hiding-toolbar-sample'],
        path: 'grid-column-hiding-toolbar-sample'
    },
    {
        component: SortingSampleComponent,
        data: gridsRoutesData['grid-sorting-sample'],
        path: 'grid-sorting-sample'
    },
    {
        component: SortingStylingComponent,
        data: gridsRoutesData['grid-sorting-styling'],
        path: 'grid-sorting-styling'
    },
    {
        component: GridToolbarSample1Component,
        data: gridsRoutesData['grid-toolbar-sample-1'],
        path: 'grid-toolbar-sample-1'
    },
    {
        component: GridToolbarSample2Component,
        data: gridsRoutesData['grid-toolbar-sample-2'],
        path: 'grid-toolbar-sample-2'
    },
    {
        component: GridToolbarSample3Component,
        data: gridsRoutesData['grid-toolbar-sample-3'],
        path: 'grid-toolbar-sample-3'
    },
    {
        component: GridToolbarSample4Component,
        data: gridsRoutesData['grid-toolbar-sample-4'],
        path: 'grid-toolbar-sample-4'
    },
    {
        component: GridMovingSampleComponent,
        data: gridsRoutesData['grid-moving-sample'],
        path: 'grid-moving-sample'
    },
    {
        component: GridMovingStyledSampleComponent,
        data: gridsRoutesData['grid-moving-styled-sample'],
        path: 'grid-moving-styled-sample'
    },
    {
        component: GridMultiColumnHeadersComponent,
        data: gridsRoutesData['multi-column-headers'],
        path: 'multi-column-headers'
    },
    {
        component: GridMultiColumnHeadersStylingComponent,
        data: gridsRoutesData['multi-column-headers-styling'],
        path: 'multi-column-headers-styling'
    },
    {
        component: GridMultiColumnHeadersExportComponent,
        data: gridsRoutesData['multi-column-headers-export'],
        path: 'multi-column-headers-export'
    },
    {
        component: RemotePagingGridSampleComponent,
        data: gridsRoutesData['grid-remote-paging-sample'],
        path: 'grid-remote-paging-sample'
    },
    {
        component: CustomRemotePagingGridSampleComponent,
        data: gridsRoutesData['grid-custom-remote-paging-sample'],
        path: 'grid-custom-remote-paging-sample'
    },
    {
        component: GridPasteSampleComponent,
        data: gridsRoutesData['grid-paste'],
        path: 'grid-paste'
    },
    {
        component: GridSaveStateComponent,
        data: gridsRoutesData['grid-state'],
        path: 'grid-state'
    },
    {
        component: AboutComponent,
        data: gridsRoutesData['grid-about'],
        path: 'grid-about'
    },
    {
        component: GridMultiCellSelectionComponent,
        data: gridsRoutesData['grid-multi-cell-selection'],
        path: 'grid-multi-cell-selection'
    },
    {
        component: GridMultiCellSelectionStyleComponent,
        data: gridsRoutesData['grid-multi-cell-selection-style'],
        path: 'grid-multi-cell-selection-style'
    },
    {
        component: GridCustomKBNavigationComponent,
        data: gridsRoutesData['grid-custom-keyboard-navigation'],
        path: 'grid-custom-keyboard-navigation'
    },
    {
        component: GridNestedDataBindComponent,
        data: gridsRoutesData['grid-nested-data-binding'],
        path: 'grid-nested-data-binding'
    },
    {
        component: GridNestedDataBindAminoacidComponent,
        data: gridsRoutesData['grid-nested-data-binding-2'],
        path: 'grid-nested-data-binding-2'
    },
    {
        component: GridCompositeDataComponent,
        data: gridsRoutesData['grid-composite-data-binding'],
        path: 'grid-composite-data-binding'
    },
    {
        component: GridMultiRowLayoutComponent,
        data: gridsRoutesData['grid-multi-row-layout'],
        path: 'grid-multi-row-layout'
    },
    {
        component: GridMultiRowLayoutConfigurationComponent,
        data: gridsRoutesData['grid-multi-row-layout-configuration'],
        path: 'grid-multi-row-layout-configuration'
    },
    {
        component: GridMRLCustomNavigationComponent,
        data: gridsRoutesData['grid-multi-row-layout'],
        path: 'grid-mrl-custom-navigation'
    },
    {
        component: GridContextmenuSampleComponent,
        data: gridsRoutesData['grid-contextmenu-sample'],
        path: 'grid-contextmenu-sample'
    },
    {
        component: CustomGridPagingStyleSampleComponent,
        data: gridsRoutesData['custom-grid-paging-style'],
        path: 'custom-grid-paging-style'
    },
    {
        component: GridColumnHidingToolbarStyleComponent,
        data: gridsRoutesData['grid-column-hiding-style'],
        path: 'grid-column-hiding-style'
    },
    {
        component: GridMultiColumnHeaderTemplateComponent,
        data: gridsRoutesData['multi-column-header-template'],
        path: 'multi-column-header-template'
    },
    {
        component: GridClipboardSampleComponent,
        data: gridsRoutesData['grid-clipboard-operations-sample'],
        path: 'grid-clipboard-operations-sample'
    },
    {
        component: GridToolbarStyleComponent,
        data: gridsRoutesData['grid-toolbar-style'],
        path: 'grid-toolbar-style'
    },
    {
        component: GridFilteringStyleComponent,
        data: gridsRoutesData['grid-filtering-style'],
        path: 'grid-filtering-style'
    },
    {
        component: GridExcelStyleFilteringLoadOnDemandComponent,
        data: gridsRoutesData['grid-excel-style-filtering-load-on-demand'],
        path: 'grid-excel-style-filtering-load-on-demand'
    },
    {
        component: GridCustomSummariesSelectionComponent,
        data: gridsRoutesData['grid-selection-custom-summaries'],
        path: 'grid-selection-custom-summaries'
    },
    {
        component: GridMultiRowLayoutStylingComponent,
        data: gridsRoutesData['grid-multi-row-layout-styling'],
        path: 'grid-multi-row-layout-styling'
    },
    {
        component: PinningStylingComponent,
        data: gridsRoutesData['grid-pinning-styling'],
        path: 'grid-pinning-styling'
    },
    {
        component: GridAdvancedFilteringSampleComponent,
        data: gridsRoutesData['grid-pinning-styling'],
        path: 'grid-advanced-filtering'
    },
    {
        component: GridColumnDataTypesSampleComponent,
        data: gridsRoutesData['grid-column-data-types'],
        path: 'grid-column-data-types'
    },
    {
        component: GridAdvancedFilteringStyleComponent,
        data: gridsRoutesData['grid-advanced-filtering-style'],
        path: 'grid-advanced-filtering-style'
    },
    {
        component: GridCellSelectionComponent,
        data: gridsRoutesData['grid-cell-selection'],
        path: 'grid-cell-selection'
    },
    {
        component: GridConditionalRowSelectorsComponent,
        data: gridsRoutesData['grid-conditional-row-selectors'],
        path: 'grid-conditional-row-selectors'
    },
    {
        component: GridCollapsibleColumnGroupsComponent,
        data: gridsRoutesData['grid-collapsible-groups'],
        path: 'grid-collapsible-groups'
    },
    {
        component: GridAllDataSummaryComponent,
        data: gridsRoutesData['grid-alldata-summaries'],
        path: 'grid-alldata-summaries'
    },
    {
        component: GridSummaryTemplateComponent,
        data: gridsRoutesData['grid-summary-template'],
        path: 'grid-summary-template'
    },
    {
        component: GridColumnSelectionComponent,
        data: gridsRoutesData['column-selection'],
        path: 'column-selection'
    },
    {
        component: GridColumnGroupSelectionComponent,
        data: gridsRoutesData['column-group-selection'],
        path: 'column-group-selection'
    },
    {
        component: GridColumnSelectionStylesComponent,
        data: gridsRoutesData['column-selection-styles'],
        path: 'column-selection-styles'
    },
    {
        component: GridRemoteVirtualizationAddRowSampleComponent,
        data: gridsRoutesData['grid-sample-5'],
        path: 'grid-sample-5'
    },
    {
        component: GridKeyboardnavGuide,
        data: gridsRoutesData['grid-keybarodnav-guide'],
        path: 'grid-keyboardnav-guide'
    },
    {
        component: RemotePagingDefaultTemplateComponent,
        data: gridsRoutesData['remote-paging-default-template'],
        path: 'remote-paging-default-template'
    },
    {
        component: RemotePagingBatchEditingComponent,
        data: gridsRoutesData['remote-paging-batch-editing'],
        path: 'remote-paging-batch-editing'
    },
    {
        component: RemotePagingDefaultTemplateComponent,
        data: gridsRoutesData['remote-paging-default-template'],
        path: 'remote-paging-default-template'
    },
    {
        component: GridSortingIndicatorsComponent,
        data: gridsRoutesData['grid-sorting-indicators'],
        path: 'grid-sorting-indicators'
    },
    {
        component: GridExportVisualizationComponent,
        data: gridsRoutesData['exporting-visualization'],
        path: 'exporting-visualization'
    },
    {
        component: GridEditingLifecycleComponent,
        data: gridsRoutesData['grid-editing-lifecycle'],
        path: 'grid-editing-lifecycle'
    },
    {
        component: GridSelectComponent,
        data: gridsRoutesData['grid-select'],
        path: 'grid-select'
    },
    {
        component: GridFormattedFilteringStrategyComponent,
        data: gridsRoutesData['grid-formatted-filtering-strategy'],
        path: 'grid-formatted-filtering-strategy'
    },
    {
        component: GridSummaryFormatterComponent,
        data: gridsRoutesData['grid-summary-formatter'],
        path: 'grid-summary-formatter'
    },
    {
        component: GridRowClassesComponent,
        data: gridsRoutesData['grid-rowClasses-sample'],
        path: 'grid-rowClasses-sample'
    },
    {
        component: GridRowStylesComponent,
        data: gridsRoutesData['grid-rowStyles-sample'],
        path: 'grid-rowStyles-sample'
    },
    {
        component: GridColumnAutosizingComponent,
        data: gridsRoutesData['grid-columnAutoResizing-sample'],
        path: 'grid-columnAutoResizing-sample'
    },
    {
        component: GridWithRatingComponent,
        data: gridsRoutesData['grid-with-rating'],
        path: 'grid-with-rating'
    },
    {
        component: GridValidatorServiceCrossCellComponent,
        data: gridsRoutesData['grid-validator-service-cross-cell'],
        path: 'grid-validator-service-cross-cell'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridsRoutes)
    ]
})
export class GridsRoutingModule { }
