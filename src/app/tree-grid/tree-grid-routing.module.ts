/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeGridColumnGroupSelectionComponent } from './column-group-selection/column-group-selection.component';
import { TreeGridColumnSelectionStylesComponent } from './column-selection-styles/tree-grid-column-selection-style.component';
import { TreeGridColumnSelectionComponent } from './column-selection/tree-grid-column-selection.component';
import { TGridKeyboardnavGuide } from './tgrid-keyboard-guide/tgrid-keyboardnav-guide.component';
import { TreeGridAddRowSampleComponent } from './tree-grid-add-row-sample/tree-grid-add-row-sample.component';
import { TreeGridAdvancedFilteringSampleComponent } from './tree-grid-advanced-filtering-sample/tree-grid-advanced-filtering-sample.component';
import { TreeGridAdvancedFilteringStyleComponent } from './tree-grid-advanced-filtering-style/tree-grid-advanced-filtering-style.component';
import { TreeGridBatchEditingSampleComponent } from './tree-grid-batch-editing/tree-grid-batch-editing-sample.component';
import { TreeGridCellSelectionComponent } from './tree-grid-cellSelection-sample/tree-grid-cellSelection.component';
import { TreeGridClipboardSampleComponent } from './tree-grid-clipboard-operations-sample/tree-grid-clipboard-operations-sample.component';
import { TreeGridMultiCollapsibleColumnGroupsComponent } from './tree-grid-collapsible-groups/tree-grid-collapsible-column-groups.component';
import { TreeGridColumnHidingSampleComponent } from './tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component';
import { TreeGridColumnHidingToolbarSampleComponent } from './tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component';
import { TreeGridColumnHidingToolbarStyleComponent } from './tree-grid-column-hiding-toolbar-style/tree-grid-column-hiding-toolbar-style.component';
import { TreeGridColumnMovingSampleComponent } from './tree-grid-column-moving-sample/tree-grid-column-moving-sample.component';
import { TreeGridColumnMovingStyledSampleComponent } from './tree-grid-column-moving-styled-sample/tree-grid-column-moving-styled-sample.component';
import { TreeGridColumnPinningSampleComponent } from './tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component';
import { TreeGridPinningToolbarSampleComponent } from './tree-grid-column-pinning-sample/tree-grid-toolbar-pinning.component';
import { TreeGridColumnResizingSampleComponent } from './tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component';
import { TreeGridConditionalCellStyle2Component } from './tree-grid-conditional-cell-style-2/tree-grid-conditional-cell-style-2.component';
import { TreeGridConditionalCellStyleComponent } from './tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component';
import { TreeGridConditionalRowSelectorsSampleComponent } from './tree-grid-conditional-row-selectors/tree-grid-conditional-row-selectors.component';
import { TreeGridDisplaydensitySampleComponent } from './tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component';
import { TreeGridEditingEventsComponent } from './tree-grid-editing-events/tree-grid-editing-events.component';
import { TreeGridEditingSampleComponent } from './tree-grid-editing-sample/tree-grid-editing-sample.component';
import { TreeGridEditingStyleComponent } from './tree-grid-editing-style/tree-grid-editing-sample.component';
import { TreeGridEmployeesSampleComponent } from './tree-grid-employees-sample/tree-grid-employees-sample.component';
import { TreeGridExcelStyleFilteringLoadOnDemandComponent } from './tree-grid-excel-style-filtering-load-on-demand/tree-grid-excel-style-filtering-load-on-demand.component';
import { TreeGridExcelStyleFilteringSample1Component } from './tree-grid-excel-style-filtering-sample-1/tree-grid-excel-style-filtering-sample-1.component';
import { TreeGridExcelStyleFilteringSample2Component } from './tree-grid-excel-style-filtering-sample-2/tree-grid-excel-style-filtering-sample-2.component';
import { TreeGridExcelStyleFilteringSample3Component } from './tree-grid-excel-style-filtering-sample-3/tree-grid-excel-style-filtering-sample-3.component';
import { TreeGridExcelStyleFilteringStyleComponent } from './tree-grid-excel-style-filtering-style/tree-grid-excel-style-filtering-style.component';
import { TreeGridExternalAdvancedFilteringComponent } from './tree-grid-external-advanced-filtering/tree-grid-external-advanced-filtering.component';
import { TreeGridExternalExcelStyleFilteringComponent } from './tree-grid-external-excel-style-filtering/tree-grid-external-excel-style-filtering.component';
import { TreeGridFilteringCustomSampleComponent } from './tree-grid-filtering-custom-sample/tree-grid-filtering-custom-sample.component';
import { TreeGridFilteringSampleComponent } from './tree-grid-filtering-sample/tree-grid-filtering-sample.component';
import { TreeGridFilteringStyleComponent } from './tree-grid-filtering-style/tree-grid-filtering-style.component';
import { TreeGridFilteringTemplateSampleComponent } from './tree-grid-filtering-template-sample/tree-grid-filtering-template-sample.component';
import { TreeGridKBNavigationComponent } from './tree-grid-keyboard-navigation/tree-grid-keyboard-navigation-sample.component';
import { TreeGridLoadOnDemandSampleComponent } from './tree-grid-load-on-demand-sample/tree-grid-load-on-demand-sample.component';
import { TreeGridMultiCellSelectionStyleComponent } from './tree-grid-multi-cell-selection-style/tree-grid-multi-cell-selection-style.component';
import { TreeGridMultiCellSelectionComponent } from './tree-grid-multi-cell-selection/tree-grid-multi-cell-selection.component';
import { TreeGridMultiColumnHeaderTemplateSampleComponent } from './tree-grid-multi-column-header-template-sample/tree-grid-multi-column-header-template-sample.component';
import { TreeGridMultiColumnHeadersSampleComponent } from './tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component';
import { TreeGridMultiColumnHeadersStylingComponent } from './tree-grid-multi-column-headers-styling/tree-grid-multi-column-headers-styling.component';
import { TreeGridMultiRowDragComponent } from './tree-grid-multi-row-drag/tree-grid-multi-row-drag.component';
import { TreeGridPagingSampleComponent } from './tree-grid-paging-sample/tree-grid-paging-sample.component';
import { TreeGridPagingStyleSampleComponent } from './tree-grid-paging-style/tree-grid-paging-style-sample.component';
import { TreeGridRemoteFilteringSampleComponent } from './tree-grid-remote-filtering-sample/tree-grid-remote-filtering-sample.component';
import { TreeGridRemotePagingDefaultTemplateComponent } from './tree-grid-remote-paging-default-template/tree-grid-remote-paging-default-template.component';
import { TreeGridRemotePagingSampleComponent } from './tree-grid-remote-paging-sample/tree-grid-remote-paging-sample.component';
import { TreeGridResizeLineStylingSampleComponent } from './tree-grid-resize-line-styling-sample/tree-grid-resize-line-styling-sample.component';
import { treeGridRoutesData } from './tree-grid-routes-data';
import { TreeGridRowDragBaseComponent } from './tree-grid-row-drag-base/tree-grid-row-drag-base.component';
import { TreeGridRowDragComponent } from './tree-grid-row-drag/tree-grid-row-drag.component';
import { TreeGridRowEditStyleComponent } from './tree-grid-row-edit-style/tree-grid-row-edit-style.component';
import { TreeGridRowEditSampleComponent } from './tree-grid-row-edit/tree-grid-row-editing-sample.component';
import { TreeGridRowPinningExtraColumnSampleComponent } from './tree-grid-row-pinning-extra-column/tree-grid-row-pinning-extra-column.component';
import { TreeGridRowPinningStylingSampleComponent } from './tree-grid-row-pinning-styling/tree-grid-row-pinning-styling.component';
import { TreeGridRowPinningSampleComponent } from './tree-grid-row-pinning/tree-grid-row-pinning.component';
import { TreeGridRowReorderComponent } from './tree-grid-row-reorder/tree-grid-row-reorder.component';
import { TreeGridRightPinningSampleComponent } from './tree-grid-sample-right-pinning/tree-grid-right-pinning.component';
import { TreeGridSearchSampleComponent } from './tree-grid-search-sample/tree-grid-search-sample.component';
import { TreeGridSelectionSampleComponent } from './tree-grid-selection-sample/tree-grid-selection-sample.component';
import { TreeGridSelectionTemplateNumbersSampleComponent } from './tree-grid-selection-template-numbers/tree-grid-selection-template-numbers.component';
import { TreeGridSortingSampleComponent } from './tree-grid-sorting-sample/tree-grid-sorting-sample.component';
import { TreeGridSortingStylingComponent } from './tree-grid-sorting-styling/tree-grid-sorting-styling.component';
import { TreeGridStyleComponent } from './tree-grid-style/tree-grid-style.component';
import { TreeGridSummarySampleComponent } from './tree-grid-summary-sample/tree-grid-summary-sample.component';
import { TreeGridSummaryStylingComponent } from './tree-grid-summary-styling/tree-grid-summary-styling.component';
import { TreeGridSummary2SampleComponent } from './tree-grid-summary2-sample/tree-grid-summary2-sample.component';
import { TreeGridToolbarSample1Component } from './tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component';
import { TreeGridToolbarSample2Component } from './tree-grid-toolbar-sample-2/tree-grid-toolbar-sample-2.component';
import { TreeGridToolbarSample3Component } from './tree-grid-toolbar-sample-3/tree-grid-toolbar-sample-3.component';
import { TreeGridToolbarSample4Component } from './tree-grid-toolbar-sample-4/tree-grid-toolbar-sample-4.component';
import { TreeGridToolbarStyleComponent } from './tree-grid-toolbar-style/tree-grid-toolbar-style.component';
import { TreeGridVirtualizationSampleComponent } from './tree-grid-virtualization-sample/tree-grid-virtualization-sample.component';
import { TreeGridAllDataSummaryComponent } from './treegrid-allData-summary/treegrid-allData-summary.component';
import { TGridSaveStateComponent } from './tree-grid-save-state/tGrid-state.component';
import { TGridAboutComponent } from './tree-grid-save-state/about.component';
import { TreeGridExternalOutletComponent } from './tree-grid-external-outlet/tree-grid-external-outlet-sample.component';
import { TreeGridExportVisualizationComponent } from './tree-grid-export-visualization/tree-grid-export-visualization.component';
import { TGridEditingLifecycleComponent } from './tgrid-editing-lifecycle-sample/tgrid-editing-lifecycle.component';
import { TreeGridFormattedFilteringStrategyComponent } from './tree-grid-formatted-filtering-strategy/tree-grid-formatted-filtering-strategy.component';
import { TreeGridSummaryFormatterComponent } from './tree-grid-summary-formatter/tree-grid-summary-formatter.component';
import { TreeGridPagerSampleComponent } from './tree-grid-pager-sample/tree-grid-pager-sample.component';
import { TreeGridGroupByLoadOnDemandComponent } from './tree-grid-group-by-load-on-demand-sample/tree-grid-group-by-load-on-demand-sample.component';

