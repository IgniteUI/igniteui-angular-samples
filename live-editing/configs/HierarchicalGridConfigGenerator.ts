// tslint:disable:max-line-length
import { HttpClientModule } from "@angular/common/http";
import { IgxActionStripModule, IgxAvatarModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule, IgxDragDropModule, IgxGridModule, IgxHierarchicalGridAPIService, IgxHierarchicalGridModule, IgxIconModule, IgxInputGroupModule, IgxListModule, IgxOverlayService, IgxSelectModule, IgxSnackbarModule, IgxSwitchModule, IgxToastModule, IgxTooltipModule, IgxToggleModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "../../src/app/directives/prevent-scroll.directive";
import { HierarchicalGridColumnGroupSelectionComponent } from "../../src/app/hierarchical-grid/column-group-selection/hierarchical-grid-column-group-selection.component";
import { HGridColumnSelectionStylesComponent } from "../../src/app/hierarchical-grid/column-selection-styles/hierarchical-grid-column-selection-styles.component";
import { HierarchicalGridColumnSelectionComponent } from "../../src/app/hierarchical-grid/column-selection/hierarchical-grid-column-selection.component";
import { HGridKeyboardnavGuide } from "../../src/app/hierarchical-grid/hgrid-keybarod-nav-guide-sample/hgrid-keyboard-guide.component";
import { HGridAdvancedFilteringStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-advanced-filtering-style/hierarchical-grid-advanced-filtering-style.component";
import { HGridAdvancedFilteringSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-advanced-filtering/hierarchical-grid-advanced-filtering.component";
import { HGridAllDataSummaryComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-allData-summary/hierarchical-grid-allData-summary.component";
import { HGridBatchEditingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HierarchicalGridWithTransactionsComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-transactions.component";
import { HGridCollapsibleColumnGroupComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-collapsible-column-groups/hierarchical-grid-collapsible-column-groups.component";
import { HierarchicalGridColumnHidingToolbarStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-hiding-toolbar-style/hierarchical-grid-column-hiding-toolbar-style.component";
import { HGridCostumHidingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component";
import { HGridColumnHidingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";
import { HGridColumnMovingSampleComponentStyled } from "../../src/app/hierarchical-grid/hierarchical-grid-column-moving-styled/hierarchical-grid-moving-styled.component";
import { HGridColumnMovingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-moving/hierarchical-grid-moving.component";
import { HGridPinningSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";
import { HGridToolbarPinningComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-toolbar-pinning.component";
import { HGridConditionalRowSelectorsComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-conditional-row-selectors/hierarchical-grid-conditional-row-selectors.component";
import { HGridCustomKBNavigationComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-custom-kb-navigation/hierarchical-grid-custom-kb-navigation-sample.component";
import { HGridDisplayDensitySampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-display-density/hierarchical-grid-density.component";
import { HGridEditingEventsComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-editing-events/hierarchical-grid-editing-events.component";
import { HGridEditingStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-editing-style/hierarchical-grid-editing-style.component";
import { HGridEditingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-editing/hierarchical-grid-editing.component";
import { HierarchicalGridExcelStyleFilteringLoadOnDemandComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand/hierarchical-grid-excel-style-filtering-load-on-demand.component";
import { RemoteValuesService } from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand/remoteValues.service";
import { HGridExcelStyleFilteringSample1Component } from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-1/hierarchical-grid-excel-style-filtering-sample-1.component";
import { HGridExcelStyleFilteringSample2Component } from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-2/hierarchical-grid-excel-style-filtering-sample-2.component";
import { HGridExcelStyleFilteringSample3Component } from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-3/hierarchical-grid-excel-style-filtering-sample-3.component";
import { HGridExcelStyleFilteringStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-style/hierarchical-grid-excel-style-filtering-style.component";
import { HGridExternalAdvancedFilteringComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-external-advanced-filtering/hierarchical-grid-external-advanced-filtering.component";
import { HGridExternalExcelStyleFilteringComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-external-excel-style-filtering/hierarchical-grid-external-excel-style-filtering.component";
import { HierarchicalGridFilteringStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-filtering-style/hierarchical-grid-filtering-style.component";
import { HGridFilteringTemplateSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-filtering-template/hierarchical-grid-filtering-template.component";
import { HGridCustomFilteringSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component";
import { HGridFilteringSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HierarchicalGridLoDSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HGridMultiCellStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-cell-style/hierarchical-grid-multi-cell-style.component";
import { HGridMultiHeaderTemplateSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-column-header-template/hierarchical-grid-multi-column-template.component";
import { HGridMultiHeadersStylingComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-column-headers-styling/hierarchical-grid-multi-column-styling.component";
import { HGridMultiHeadersSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component";
import { HGridMultiRowDragComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-row-drag/hierarchical-grid-multi-row-drag.component";
import { HGridPagingStyleSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-paging-style/hierarchical-grid-paging-style.component";
import { HGridPagingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-paging.component";
import { HGridRemotePagingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import { HGridRemotePagingDefaultTemplateComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-remote-paging-default-template/hierarchical-grid-remote-paging-default-template.component";
import { HGridResizeLineStylingComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-resize-line-styling/hierarchical-grid-resize-line-styling.component";
import { HGridRowDragBaseComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-drag-base/hierarchical-row-drag-base.component";
import { HGridDragSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-drag/hierarchical-grid-row-drag.component";
import { HGridRowEditStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-edit-style/hierarchical-grid-row-edit-style.component";
import { HGridRowEditingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-editing/hierarchical-grid-row-editing.component";
import { HGridRowPinningExtraColumnSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-row-pinning-extra-column/hierarchical-grid-row-pinning-extra-column.component';
import { HGridRowPinningStylingSampleComponent } from'../../src/app/hierarchical-grid/hierarchical-grid-row-pinning-styling/hierarchical-grid-row-pinning-styling.component';
import { HGridRowPinningSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-row-pinning/hierarchical-grid-row-pinning.component';
import { HGridRowReorderComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-reorder/hierarchical-grid-row-reorder.component";
import { HierarchicalGridRightPinningSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-sample-right-pinning/hierarchical-grid-right-pinning.component";
import { HGridSelectionTemplateNumbersSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-selection-template-numbers/hierarchical-grid-selection-template-numbers.component";
import { HGridSelectionSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridSortingStylingComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-sorting-styling/hierarchical-grid-sorting-styling.component";
import { HGridContextmenuComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component";
import { HGridSortingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridStylingComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-styling/hierarchical-grid-styling.component";
import { HGridSummaryStylingComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-summary-styling/hierarchical-grid-summary-styling.component";
import { HGridSummarySampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-summary/hierarchical-grid-summary.component";
import { HierarchicalGridToolbarStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar-style/hierarchical-grid-toolbar-style.component";
import { HGridToolbarCustomSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component";
import { HGridToolbarOptionsSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { HGridToolbarTitleSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component";
import { RemoteLoDService } from "../../src/app/hierarchical-grid/services/remote-lod.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { HGridSaveStateComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-save-state/hGrid-state.component";
import { HGridAboutComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-save-state/about.component";
import { HierarchicalGridExternalOutletComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-external-outlet/hierarchical-grid-external-outlet-sample.component";

export class HierarchicalGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/models.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridEditingSampleComponent, IgxDialogModule,
                    IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridEditingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxDialogModule, IgxButtonModule, IgxCheckboxModule,
                    IgxDatePickerModule]
            }),
            component: HGridEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/models.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridEditingEventsComponent, IgxToastModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridEditingEventsComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxToastModule]
            }),
            component: HGridEditingEventsComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowEditingSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowEditingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridRowEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowEditStyleComponent, IgxIconModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowEditStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxIconModule]
            }),
            component: HGridRowEditStyleComponent

        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridEditingStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridEditingStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridEditingStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/models.ts",
                "/src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-transactions.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridBatchEditingSampleComponent,
                    HierarchicalGridWithTransactionsComponent, IgxButtonModule, IgxCheckboxModule,
                    IgxDatePickerModule, IgxGridModule, IgxDialogModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridBatchEditingSampleComponent, HierarchicalGridWithTransactionsComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxButtonModule, IgxCheckboxModule,
                    IgxDatePickerModule, IgxGridModule, IgxDialogModule]
            }),
            component: HGridBatchEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridFilteringStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HierarchicalGridFilteringStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HierarchicalGridFilteringStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridFilteringSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridFilteringSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridFilteringSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridFilteringTemplateSampleComponent, IgxInputGroupModule, IgxDatePickerModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridFilteringTemplateSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxInputGroupModule, IgxDatePickerModule]
            }),
            component: HGridFilteringTemplateSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringSample1Component, IgxButtonGroupModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridExcelStyleFilteringSample1Component],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxButtonGroupModule]
            }),
            component: HGridExcelStyleFilteringSample1Component
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringSample2Component, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridExcelStyleFilteringSample2Component],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridExcelStyleFilteringSample2Component
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringSample3Component, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridExcelStyleFilteringSample3Component],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridExcelStyleFilteringSample3Component
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridExcelStyleFilteringStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridExcelStyleFilteringStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExternalExcelStyleFilteringComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridExternalExcelStyleFilteringComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridExternalExcelStyleFilteringComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExternalAdvancedFilteringComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridExternalAdvancedFilteringComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridExternalAdvancedFilteringComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridCustomFilteringSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridCustomFilteringSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridCustomFilteringSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.ts",
                "/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.scss",
                "/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSortingSampleComponent, HGridContextmenuComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSortingSampleComponent, HGridContextmenuComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridSortingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSortingStylingComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSortingStylingComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridSortingStylingComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSelectionSampleComponent, IgxSwitchModule,
                IgxSnackbarModule, IgxButtonGroupModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSelectionSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxSwitchModule, IgxSnackbarModule, IgxButtonGroupModule]
            }),
            component: HGridSelectionSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSummaryStylingComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSummaryStylingComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridSummaryStylingComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSummarySampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSummarySampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridSummarySampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridPagingSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridPagingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridPagingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/hierarchical-grid-paging/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRemotePagingSampleComponent, HttpClientModule, IgxSelectModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRemotePagingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, HttpClientModule, IgxSelectModule]
            }),
            component: HGridRemotePagingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridDisplayDensitySampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridDisplayDensitySampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridDisplayDensitySampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnMovingSampleComponentStyled, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridColumnMovingSampleComponentStyled],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridColumnMovingSampleComponentStyled
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnMovingSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridColumnMovingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridColumnMovingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridPinningSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridPinningSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridPinningSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarPinningComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridToolbarPinningComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridToolbarPinningComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridResizeLineStylingComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridResizeLineStylingComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridResizeLineStylingComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnHidingSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridColumnHidingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridColumnHidingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridColumnHidingToolbarStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HierarchicalGridColumnHidingToolbarStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HierarchicalGridColumnHidingToolbarStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridCostumHidingSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridCostumHidingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridCostumHidingSampleComponent
        }));

        // HGrid Multi Cell Selection Styling
        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiCellStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridMultiCellStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridMultiCellStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiHeadersSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridMultiHeadersSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridMultiHeadersSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiHeadersStylingComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridMultiHeadersStylingComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridMultiHeadersStylingComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarTitleSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridToolbarTitleSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridToolbarTitleSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarOptionsSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridToolbarOptionsSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridToolbarOptionsSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarCustomSampleComponent, IgxButtonModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridToolbarCustomSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxButtonModule]
            }),
            component: HGridToolbarCustomSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridToolbarStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HierarchicalGridToolbarStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HierarchicalGridToolbarStyleComponent
        }));

        // Hierarchical Grid Load on Demand Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/services/remote-lod.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridLoDSampleComponent, RemoteLoDService, HttpClientModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HierarchicalGridLoDSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, HttpClientModule],
                ngProviders: [RemoteLoDService]
            }),
            component: HierarchicalGridLoDSampleComponent
        }));

        // Hierarchical Grid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand/remoteValues.service.ts",
                              "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridExcelStyleFilteringLoadOnDemandComponent, RemoteValuesService, IgxPreventDocumentScrollModule],
                ngDeclarations: [HierarchicalGridExcelStyleFilteringLoadOnDemandComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule],
                ngProviders: [RemoteValuesService]
            }),
            component: HierarchicalGridExcelStyleFilteringLoadOnDemandComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/utils.ts", "/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridDragSampleComponent, IgxDragDropModule, IgxIconModule, IgxButtonModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridDragSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxDragDropModule, IgxIconModule, IgxButtonModule]
            }),
            component: HGridDragSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/utils.ts", "/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowDragBaseComponent, IgxDragDropModule, IgxButtonModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowDragBaseComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxDragDropModule, IgxButtonModule]
            }),
            component: HGridRowDragBaseComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/data/utils.ts",
                "/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiRowDragComponent, IgxDragDropModule, IgxButtonModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridMultiRowDragComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxDragDropModule, IgxButtonModule]
            }),
            component: HGridMultiRowDragComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridCustomKBNavigationComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridCustomKBNavigationComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridCustomKBNavigationComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/utils.ts", "/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, IgxDragDropModule, HGridRowReorderComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowReorderComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxDragDropModule]
            }),
            component: HGridRowReorderComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridPagingStyleSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridPagingStyleSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridPagingStyleSampleComponent,
            shortenComponentPathBy: "/hierarchical-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiHeaderTemplateSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridMultiHeaderTemplateSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridMultiHeaderTemplateSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridStylingComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridStylingComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridStylingComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridAdvancedFilteringSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridAdvancedFilteringSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridAdvancedFilteringSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridAdvancedFilteringStyleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridAdvancedFilteringStyleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridAdvancedFilteringStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts",
                "/src/app/hierarchical-grid/data.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridConditionalRowSelectorsComponent, IgxCheckboxModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridConditionalRowSelectorsComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxCheckboxModule]
            }),
            component: HGridConditionalRowSelectorsComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCheckboxModule, IgxHierarchicalGridModule, HGridSelectionTemplateNumbersSampleComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSelectionTemplateNumbersSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxCheckboxModule, IgxHierarchicalGridModule]
            }),
            component: HGridSelectionTemplateNumbersSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, IgxTooltipModule, HGridCollapsibleColumnGroupComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridCollapsibleColumnGroupComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxTooltipModule]
            }),
            component: HGridCollapsibleColumnGroupComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridAllDataSummaryComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridAllDataSummaryComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule]
            }),
            component: HGridAllDataSummaryComponent
        }));

        configs.push(new Config({
            additionalFiles: [
                "/src/app/hierarchical-grid/services/data.ts",
                "/src/app/data/athletesData.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [HierarchicalGridRightPinningSampleComponent, IgxHierarchicalGridModule, IgxAvatarModule, IgxTooltipModule],
                ngDeclarations: [HierarchicalGridRightPinningSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxAvatarModule, IgxTooltipModule],
                ngProviders: []
            }),
            component: HierarchicalGridRightPinningSampleComponent
        }));

        configs.push(new Config({
            component: HierarchicalGridColumnSelectionComponent,
            additionalFiles: [
                "/src/app/hierarchical-grid/data.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [HierarchicalGridColumnSelectionComponent, IgxHierarchicalGridModule],
                ngDeclarations: [HierarchicalGridColumnSelectionComponent],
                ngImports: [IgxHierarchicalGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: HierarchicalGridColumnGroupSelectionComponent,
            additionalFiles: [
                "/src/app/hierarchical-grid/data.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [HierarchicalGridColumnGroupSelectionComponent, IgxHierarchicalGridModule],
                ngDeclarations: [HierarchicalGridColumnGroupSelectionComponent],
                ngImports: [IgxHierarchicalGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: HGridColumnSelectionStylesComponent,
            additionalFiles: [
                "/src/app/hierarchical-grid/data.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [HGridColumnSelectionStylesComponent, IgxHierarchicalGridModule],
                ngDeclarations: [HGridColumnSelectionStylesComponent],
                ngImports: [IgxHierarchicalGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: HGridRowPinningExtraColumnSampleComponent,
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts", "/src/app/grid/services/svgIcons.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HGridRowPinningExtraColumnSampleComponent, IgxHierarchicalGridModule, IgxIconModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowPinningExtraColumnSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxIconModule, IgxSwitchModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: HGridRowPinningSampleComponent,
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts", "/src/app/grid/services/svgIcons.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HGridRowPinningSampleComponent, IgxHierarchicalGridModule, IgxActionStripModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowPinningSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxActionStripModule, IgxHierarchicalGridModule, IgxSwitchModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: HGridRowPinningStylingSampleComponent,
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts", "/src/app/grid/services/svgIcons.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HGridRowPinningStylingSampleComponent, IgxHierarchicalGridModule, IgxActionStripModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRowPinningStylingSampleComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxActionStripModule, IgxHierarchicalGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: HGridKeyboardnavGuide,
            additionalFiles: [
                "/src/app/hierarchical-grid/data.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [HGridKeyboardnavGuide, IgxHierarchicalGridModule, IgxListModule, IgxOverlayService],
                ngDeclarations: [HGridKeyboardnavGuide],
                ngImports: [IgxHierarchicalGridModule, IgxListModule],
                ngProviders: [IgxOverlayService]
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/hierarchical-grid-remote-paging-default-template/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRemotePagingDefaultTemplateComponent, HttpClientModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridRemotePagingDefaultTemplateComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, HttpClientModule]
            }),
            component: HGridRemotePagingDefaultTemplateComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSaveStateComponent, HGridAboutComponent, IgxPreventDocumentScrollModule],
                ngDeclarations: [HGridSaveStateComponent, HGridAboutComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, HttpClientModule,
                    "RouterModule.forRoot([\{component: HGridAboutComponent, path: 'hGrid-state-about'},\{component: HGridSaveStateComponent, path: 'hGrid-state'},\{ path: '', redirectTo: '/hGrid-state', pathMatch: 'full' }])]"]
            }),
            component: HGridSaveStateComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HierarchicalGridExternalOutletComponent, IgxHierarchicalGridModule, IgxToggleModule, IgxPreventDocumentScrollModule],
                ngDeclarations: [HierarchicalGridExternalOutletComponent],
                ngImports: [IgxPreventDocumentScrollModule, IgxHierarchicalGridModule, IgxToggleModule]
            }),
            component: HierarchicalGridExternalOutletComponent
        }));

        return configs;
    }
}
