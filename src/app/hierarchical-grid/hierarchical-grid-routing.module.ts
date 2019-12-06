/* tslint:disable:max-line-length */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HGridAdvancedFilteringStyleComponent } from "./hierarchical-grid-advanced-filtering-style/hierarchical-grid-advanced-filtering-style.component";
import { HGridAdvancedFilteringSampleComponent } from "./hierarchical-grid-advanced-filtering/hierarchical-grid-advanced-filtering.component";
import { HGridAllDataSummaryComponent } from "./hierarchical-grid-allData-summary/hierarchical-grid-allData-summary.component";
import { HGridBatchEditingSampleComponent } from "./hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HGridCollapsibleColumnGroupComponent } from "./hierarchical-grid-collapsible-column-groups/hierarchical-grid-collapsible-column-groups.component";
import { HierarchicalGridColumnHidingToolbarStyleComponent } from "./hierarchical-grid-column-hiding-toolbar-style/hierarchical-grid-column-hiding-toolbar-style.component";
import { HGridCostumHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component";
import { HGridColumnHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";
import { HGridColumnMovingSampleComponentStyled } from "./hierarchical-grid-column-moving-styled/hierarchical-grid-moving-styled.component";
import { HGridColumnMovingSampleComponent } from "./hierarchical-grid-column-moving/hierarchical-grid-moving.component";
import { HGridPinningSampleComponent } from "./hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";
import { HGridToolbarPinningComponent } from "./hierarchical-grid-column-pinning/hierarchical-grid-toolbar-pinning.component";
import { HGridColumnResizingSampleComponent } from "./hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import {
    HGridConditionalRowSelectorsComponent
} from "./hierarchical-grid-conditional-row-selectors/hierarchical-grid-conditional-row-selectors.component";
import { HGridCustomKBNavigationComponent } from "./hierarchical-grid-custom-kb-navigation/hierarchical-grid-custom-kb-navigation-sample.component";
import { HGridDisplayDensitySampleComponent } from "./hierarchical-grid-display-density/hierarchical-grid-density.component";
import { HGridEditingEventsComponent } from "./hierarchical-grid-editing-events/hierarchical-grid-editing-events.component";
import { HGridEditingStyleComponent } from "./hierarchical-grid-editing-style/hierarchical-grid-editing-style.component";
import { HGridEditingSampleComponent } from "./hierarchical-grid-editing/hierarchical-grid-editing.component";
import { HierarchicalGridExcelStyleFilteringLoadOnDemandComponent } from "./hierarchical-grid-excel-style-filtering-load-on-demand/hierarchical-grid-excel-style-filtering-load-on-demand.component";
import {
    HGridExcelStyleFilteringSample1Component
} from "./hierarchical-grid-excel-style-filtering-sample-1/hierarchical-grid-excel-style-filtering-sample-1.component";
import {
    HGridExcelStyleFilteringSample2Component
} from "./hierarchical-grid-excel-style-filtering-sample-2/hierarchical-grid-excel-style-filtering-sample-2.component";
import {
    HGridExcelStyleFilteringSample3Component
} from "./hierarchical-grid-excel-style-filtering-sample-3/hierarchical-grid-excel-style-filtering-sample-3.component";
import {
    HGridExcelStyleFilteringStyleComponent
} from "./hierarchical-grid-excel-style-filtering-style/hierarchical-grid-excel-style-filtering-style.component";
import {
    HGridExternalAdvancedFilteringComponent
} from "./hierarchical-grid-external-advanced-filtering/hierarchical-grid-external-advanced-filtering.component";
import {
    HGridExternalExcelStyleFilteringComponent
} from "./hierarchical-grid-external-excel-style-filtering/hierarchical-grid-external-excel-style-filtering.component";
import { HierarchicalGridFilteringStyleComponent } from "./hierarchical-grid-filtering-style/hierarchical-grid-filtering-style.component";
import { HGridFilteringTemplateSampleComponent } from "./hierarchical-grid-filtering-template/hierarchical-grid-filtering-template.component";
import { HGridCustomFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component";
import { HGridFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HGridMultiCellStyleComponent } from "./hierarchical-grid-multi-cell-style/hierarchical-grid-multi-cell-style.component";
import { HGridMultiHeaderTemplateSampleComponent } from "./hierarchical-grid-multi-column-header-template/hierarchical-grid-multi-column-template.component";
import { HGridMultiHeadersStylingComponent } from "./hierarchical-grid-multi-column-headers-styling/hierarchical-grid-multi-column-styling.component";
import { HGridMultiHeadersSampleComponent } from "./hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component";
import { HGridMultiRowDragComponent } from "./hierarchical-grid-multi-row-drag/hierarchical-grid-multi-row-drag.component";
import { HGridPagingStyleSampleComponent } from "./hierarchical-grid-paging-style/hierarchical-grid-paging-style.component";
import { HGridPagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-paging.component";
import { HGridRemotePagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import { HGridResizeLineStylingComponent } from "./hierarchical-grid-resize-line-styling/hierarchical-grid-resize-line-styling.component";
import { hierarchicalGridRoutesData } from "./hierarchical-grid-routes-data";
import { HGridRowDragBaseComponent } from "./hierarchical-grid-row-drag-base/hierarchical-row-drag-base.component";
import { HGridDragSampleComponent } from "./hierarchical-grid-row-drag/hierarchical-grid-row-drag.component";
import { HGridRowEditStyleComponent } from "./hierarchical-grid-row-edit-style/hierarchical-grid-row-edit-style.component";
import { HGridRowEditingSampleComponent } from "./hierarchical-grid-row-editing/hierarchical-grid-row-editing.component";
import { HGridRowReorderComponent } from "./hierarchical-grid-row-reorder/hierarchical-grid-row-reorder.component";
import { HGridSelectionTemplateNumbersSampleComponent } from "./hierarchical-grid-selection-template-numbers/hierarchical-grid-selection-template-numbers.component";
import { HGridSelectionSampleComponent } from "./hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridSortingStylingComponent } from "./hierarchical-grid-sorting-styling/hierarchical-grid-sorting-styling.component";
import { HGridSortingSampleComponent } from "./hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridStylingComponent } from "./hierarchical-grid-styling/hierarchical-grid-styling.component";
import { HGridSummaryStylingComponent } from "./hierarchical-grid-summary-styling/hierarchical-grid-summary-styling.component";
import { HGridSummarySampleComponent } from "./hierarchical-grid-summary/hierarchical-grid-summary.component";
import { HierarchicalGridToolbarStyleComponent } from "./hierarchical-grid-toolbar-style/hierarchical-grid-toolbar-style.component";
import { HGridToolbarCustomSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component";
import { HGridToolbarOptionsSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { HGridToolbarTitleSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component";

export const hierarchicalGridRoutes: Routes = [
    {
        component: HGridFilteringSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-filtering"],
        path: "hierarchical-grid-filtering"
    },
    {
        component: HGridFilteringTemplateSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-filtering-template"],
        path: "hierarchical-grid-filtering-template"
    },
    {
        component: HGridExcelStyleFilteringSample1Component,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-sample-1"],
        path: "hierarchical-grid-excel-style-filtering-sample-1"
    },
    {
        component: HGridExcelStyleFilteringSample2Component,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-sample-2"],
        path: "hierarchical-grid-excel-style-filtering-sample-2"
    },
    {
        component: HGridExcelStyleFilteringSample3Component,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-sample-3"],
        path: "hierarchical-grid-excel-style-filtering-sample-3"
    },
    {
        component: HierarchicalGridExcelStyleFilteringLoadOnDemandComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-load-on-demand"],
        path: "hierarchical-grid-excel-style-filtering-load-on-demand"
    },
    {
        component: HGridExcelStyleFilteringStyleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-excel-style-filtering-style"],
        path: "hierarchical-grid-excel-style-filtering-style"
    },
    {
        component: HGridExternalExcelStyleFilteringComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-external-excel-style-filtering"],
        path: "hierarchical-grid-external-excel-style-filtering"
    },
    {
        component: HGridExternalAdvancedFilteringComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-external-advanced-filtering"],
        path: "hierarchical-grid-external-advanced-filtering"
    },
    {
        component: HGridCustomFilteringSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-custom-filtering"],
        path: "hierarchical-grid-custom-filtering"
    },
    {
        component: HGridSortingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-sorting"],
        path: "hierarchical-grid-sorting"
    },
    {
        component: HGridSortingStylingComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-sorting-styling"],
        path: "hierarchical-grid-sorting-styling"
    },
    {
        component: HGridSelectionSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-selection"],
        path: "hierarchical-grid-selection"
    },
    {
        component: HGridSelectionTemplateNumbersSampleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-selection-template-numbers"],
        path: "hierarchical-grid-selection-template-numbers"
    },
    {
        component: HGridSummarySampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-summary"],
        path: "hierarchical-grid-summary"
    },
    {
        component: HGridSummaryStylingComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-summary-styling"],
        path: "hierarchical-grid-summary-styling"
    },
    {
        component: HGridPagingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-paging"],
        path: "hierarchical-grid-paging"
    },
    {
        component: HGridRemotePagingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-remote-paging"],
        path: "hierarchical-grid-remote-paging"
    },
    {
        component: HGridPinningSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-pinning"],
        path: "hierarchical-grid-pinning"
    },
    {
        component: HGridToolbarPinningComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-pinning"],
        path: "hierarchical-grid-toolbar-pinning"
    },
    {
        component: HGridColumnResizingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-resizing"],
        path: "hierarchical-grid-resizing"
    },
    {
        component: HGridResizeLineStylingComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-resize-line-styling"],
        path: "hierarchical-grid-resize-line-styling"
    },
    {
        component: HGridColumnHidingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-hiding"],
        path: "hierarchical-grid-hiding"
    },
    {
        component: HGridCostumHidingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-custom-hiding"],
        path: "hierarchical-grid-custom-hiding"
    },
    {
        component: HGridColumnMovingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-moving"],
        path: "hierarchical-grid-moving"
    },
    {
        component: HGridColumnMovingSampleComponentStyled,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-moving-styled"],
        path: "hierarchical-grid-moving-styled"
    },
    {
        component: HGridDisplayDensitySampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-density"],
        path: "hierarchical-grid-density"
    },
    {
        component: HGridMultiHeadersSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-multi-column"],
        path: "hierarchical-grid-multi-column"
    },
    {
        component: HGridMultiHeadersStylingComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-multi-column-styling"],
        path: "hierarchical-grid-multi-column-styling"
    },
    {
        component: HGridMultiCellStyleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-multi-cell-style"],
        path: "hierarchical-grid-multi-cell-style"
    },
    {
        component: HGridToolbarTitleSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-title"],
        path: "hierarchical-grid-toolbar-title"
    },
    {
        component: HGridToolbarOptionsSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-options"],
        path: "hierarchical-grid-toolbar-options"
    },
    {
        component: HGridToolbarCustomSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-custom"],
        path: "hierarchical-grid-toolbar-custom"
    },
    {
        component: HGridRowEditingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-row-editing"],
        path: "hierarchical-grid-row-editing"
    },
    {
        component: HGridRowEditStyleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-row-edit-style"],
        path: "hierarchical-grid-row-edit-style"
    },
    {
        component: HGridDragSampleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-row-drag"],
        path: "hierarchical-grid-row-drag"
    },
    {
        component: HGridRowDragBaseComponent,
        data: hierarchicalGridRoutesData["hierarchical-row-drag-base"],
        path: "hierarchical-row-drag-base"
    },
    {
        component: HGridMultiRowDragComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-multi-row-drag"],
        path: "hierarchical-grid-multi-row-drag"
    },
    {
        component: HGridRowReorderComponent,
        data: hierarchicalGridRoutesData["hierarchical-row-reorder"],
        path: "hierarchical-row-reorder"
    },
    {
        component: HGridEditingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-editing"],
        path: "hierarchical-grid-editing"
    },
    {
        component: HGridEditingEventsComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-editing-events"],
        path: "hierarchical-grid-editing-events"
    },
    {
        component: HGridEditingStyleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-editing-style"],
        path: "hierarchical-grid-editing-style"
    },
    {
        component: HGridBatchEditingSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-batch-editing"],
        path: "hierarchical-grid-batch-editing"
    },
    {
        component: HierarchicalGridLoDSampleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-lod"],
        path: "hierarchical-grid-lod"
    },
    {
        component: HGridCustomKBNavigationComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-custom-kb-navigation"],
        path: "hierarchical-grid-custom-kb-navigation"
    },
    {
        component: HGridPagingStyleSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-paging-style"],
        path: "hierarchical-grid-paging-style"
    },
    {
        component: HierarchicalGridColumnHidingToolbarStyleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-column-hiding-style"],
        path: "hierarchical-grid-column-hiding-style"
    },
    {
        component: HGridMultiHeaderTemplateSampleComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-multi-column-template"],
        path: "hierarchical-grid-multi-column-template"
    },
    {
        component: HierarchicalGridToolbarStyleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-toolbar-style"],
        path: "hierarchical-grid-toolbar-style"
    },
    {
        component: HierarchicalGridFilteringStyleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-filtering-style"],
        path: "hierarchical-grid-filtering-style"
    },
    {
        component: HGridAdvancedFilteringSampleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-advanced-filtering"],
        path: "hierarchical-grid-advanced-filtering"
    },
    {
        component: HGridAdvancedFilteringStyleComponent,
        // tslint:disable-next-line:no-string-literal
        data: hierarchicalGridRoutesData["hierarchical-grid-advanced-filtering-style"],
        path: "hierarchical-grid-advanced-filtering-style"
    },
    {
        component: HGridStylingComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-styling"],
        path: "hierarchical-grid-styling"
    },
    {
        component: HGridConditionalRowSelectorsComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-conditional-row-selectors"],
        path: "hierarchical-grid-conditional-row-selectors"
    },
    {
        component: HGridCollapsibleColumnGroupComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-collapsible-column-groups"],
        path: "hierarchical-grid-collapsible-column-groups"
    },
    {
        component: HGridAllDataSummaryComponent,
        data: hierarchicalGridRoutesData["hierarchical-grid-allData-summary"],
        path: "hierarchical-grid-allData-summary"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(hierarchicalGridRoutes)
    ]
})
export class HierarchicalGridRoutingModule { }
