// tslint:disable:max-line-length
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxColumnHidingModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxTreeGridModule
} from "igniteui-angular";
import { IgxSparklineCoreModule} from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule} from "igniteui-angular-charts/ES5/igx-sparkline-module";
import { TreeGridBatchEditingSampleComponent } from "../../src/app/tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import { TreeGridWithTransactionsComponent } from "../../src/app/tree-grid/tree-grid-batch-editing/tree-grid-with-transactions.component";
import { TreeGridChilddatakeySampleComponent } from "../../src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridClipboardSampleComponent } from "../../src/app/tree-grid/tree-grid-clipboard-operations-sample/tree-grid-clipboard-operations-sample.component";
import { TreeGridColumnHidingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";
import { TreeGridColumnHidingToolbarSampleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component";
import { TreeGridColumnHidingToolbarStyleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-toolbar-style/tree-grid-column-hiding-toolbar-style.component";
import { TreeGridColumnMovingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-moving-sample/tree-grid-column-moving-sample.component";
import { TreeGridColumnMovingStyledSampleComponent } from "../../src/app/tree-grid/tree-grid-column-moving-styled-sample/tree-grid-column-moving-styled-sample.component";
import { TreeGridColumnPinningSampleComponent } from "../../src/app/tree-grid/tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component";
import { TreeGridPinningToolbarSampleComponent } from "../../src/app/tree-grid/tree-grid-column-pinning-sample/tree-grid-toolbar-pinning.component";

import { TreeGridAdvancedFilteringSampleComponent } from "../../src/app/tree-grid/tree-grid-advanced-filtering-sample/tree-grid-advanced-filtering-sample.component";
import { TreeGridAdvancedFilteringStyleComponent } from "../../src/app/tree-grid/tree-grid-advanced-filtering-style/tree-grid-advanced-filtering-style.component";
import { TreeGridCellSelectionComponent } from "../../src/app/tree-grid/tree-grid-cellSelection-sample/tree-grid-cellSelection.component";
import { TreeGridMultiCollapsibleColumnGroupsComponent } from "../../src/app/tree-grid/tree-grid-collapsible-groups/tree-grid-collapsible-column-groups.component";
import { TreeGridColumnResizingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component";
// tslint:disable-next-line: ordered-imports
import {
    TreeGridConditionalCellStyle2Component
} from "../../src/app/tree-grid/tree-grid-conditional-cell-style-2/tree-grid-conditional-cell-style-2.component";
import { TreeGridConditionalCellStyleComponent } from "../../src/app/tree-grid/tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component";
import {
    TreeGridConditionalRowSelectorsSampleComponent
} from "../../src/app/tree-grid/tree-grid-conditional-row-selectors/tree-grid-conditional-row-selectors.component";
import { TreeGridDisplaydensitySampleComponent } from "../../src/app/tree-grid/tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component";
import { TreeGridEditingEventsComponent } from "../../src/app/tree-grid/tree-grid-editing-events/tree-grid-editing-events.component";
import { TreeGridEditingSampleComponent } from "../../src/app/tree-grid/tree-grid-editing-sample/tree-grid-editing-sample.component";
import { TreeGridEditingStyleComponent } from "../../src/app/tree-grid/tree-grid-editing-style/tree-grid-editing-sample.component";
import { RemoteValuesService } from "../../src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service";
import { TreeGridExcelStyleFilteringLoadOnDemandComponent } from "../../src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/tree-grid-excel-style-filtering-load-on-demand.component";
import {
    TreeGridExcelStyleFilteringSample1Component
} from "../../src/app/tree-grid/tree-grid-excel-style-filtering-sample-1/tree-grid-excel-style-filtering-sample-1.component";
import {
    TreeGridExcelStyleFilteringSample2Component
} from "../../src/app/tree-grid/tree-grid-excel-style-filtering-sample-2/tree-grid-excel-style-filtering-sample-2.component";
import {
    TreeGridExcelStyleFilteringSample3Component
} from "../../src/app/tree-grid/tree-grid-excel-style-filtering-sample-3/tree-grid-excel-style-filtering-sample-3.component";
import {
    TreeGridExcelStyleFilteringStyleComponent
} from "../../src/app/tree-grid/tree-grid-excel-style-filtering-style/tree-grid-excel-style-filtering-style.component";
import { TreeGridExternalAdvancedFilteringComponent } from "../../src/app/tree-grid/tree-grid-external-advanced-filtering/tree-grid-external-advanced-filtering.component";
import { TreeGridExternalExcelStyleFilteringComponent } from "../../src/app/tree-grid/tree-grid-external-excel-style-filtering/tree-grid-external-excel-style-filtering.component";
import { TreeGridFilteringCustomSampleComponent } from "../../src/app/tree-grid/tree-grid-filtering-custom-sample/tree-grid-filtering-custom-sample.component";
import { TreeGridFilteringSampleComponent } from "../../src/app/tree-grid/tree-grid-filtering-sample/tree-grid-filtering-sample.component";
import { TreeGridFilteringStyleComponent } from "../../src/app/tree-grid/tree-grid-filtering-style/tree-grid-filtering-style.component";
import { TreeGridFilteringTemplateSampleComponent } from "../../src/app/tree-grid/tree-grid-filtering-template-sample/tree-grid-filtering-template-sample.component";
import { TreeGridKBNavigationComponent } from "../../src/app/tree-grid/tree-grid-keyboard-navigation/tree-grid-keyboard-navigation-sample.component";
import { TreeGridLoadOnDemandSampleComponent } from "../../src/app/tree-grid/tree-grid-load-on-demand-sample/tree-grid-load-on-demand-sample.component";
import { TreeGridMultiCellSelectionStyleComponent } from "../../src/app/tree-grid/tree-grid-multi-cell-selection-style/tree-grid-multi-cell-selection-style.component";
import { TreeGridMultiCellSelectionComponent } from "../../src/app/tree-grid/tree-grid-multi-cell-selection/tree-grid-multi-cell-selection.component";
import { TreeGridMultiColumnHeaderTemplateSampleComponent } from "../../src/app/tree-grid/tree-grid-multi-column-header-template-sample/tree-grid-multi-column-header-template-sample.component";
import { TreeGridMultiColumnHeadersSampleComponent } from "../../src/app/tree-grid/tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component";
import { TreeGridMultiColumnHeadersStylingComponent } from "../../src/app/tree-grid/tree-grid-multi-column-headers-styling/tree-grid-multi-column-headers-styling.component";
import { TreeGridMultiRowDrag } from "../../src/app/tree-grid/tree-grid-multi-row-drag/tree-grid-multi-row-drag.component";
import { TreeGridPagingSampleComponent } from "../../src/app/tree-grid/tree-grid-paging-sample/tree-grid-paging-sample.component";
import { TreeGridPagingStyleSampleComponent } from "../../src/app/tree-grid/tree-grid-paging-style/tree-grid-paging-style-sample.component";
import { TreeGridPrimaryforeignkeySampleComponent } from "../../src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRemoteFilteringSampleComponent } from "../../src/app/tree-grid/tree-grid-remote-filtering-sample/tree-grid-remote-filtering-sample.component";
import { TreeGridRemotePagingSampleComponent } from "../../src/app/tree-grid/tree-grid-remote-paging-sample/tree-grid-remote-paging-sample.component";
import { TreeGridResizeLineStylingSampleComponent } from "../../src/app/tree-grid/tree-grid-resize-line-styling-sample/tree-grid-resize-line-styling-sample.component";
import { TreeGridRowDragBase } from "../../src/app/tree-grid/tree-grid-row-drag-base/tree-grid-row-drag-base.component";
import { TreeGridRowDrag } from "../../src/app/tree-grid/tree-grid-row-drag/tree-grid-row-drag.component";
import { TreeGridRowEditStyleComponent } from "../../src/app/tree-grid/tree-grid-row-edit-style/tree-grid-row-edit-style.component";
import { TreeGridRowEditSampleComponent } from "../../src/app/tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridRowReorderComponent } from "../../src/app/tree-grid/tree-grid-row-reorder/tree-grid-row-reorder.component";
import { TreeGridSearchSampleComponent } from "../../src/app/tree-grid/tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "../../src/app/tree-grid/tree-grid-selection-sample/tree-grid-selection-sample.component";
import { TreeGridSelectionTemplateNumbersSampleComponent } from "../../src/app/tree-grid/tree-grid-selection-template-numbers/tree-grid-selection-template-numbers.component";
import { TreeGridContextmenuComponent } from "../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component";
import { TreeGridSortingSampleComponent } from "../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-sorting-sample.component";
import { TreeGridSortingStylingComponent } from "../../src/app/tree-grid/tree-grid-sorting-styling/tree-grid-sorting-styling.component";
import { TreeGridStyleComponent } from "../../src/app/tree-grid/tree-grid-style/tree-grid-style.component";
import { TreeGridSummarySampleComponent } from "../../src/app/tree-grid/tree-grid-summary-sample/tree-grid-summary-sample.component";
import { TreeGridSummaryStylingComponent } from "../../src/app/tree-grid/tree-grid-summary-styling/tree-grid-summary-styling.component";
import { TreeGridSummary2SampleComponent } from "../../src/app/tree-grid/tree-grid-summary2-sample/tree-grid-summary2-sample.component";
import { TreeGridToolbarSample1Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component";
import { TreeGridToolbarSample2Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-2/tree-grid-toolbar-sample-2.component";
import { TreeGridToolbarSample3Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-3/tree-grid-toolbar-sample-3.component";
import { TreeGridToolbarSample4Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-4/tree-grid-toolbar-sample-4.component";
import { TreeGridToolbarStyleComponent } from "../../src/app/tree-grid/tree-grid-toolbar-style/tree-grid-toolbar-style.component";
import { TreeGridVirtualizationSampleComponent } from "../../src/app/tree-grid/tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";
import { TreeGridAllDataSummaryComponent } from "../../src/app/tree-grid/treegrid-allData-summary/treegrid-allData-summary.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TreeGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TreeGrid ChildDataKey Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridChilddatakeySampleComponent, IgxExcelExporterService, IgxCsvExporterService, IgxSparklineCoreModule, IgxSparklineModule],
                ngDeclarations: [TreeGridChilddatakeySampleComponent],
                ngImports: [IgxTreeGridModule, IgxSparklineCoreModule, IgxSparklineModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            }),
            component: TreeGridChilddatakeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPrimaryforeignkeySampleComponent, IgxSparklineCoreModule, IgxSparklineModule],
                ngDeclarations: [TreeGridPrimaryforeignkeySampleComponent],
                ngImports: [IgxTreeGridModule, IgxSparklineCoreModule, IgxSparklineModule]
            }),
            component: TreeGridPrimaryforeignkeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Row Edit Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRowEditSampleComponent],
                ngDeclarations: [TreeGridRowEditSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridRowEditSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Row Edit Style
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRowEditStyleComponent, IgxIconModule],
                ngDeclarations: [TreeGridRowEditStyleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridRowEditStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Virtualization sample
        configs.push(new Config({
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, IgxBadgeModule, TreeGridVirtualizationSampleComponent],
                ngDeclarations: [TreeGridVirtualizationSampleComponent],
                ngImports: [IgxTreeGridModule, IgxBadgeModule]
            }),
            component: TreeGridVirtualizationSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Conditional Cell Style sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridConditionalCellStyleComponent],
                ngDeclarations: [TreeGridConditionalCellStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridConditionalCellStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Batch Editing sample
        configs.push(new Config({
            additionalFiles: [
                "/src/app/data/utils.ts",
                "/src/app/tree-grid/data/employees-flat.ts",
                "/src/app/tree-grid/tree-grid-batch-editing/tree-grid-with-transactions.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridBatchEditingSampleComponent, TreeGridWithTransactionsComponent,
                    IgxButtonModule, IgxDialogModule, IgxGridModule],
                ngDeclarations: [TreeGridBatchEditingSampleComponent, TreeGridWithTransactionsComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxDialogModule, IgxGridModule]
            }),
            component: TreeGridBatchEditingSampleComponent
        }));

        // TreeGrid Search sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSearchSampleComponent, IgxButtonModule,
                    IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxChipsModule],
                ngDeclarations: [TreeGridSearchSampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxChipsModule]
            }),
            component: TreeGridSearchSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Hiding sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnHidingSampleComponent, IgxRadioModule, IgxColumnHidingModule],
                ngDeclarations: [TreeGridColumnHidingSampleComponent],
                ngImports: [IgxTreeGridModule, IgxRadioModule, IgxColumnHidingModule]
            }),
            component: TreeGridColumnHidingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Hiding Toolbar sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnHidingToolbarSampleComponent],
                ngDeclarations: [TreeGridColumnHidingToolbarSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridColumnHidingToolbarSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Hiding Toolbar style sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnHidingToolbarStyleComponent],
                ngDeclarations: [TreeGridColumnHidingToolbarStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridColumnHidingToolbarStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Selection sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSelectionSampleComponent,
                    IgxSwitchModule, IgxSnackbarModule, IgxButtonGroupModule],
                ngDeclarations: [TreeGridSelectionSampleComponent],
                ngImports: [IgxTreeGridModule, IgxSwitchModule, IgxSnackbarModule, IgxButtonGroupModule]
            }),
            component: TreeGridSelectionSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Sorting sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts",
                "/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.html",
                "/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.ts",
                "/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSortingSampleComponent, IgxIconModule, TreeGridContextmenuComponent],
                ngDeclarations: [TreeGridSortingSampleComponent, TreeGridContextmenuComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridSortingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Sorting Styling sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSortingStylingComponent, IgxIconModule],
                ngDeclarations: [TreeGridSortingStylingComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridSortingStylingComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Moving sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnMovingSampleComponent, IgxIconModule],
                ngDeclarations: [TreeGridColumnMovingSampleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridColumnMovingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnMovingStyledSampleComponent, IgxIconModule],
                ngDeclarations: [TreeGridColumnMovingStyledSampleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridColumnMovingStyledSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Pinning sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnPinningSampleComponent, IgxIconModule],
                ngDeclarations: [TreeGridColumnPinningSampleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridColumnPinningSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Toolbar Pinning sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPinningToolbarSampleComponent, IgxIconModule],
                ngDeclarations: [TreeGridPinningToolbarSampleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridPinningToolbarSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Resizing sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridColumnResizingSampleComponent],
                ngDeclarations: [TreeGridColumnResizingSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridColumnResizingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Column Resizing Line Styling sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridResizeLineStylingSampleComponent],
                ngDeclarations: [TreeGridResizeLineStylingSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridResizeLineStylingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Filtering Style sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridFilteringStyleComponent],
                ngDeclarations: [TreeGridFilteringStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridFilteringStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Filtering sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridFilteringSampleComponent, IgxInputGroupModule],
                ngDeclarations: [TreeGridFilteringSampleComponent],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule]
            }),
            component: TreeGridFilteringSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridFilteringTemplateSampleComponent, IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [TreeGridFilteringTemplateSampleComponent],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule, IgxDatePickerModule]
            }),
            component: TreeGridFilteringTemplateSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExcelStyleFilteringSample1Component, IgxInputGroupModule, IgxButtonGroupModule],
                ngDeclarations: [TreeGridExcelStyleFilteringSample1Component],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule, IgxButtonGroupModule]
            }),
            component: TreeGridExcelStyleFilteringSample1Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExcelStyleFilteringSample2Component, IgxInputGroupModule],
                ngDeclarations: [TreeGridExcelStyleFilteringSample2Component],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule]
            }),
            component: TreeGridExcelStyleFilteringSample2Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExcelStyleFilteringSample3Component, IgxInputGroupModule],
                ngDeclarations: [TreeGridExcelStyleFilteringSample3Component],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule]
            }),
            component: TreeGridExcelStyleFilteringSample3Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExcelStyleFilteringStyleComponent],
                ngDeclarations: [TreeGridExcelStyleFilteringStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridExcelStyleFilteringStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Custom Filtering sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridFilteringCustomSampleComponent, IgxInputGroupModule],
                ngDeclarations: [TreeGridFilteringCustomSampleComponent],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule]
            }),
            component: TreeGridFilteringCustomSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Multi Column Headers sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridMultiColumnHeadersSampleComponent, IgxButtonModule],
                ngDeclarations: [TreeGridMultiColumnHeadersSampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule]
            }),
            component: TreeGridMultiColumnHeadersSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Multi Column Headers Styling
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridMultiColumnHeadersStylingComponent, IgxButtonModule],
                ngDeclarations: [TreeGridMultiColumnHeadersStylingComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule]
            }),
            component: TreeGridMultiColumnHeadersStylingComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Display Density sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridDisplaydensitySampleComponent, IgxButtonGroupModule],
                ngDeclarations: [TreeGridDisplaydensitySampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonGroupModule]
            }),
            component: TreeGridDisplaydensitySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Toolbar sample 1
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-avatars.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridToolbarSample1Component, IgxAvatarModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [TreeGridToolbarSample1Component],
                ngImports: [IgxTreeGridModule, IgxAvatarModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            }),
            component: TreeGridToolbarSample1Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Toolbar sample 2
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-avatars.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridToolbarSample2Component, IgxAvatarModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [TreeGridToolbarSample2Component],
                ngImports: [IgxTreeGridModule, IgxAvatarModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            }),
            component: TreeGridToolbarSample2Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Toolbar sample 3
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-avatars.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridToolbarSample3Component, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule],
                ngDeclarations: [TreeGridToolbarSample3Component],
                ngImports: [IgxTreeGridModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule],
                ngProviders: []
            }),
            component: TreeGridToolbarSample3Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Toolbar sample 4
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-avatars.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridToolbarSample4Component, IgxAvatarModule],
                ngDeclarations: [TreeGridToolbarSample4Component],
                ngImports: [IgxTreeGridModule, IgxAvatarModule],
                ngProviders: []
            }),
            component: TreeGridToolbarSample4Component,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Toolbar style sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-avatars.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridToolbarStyleComponent, IgxAvatarModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [TreeGridToolbarStyleComponent],
                ngImports: [IgxTreeGridModule, IgxAvatarModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            }),
            component: TreeGridToolbarStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Summary sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSummarySampleComponent, IgxIconModule],
                ngDeclarations: [TreeGridSummarySampleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridSummarySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Summay Styling sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSummaryStylingComponent, IgxIconModule],
                ngDeclarations: [TreeGridSummaryStylingComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridSummaryStylingComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Summary2 sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule, IgxTreeGridModule, TreeGridSummary2SampleComponent, IgxIconModule],
                ngDeclarations: [TreeGridSummary2SampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule, IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridSummary2SampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPagingSampleComponent, IgxButtonModule, IgxRippleModule, IgxIconModule],
                ngDeclarations: [TreeGridPagingSampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxRippleModule, IgxIconModule]
            }),
            component: TreeGridPagingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Editing sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts", "/src/app/tree-grid/tree-grid-editing-sample/employee.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridEditingSampleComponent, IgxButtonModule, IgxDialogModule,
                    IgxInputGroupModule, IgxCheckboxModule, IgxDatePickerModule],
                ngDeclarations: [TreeGridEditingSampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxDialogModule, IgxInputGroupModule, IgxCheckboxModule, IgxDatePickerModule]
            }),
            component: TreeGridEditingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [TreeGridEditingEventsComponent, IgxTreeGridModule, IgxToastModule],
                ngDeclarations: [TreeGridEditingEventsComponent],
                ngImports: [IgxTreeGridModule, IgxToastModule]
            }),
            component: TreeGridEditingEventsComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridEditingStyleComponent],
                ngDeclarations: [TreeGridEditingStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridEditingStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExternalExcelStyleFilteringComponent],
                ngDeclarations: [TreeGridExternalExcelStyleFilteringComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridExternalExcelStyleFilteringComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExternalAdvancedFilteringComponent],
                ngDeclarations: [TreeGridExternalAdvancedFilteringComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridExternalAdvancedFilteringComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Remote Filtering sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts", "/src/app/tree-grid/services/remoteFilteringService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRemoteFilteringSampleComponent, IgxIconModule, IgxToastModule],
                ngDeclarations: [TreeGridRemoteFilteringSampleComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule, IgxToastModule]
            }),
            component: TreeGridRemoteFilteringSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid multi cell selection
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [TreeGridMultiCellSelectionComponent, IgxGridModule, IgxTreeGridModule, IgxToastModule, IgxSnackbarModule],
                ngDeclarations: [TreeGridMultiCellSelectionComponent],
                ngImports: [IgxGridModule, IgxTreeGridModule, IgxToastModule, IgxSnackbarModule]
            }),
            component: TreeGridMultiCellSelectionComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid multi cell selection - styling
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [TreeGridMultiCellSelectionStyleComponent, IgxTreeGridModule],
                ngDeclarations: [TreeGridMultiCellSelectionStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridMultiCellSelectionStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-load-on-demand-sample/remoteService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridLoadOnDemandSampleComponent],
                ngDeclarations: [TreeGridLoadOnDemandSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridLoadOnDemandSampleComponent
        }));

        // TreeGrid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service.ts",
                              "/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridExcelStyleFilteringLoadOnDemandComponent, IgxIconModule, RemoteValuesService],
                ngDeclarations: [TreeGridExcelStyleFilteringLoadOnDemandComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule],
                ngProviders: [RemoteValuesService]
            }),
            component: TreeGridExcelStyleFilteringLoadOnDemandComponent
        }));

        // Tree Grid Row Drag - Advanced Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRowDrag, IgxButtonModule,
                    IgxInputGroupModule, IgxIconModule, IgxDragDropModule],
                ngDeclarations: [TreeGridRowDrag],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxInputGroupModule, IgxIconModule, IgxDragDropModule]
            }),
            component: TreeGridRowDrag,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // Tree Grid Row Drag - Base Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRowDragBase, IgxButtonModule,
                    IgxInputGroupModule, IgxDragDropModule],
                ngDeclarations: [TreeGridRowDragBase],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxInputGroupModule, IgxDragDropModule]
            }),
            component: TreeGridRowDragBase,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // Tree Grid Multi Row Drag sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridMultiRowDrag, IgxButtonModule,
                    IgxInputGroupModule, IgxIconModule, IgxDragDropModule],
                ngDeclarations: [TreeGridMultiRowDrag],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxInputGroupModule, IgxIconModule, IgxDragDropModule]
            }),
            component: TreeGridMultiRowDrag,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // Tree Grid Row Rerdering sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRowReorderComponent, IgxDragDropModule],
                ngDeclarations: [TreeGridRowReorderComponent],
                ngImports: [IgxTreeGridModule, IgxDragDropModule]
            }),
            component: TreeGridRowReorderComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // Tree Grid Keyboard Navigation Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridKBNavigationComponent],
                ngDeclarations: [TreeGridKBNavigationComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridKBNavigationComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // Tree Grid Remote Paging Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-remote-paging-sample/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRemotePagingSampleComponent, IgxSelectModule],
                ngDeclarations: [TreeGridRemotePagingSampleComponent],
                ngImports: [IgxTreeGridModule, IgxSelectModule]
            }),
            component: TreeGridRemotePagingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPagingStyleSampleComponent, IgxButtonModule, IgxRippleModule, IgxIconModule],
                ngDeclarations: [TreeGridPagingStyleSampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxRippleModule, IgxIconModule]
            }),
            component: TreeGridPagingStyleSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Multi Column Header Template sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridMultiColumnHeaderTemplateSampleComponent],
                ngDeclarations: [TreeGridMultiColumnHeaderTemplateSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridMultiColumnHeaderTemplateSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Clipboard actions sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridClipboardSampleComponent, IgxSwitchModule],
                ngDeclarations: [TreeGridClipboardSampleComponent],
                ngImports: [IgxTreeGridModule, IgxSwitchModule]
            }),
            component: TreeGridClipboardSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));
        // Tree Grid cell selection sample
        configs.push(new Config({
            component: TreeGridCellSelectionComponent,
            additionalFiles: ["/src/app/data/utils.ts", "/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [TreeGridCellSelectionComponent, IgxGridModule, IgxSwitchModule,
                    IgxIconModule, IgxButtonGroupModule, IgxAvatarModule],
                ngDeclarations: [TreeGridCellSelectionComponent, IgxGridModule, IgxIconModule, IgxSwitchModule,
                    IgxButtonGroupModule, IgxAvatarModule],
                ngImports: [IgxGridModule]
            })
        }));

        // TreeGrid Advanced Filtering sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridAdvancedFilteringSampleComponent],
                ngDeclarations: [TreeGridAdvancedFilteringSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridAdvancedFilteringSampleComponent
        }));

        // TreeGrid Advanced Filtering Style sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridAdvancedFilteringStyleComponent],
                ngDeclarations: [TreeGridAdvancedFilteringStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridAdvancedFilteringStyleComponent
        }));

        // TreeGrid Conditional Row Selection Template actions sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridConditionalRowSelectorsSampleComponent, IgxCheckboxModule],
                ngDeclarations: [TreeGridConditionalRowSelectorsSampleComponent],
                ngImports: [IgxTreeGridModule, IgxCheckboxModule]
            }),
            component: TreeGridConditionalRowSelectorsSampleComponent
        }));

        // TreeGrid Row Selectors Template - Numbers
        configs.push(new Config({
            additionalFiles: [
                "/src/app/tree-grid/data/employees-flat.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCheckboxModule, IgxTreeGridModule, TreeGridSelectionTemplateNumbersSampleComponent],
                ngDeclarations: [TreeGridSelectionTemplateNumbersSampleComponent],
                ngImports: [IgxCheckboxModule, IgxTreeGridModule]
            }),
            component: TreeGridSelectionTemplateNumbersSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-avatars.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridStyleComponent, IgxAvatarModule],
                ngDeclarations: [TreeGridStyleComponent],
                ngImports: [IgxTreeGridModule, IgxAvatarModule]
            }),
            component: TreeGridStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid cellStyles
        configs.push(new Config({
            component: TreeGridConditionalCellStyle2Component,
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridConditionalCellStyle2Component],
                ngDeclarations: [TreeGridConditionalCellStyle2Component],
                ngImports: [IgxTreeGridModule]
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat-detailed.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, IgxTooltipModule, TreeGridMultiCollapsibleColumnGroupsComponent],
                ngDeclarations: [TreeGridMultiCollapsibleColumnGroupsComponent],
                ngImports: [IgxTreeGridModule, IgxTooltipModule]
            }),
            component: TreeGridMultiCollapsibleColumnGroupsComponent
        }));

        configs.push(new Config({
            additionalFiles: [
                "/src/app/tree-grid/data/employees-flat.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridAllDataSummaryComponent],
                ngDeclarations: [TreeGridAllDataSummaryComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridAllDataSummaryComponent
        }));

        return configs;
    }
}