export const treeGridRoutes: Routes = [
    {
        component: TreeGridRowEditSampleComponent,
        data: treeGridRoutesData['treegrid-row-edit'],
        path: 'treegrid-row-edit'
    },
    {
        component: TreeGridRowEditStyleComponent,
        data: treeGridRoutesData['treegrid-row-edit-style'],
        path: 'treegrid-row-edit-style'
    },
    {
        component: TreeGridBatchEditingSampleComponent,
        data: treeGridRoutesData['treegrid-batchediting'],
        path: 'treegrid-batchediting'
    },
    {
        component: TreeGridEditingEventsComponent,
        data: treeGridRoutesData['treegrid-editing-events'],
        path: 'treegrid-editing-events'
    },
    {
        component: TreeGridEmployeesSampleComponent,
        data: treeGridRoutesData['treegrid-employees'],
        path: 'treegrid-employees'
    },
    {
        component: TreeGridSearchSampleComponent,
        data: treeGridRoutesData['treegrid-search'],
        path: 'treegrid-search'
    },
    {
        component: TreeGridColumnHidingSampleComponent,
        data: treeGridRoutesData['treegrid-column-hiding'],
        path: 'treegrid-column-hiding'
    },
    {
        component: TreeGridColumnHidingToolbarSampleComponent,
        data: treeGridRoutesData['treegrid-column-hiding-toolbar'],
        path: 'treegrid-column-hiding-toolbar'
    },
    {
        component: TreeGridRowDragComponent,
        data: treeGridRoutesData['tree-grid-row-drag'],
        path: 'tree-grid-row-drag'
    },
    {
        component: TreeGridRowDragBaseComponent,
        data: treeGridRoutesData['tree-grid-row-drag-base'],
        path: 'tree-grid-row-drag-base'
    },
    {
        component: TreeGridMultiRowDragComponent,
        data: treeGridRoutesData['tree-grid-multi-row-drag'],
        path: 'tree-grid-multi-row-drag'
    },
    {
        component: TreeGridSelectionSampleComponent,
        data: treeGridRoutesData['treegrid-selection'],
        path: 'treegrid-selection'
    },
    {
        component: TreeGridSelectionTemplateNumbersSampleComponent,
        data: treeGridRoutesData['tree-grid-selection-template-numbers'],
        path: 'tree-grid-selection-template-numbers'
    },
    {
        component: TreeGridSortingSampleComponent,
        data: treeGridRoutesData['treegrid-sorting'],
        path: 'treegrid-sorting'
    },
    {
        component: TreeGridSortingStylingComponent,
        data: treeGridRoutesData['treegrid-sorting-styling'],
        path: 'treegrid-sorting-styling'
    },
    {
        component: TreeGridColumnMovingSampleComponent,
        data: treeGridRoutesData['treegrid-column-moving'],
        path: 'treegrid-column-moving'
    },
    {
        component: TreeGridColumnMovingStyledSampleComponent,
        data: treeGridRoutesData['treegrid-column-moving-styled'],
        path: 'treegrid-column-moving-styled'
    },
    {
        component: TreeGridColumnPinningSampleComponent,
        data: treeGridRoutesData['treegrid-column-pinning'],
        path: 'treegrid-column-pinning'
    },
    {
        component: TreeGridPinningToolbarSampleComponent,
        data: treeGridRoutesData['treegrid-toolbar-pinning'],
        path: 'treegrid-toolbar-pinning'
    },
    {
        component: TreeGridColumnResizingSampleComponent,
        data: treeGridRoutesData['treegrid-column-resizing'],
        path: 'treegrid-column-resizing'
    },
    {
        component: TreeGridResizeLineStylingSampleComponent,
        data: treeGridRoutesData['treegrid-resize-line-styling'],
        path: 'treegrid-resize-line-styling'
    },
    {
        component: TreeGridFilteringSampleComponent,
        data: treeGridRoutesData['treegrid-filtering'],
        path: 'treegrid-filtering'
    },
    {
        component: TreeGridFilteringTemplateSampleComponent,
        data: treeGridRoutesData['treegrid-filtering-template'],
        path: 'treegrid-filtering-template'
    },
    {
        component: TreeGridExcelStyleFilteringSample1Component,
        data: treeGridRoutesData['treegrid-excel-style-filtering-sample-1'],
        path: 'treegrid-excel-style-filtering-sample-1'
    },
    {
        component: TreeGridExcelStyleFilteringSample2Component,
        data: treeGridRoutesData['treegrid-excel-style-filtering-sample-2'],
        path: 'treegrid-excel-style-filtering-sample-2'
    },
    {
        component: TreeGridExcelStyleFilteringSample3Component,
        data: treeGridRoutesData['treegrid-excel-style-filtering-sample-3'],
        path: 'treegrid-excel-style-filtering-sample-3'
    },
    {
        component: TreeGridExcelStyleFilteringStyleComponent,
        data: treeGridRoutesData['treegrid-excel-style-filtering-style'],
        path: 'treegrid-excel-style-filtering-style'
    },
    {
        component: TreeGridExternalExcelStyleFilteringComponent,
        data: treeGridRoutesData['tree-grid-external-excel-style-filtering'],
        path: 'tree-grid-external-excel-style-filtering'
    },
    {
        component: TreeGridExternalOutletComponent,
        data: treeGridRoutesData['tree-grid-external-outlet'],
        path: 'tree-grid-external-outlet'
    },
    {
        component: TreeGridExternalAdvancedFilteringComponent,
        data: treeGridRoutesData['tree-grid-external-advanced-filtering'],
        path: 'tree-grid-external-advanced-filtering'
    },
    {
        component: TreeGridExcelStyleFilteringLoadOnDemandComponent,
        data: treeGridRoutesData['treegrid-excel-style-filtering-load-on-demand'],
        path: 'treegrid-excel-style-filtering-load-on-demand'
    },
    {
        component: TreeGridFilteringCustomSampleComponent,
        data: treeGridRoutesData['treegrid-filtering-custom'],
        path: 'treegrid-filtering-custom'
    },
    {
        component: TreeGridMultiColumnHeadersSampleComponent,
        data: treeGridRoutesData['treegrid-multi-column-headers'],
        path: 'treegrid-multi-column-headers'
    },
    {
        component: TreeGridMultiColumnHeadersStylingComponent,
        data: treeGridRoutesData['treegrid-multi-column-headers-styling'],
        path: 'treegrid-multi-column-headers-styling'
    },
    {
        component: TreeGridVirtualizationSampleComponent,
        data: treeGridRoutesData['treegrid-virtualization'],
        path: 'treegrid-virtualization'
    },
    {
        component: TreeGridDisplaydensitySampleComponent,
        data: treeGridRoutesData['treegrid-display-density'],
        path: 'treegrid-display-density'
    },
    {
        component: TreeGridToolbarSample1Component,
        data: treeGridRoutesData['treegrid-toolbar-1'],
        path: 'treegrid-toolbar-1'
    },
    {
        component: TreeGridToolbarSample2Component,
        data: treeGridRoutesData['treegrid-toolbar-2'],
        path: 'treegrid-toolbar-2'
    },
    {
        component: TreeGridToolbarSample3Component,
        data: treeGridRoutesData['treegrid-toolbar-3'],
        path: 'treegrid-toolbar-3'
    },
    {
        component: TreeGridToolbarSample4Component,
        data: treeGridRoutesData['treegrid-toolbar-4'],
        path: 'treegrid-toolbar-4'
    },
    {
        component: TreeGridSummarySampleComponent,
        data: treeGridRoutesData['treegrid-summary'],
        path: 'treegrid-summary'
    },
    {
        component: TreeGridSummaryStylingComponent,
        data: treeGridRoutesData['treegrid-summary-styling'],
        path: 'treegrid-summary-styling'
    },
    {
        component: TreeGridSummary2SampleComponent,
        data: treeGridRoutesData['treegrid-summary2'],
        path: 'treegrid-summary2'
    },
    {
        component: TreeGridConditionalCellStyleComponent,
        data: treeGridRoutesData['treegrid-conditional-cell-style'],
        path: 'treegrid-conditional-cell-style'
    },
    {
        component: TreeGridPagingSampleComponent,
        data: treeGridRoutesData['treegrid-paging'],
        path: 'treegrid-paging'
    },
    {
        component: TreeGridPagerSampleComponent,
        data: treeGridRoutesData['treegrid-reusable-paginator'],
        path: 'treegrid-reusable-paginator'
    },
    {
        component: TreeGridEditingSampleComponent,
        data: treeGridRoutesData['treegrid-editing'],
        path: 'treegrid-editing'
    },
    {
        component: TreeGridEditingStyleComponent,
        data: treeGridRoutesData['treegrid-editing-style'],
        path: 'treegrid-editing-style'
    },
    {
        component: TreeGridRemoteFilteringSampleComponent,
        data: treeGridRoutesData['treegrid-remote-filtering'],
        path: 'treegrid-remote-filtering'
    },
    {
        component: TreeGridMultiCellSelectionComponent,
        data: treeGridRoutesData['tree-grid-multi-cell-selection'],
        path: 'tree-grid-multi-cell-selection'
    },
    {
        component: TreeGridMultiCellSelectionStyleComponent,
        data: treeGridRoutesData['tree-grid-multi-cell-selection-style'],
        path: 'tree-grid-multi-cell-selection-style'
    },
    {
        component: TreeGridLoadOnDemandSampleComponent,
        data: treeGridRoutesData['treegrid-load-on-demand'],
        path: 'treegrid-load-on-demand'
    },
    {
        component: TreeGridGroupByLoadOnDemandComponent,
        data: treeGridRoutesData['treegrid-group-by-load-on-demand'],
        path: 'treegrid-group-by-load-on-demand'
    },
    {
        component: TreeGridKBNavigationComponent,
        data: treeGridRoutesData['treegrid-keyboard-navigation'],
        path: 'treegrid-keyboard-navigation'
    },
    {
        component: TreeGridRowReorderComponent,
        data: treeGridRoutesData['tree-grid-row-reordering'],
        path: 'tree-grid-row-reordering'
    },
    {
        component: TreeGridRowPinningSampleComponent,
        data: treeGridRoutesData['tree-grid-row-pinning'],
        path: 'tree-grid-row-pinning'
    },
    {
        component: TreeGridRowPinningExtraColumnSampleComponent,
        data: treeGridRoutesData['tree-grid-row-pinning-extra-column'],
        path: 'tree-grid-row-pinning-extra-column'
    },
    {
        component: TreeGridRowPinningStylingSampleComponent,
        data: treeGridRoutesData['tree-grid-row-pinning-styling'],
        path: 'tree-grid-row-pinning-styling'
    },
    {
        component: TreeGridRemotePagingSampleComponent,
        data: treeGridRoutesData['treegrid-remote-paging'],
        path: 'treegrid-remote-paging'
    },
    {
        component: TreeGridPagingStyleSampleComponent,
        data: treeGridRoutesData['treegrid-paging-style'],
        path: 'treegrid-paging-style'
    },
    {
        component: TreeGridColumnHidingToolbarStyleComponent,
        data: treeGridRoutesData['treegrid-paging-style'],
        path: 'treegrid-column-hiding-style'
    },
    {
        component: TreeGridMultiColumnHeaderTemplateSampleComponent,
        data: treeGridRoutesData['treegrid-multi-column-header-template'],
        path: 'treegrid-multi-column-header-template'
    },
    {
        component: TreeGridClipboardSampleComponent,
        data: treeGridRoutesData['treegrid-clipboard-operations-sample'],
        path: 'tree-grid-clipboard-operations-sample'
    },
    {
        component: TreeGridToolbarStyleComponent,
        data: treeGridRoutesData['treegrid-toolbar-style'],
        path: 'treegrid-toolbar-style'
    },
    {
        component: TreeGridFilteringStyleComponent,
        data: treeGridRoutesData['treegrid-filtering-style'],
        path: 'treegrid-filtering-style'
    },
    {
        component: TreeGridAddRowSampleComponent,
        data: treeGridRoutesData['treegrid-add-row'],
        path: 'treegrid-add-row'
    },
    {
        component: TreeGridAdvancedFilteringSampleComponent,
        data: treeGridRoutesData['treegrid-advanced-filtering'],
        path: 'treegrid-advanced-filtering'
    },
    {
        component: TreeGridAdvancedFilteringStyleComponent,
        data: treeGridRoutesData['treegrid-advanced-filtering-style'],
        path: 'treegrid-advanced-filtering-style'
    },
    {
        component: TreeGridCellSelectionComponent,
        data: treeGridRoutesData['treegrid-cell-selection'],
        path: 'treegrid-cell-selection'
    },
    {
        component: TreeGridConditionalRowSelectorsSampleComponent,
        data: treeGridRoutesData['treegrid-conditional-row-selectors'],
        path: 'treegrid-conditional-row-selectors'
    },
    {
        component: TreeGridStyleComponent,
        data: treeGridRoutesData['treegrid-style'],
        path: 'treegrid-style'
    },
    {
        component: TreeGridConditionalCellStyle2Component,
        data: treeGridRoutesData['tree-grid-cell-cellStyling'],
        path: 'tree-grid-cell-cellStyling'
    },
    {
        component: TreeGridMultiCollapsibleColumnGroupsComponent,
        data: treeGridRoutesData['tree-grid-collapsible-groups'],
        path: 'tree-grid-collapsible-groups'
    },
    {
        component: TreeGridAllDataSummaryComponent,
        data: treeGridRoutesData['tree-grid-allData-summary'],
        path: 'tree-grid-allData-summary'
    },
    {
        component: TreeGridRightPinningSampleComponent,
        data: treeGridRoutesData['tree-grid-sample-right-pinning'],
        path: 'tree-grid-sample-right-pinning'
    },
    {
        component: TreeGridColumnSelectionComponent,
        data: treeGridRoutesData['column-selection'],
        path: 'column-selection'
    },
    {
        component: TreeGridColumnGroupSelectionComponent,
        data: treeGridRoutesData['column-group-selection'],
        path: 'column-group-selection'
    },
    {
        component: TreeGridColumnSelectionStylesComponent,
        data: treeGridRoutesData['column-selection-styles'],
        path: 'column-selection-styles'
    },
    {
        component: TGridKeyboardnavGuide,
        data: treeGridRoutesData['tgrid-keyboardnav-guide'],
        path: 'tgrid-keyboardnav-guide'
    },
    {
        component: TreeGridRemotePagingDefaultTemplateComponent,
        data: treeGridRoutesData['tree-grid-remote-paging-default-template'],
        path: 'tree-grid-remote-paging-default-template'
    },
    {
        component: TGridSaveStateComponent,
        data: treeGridRoutesData['tree-grid-state'],
        path: 'tree-grid-state'
    },
    {
        component: TGridAboutComponent,
        data: treeGridRoutesData['tree-grid-state-about'],
        path: 'tree-grid-state-about'
    },
    {
        component: TreeGridExportVisualizationComponent,
        data: treeGridRoutesData['tree-grid-exporting-visualization'],
        path: 'tree-grid-exporting-visualization'
    },
    {
        component: TGridEditingLifecycleComponent,
        data: treeGridRoutesData['tree-grid-editing-lifecycle'],
        path: 'tree-grid-editing-lifecycle'
    },
    {
        component: TreeGridFormattedFilteringStrategyComponent,
        data: treeGridRoutesData['tree-grid-formatted-filtering-strategy'],
        path: 'tree-grid-formatted-filtering-strategy'
    },
    {
        component: TreeGridSummaryFormatterComponent,
        data: treeGridRoutesData['tree-grid-summary-formatter'],
        path: 'tree-grid-summary-formatter'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(treeGridRoutes)
    ]
})
export class TreeGridRoutingModule { }
