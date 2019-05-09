/* tslint:disable:object-literal-sort-keys */
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxColumnHidingModule,
    IgxComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxExcelExporterService,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule
} from "igniteui-angular";
import {
    GridBatchEditingSampleComponent
} from "../../src/app/grid/grid-batch-editing/grid-batch-editing-sample.component";
import { GridWithTransactionsComponent } from "../../src/app/grid/grid-batch-editing/grid-transaction.component";
import { GridComponent } from "../../src/app/grid/grid-boston-marathon/grid.component";
import {
    GridColumnHidingSampleComponent
} from "../../src/app/grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "../../src/app/grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import {
    GridConditionalCellStyleComponent
} from "../../src/app/grid/grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCustomFilteringComponent } from "../../src/app/grid/grid-custom-filtering/grid-custom-filtering.component";
import {
    GridDisplayDensitySampleComponent
} from "../../src/app/grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "../../src/app/grid/grid-editing-sample/grid-editing-sample.component";
import {
    ExcelStyleFilteringSample1Component
} from "../../src/app/grid/grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component";
import {
    ExcelStyleFilteringSample2Component
} from "../../src/app/grid/grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component";
import {
    ExcelStyleFilteringSample3Component
} from "../../src/app/grid/grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component";
import { FilteringSampleComponent } from "../../src/app/grid/grid-filtering-sample/grid-filtering-sample.component";
import {
    FilteringTemplateSampleComponent
} from "../../src/app/grid/grid-filtering-template-sample/grid-filtering-template-sample.component";
import { GridGroupBySampleComponent } from "../../src/app/grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupBySummarySampleComponent
} from "../../src/app/grid/grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "../../src/app/grid/grid-moving-sample/grid-moving-sample.component";
// tslint:disable-next-line: max-line-length
import { GridMultiCellSelectionComponent } from "../../src/app/grid/grid-multi-cell-selection/grid-multi-cell-selection.component";
import { GridMultiRowLayoutComponent } from "../../src/app/grid/grid-multi-row-layout/grid-multi-row-layout.component";
import { PagingSampleComponent } from "../../src/app/grid/grid-paging-sample/grid-paging-sample.component";
import {
    RemoteFilteringSampleComponent
} from "../../src/app/grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "../../src/app/grid/grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "../../src/app/grid/grid-resizing-sample/grid-resizing-sample.component";
import {
    GridDragToGridSampleComponent } from "../../src/app/grid/grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import {
    GridRowEditSampleComponent
} from "../../src/app/grid/grid-row-editing-sample/grid-row-editing-sample.component";
import { FinancialSampleComponent, LocalService } from "../../src/app/grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "../../src/app/grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "../../src/app/grid/grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "../../src/app/grid/grid-sample-selection/grid-selection.component";
import { AboutComponent } from "../../src/app/grid/grid-save-state/about.component";
import { GridSaveStateComponent } from "../../src/app/grid/grid-save-state/grid-state.component";
import { IgxGridStateDirective } from "../../src/app/grid/grid-save-state/state.directive";
import { GridSearchSampleComponent } from "../../src/app/grid/grid-search-sample/grid-search-sample.component";
import {
    GridContextmenuComponent
} from "../../src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component";
import { SortingSampleComponent } from "../../src/app/grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridMultiColumnHeadersComponent } from "../../src/app/grid/multi-column-headers/multi-column-headers";
import { DataService } from "../../src/app/grid/services/data.service";
import { RemoteFilteringService } from "../../src/app/grid/services/remoteFilteringService";
import { RemotePagingService } from "../../src/app/grid/services/remotePagingService";
import { RemoteServiceVirt } from "../../src/app/grid/services/remoteService";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: GridComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridComponent, DataService],
                ngDeclarations: [GridComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRippleModule,
                    IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: FinancialSampleComponent,
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, FinancialSampleComponent, LocalService],
                ngDeclarations: [FinancialSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [LocalService]
            })
        }));

        configs.push(new Config({
            component: GridSample3Component,
            additionalFiles: ["/src/app/grid/grid-sample-3/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxInputGroupModule,
                    IgxRippleModule, IgxSwitchModule, GridSample3Component, LocalService, IgxIconModule],
                ngDeclarations: [GridSample3Component],
                ngImports: [IgxButtonModule, IgxGridModule,
                    IgxInputGroupModule, IgxRippleModule, HttpClientModule, IgxIconModule]
            })
        }));

        configs.push(new Config({
            component: GridGroupBySampleComponent,
            additionalFiles: ["/src/app/grid/grid-groupby-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxGridModule,
                    IgxSwitchModule, GridGroupBySampleComponent, IgxIconModule, IgxBadgeModule],
                ngDeclarations: [GridGroupBySampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule, IgxIconModule, IgxBadgeModule]
            })
        }));

        configs.push(new Config({
            component: GridGroupBySummarySampleComponent,
            additionalFiles: ["/src/app/grid/grid-groupby-summary-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule, IgxGridModule,
                    IgxSwitchModule, GridGroupBySummarySampleComponent, IgxIconModule, IgxBadgeModule],
                ngDeclarations: [GridGroupBySummarySampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule, IgxGridModule,
                    IgxIconModule, IgxBadgeModule]
            })
        }));

        configs.push(new Config({
            component: FilteringSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxRippleModule, FilteringSampleComponent, IgxInputGroupModule],
                ngDeclarations: [FilteringSampleComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: FilteringTemplateSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxGridModule,
                    IgxRippleModule,
                    FilteringTemplateSampleComponent,
                    IgxInputGroupModule,
                    IgxDatePickerModule],
                ngDeclarations: [FilteringTemplateSampleComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: PagingSampleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, PagingSampleComponent, DataService],
                ngDeclarations: [PagingSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: GridSelectionSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-selection/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridSelectionSampleComponent],
                ngDeclarations: [GridSelectionSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridSearchSampleComponent,
            additionalFiles: ["/src/app/grid/grid-search-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxIconModule,
                    IgxInputGroupModule, IgxRippleModule, IgxChipsModule, GridSearchSampleComponent],
                ngDeclarations: [GridSearchSampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule,
                    IgxRippleModule, IgxChipsModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-column-hiding-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, IgxRadioModule,
                    IgxColumnHidingModule, GridColumnHidingSampleComponent],
                ngDeclarations: [GridColumnHidingSampleComponent],
                ngImports: [IgxGridModule, IgxRadioModule, IgxColumnHidingModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingToolbarSampleComponent,
            additionalFiles: ["/src/app/grid/grid-column-hiding-toolbar-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, GridColumnHidingToolbarSampleComponent],
                ngDeclarations: [GridColumnHidingToolbarSampleComponent],
                ngImports: [IgxGridModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: ResizingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-resizing-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, ResizingSampleComponent],
                ngDeclarations: [ResizingSampleComponent],
                ngImports: [IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: SortingSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts",
                "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.html",
                "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.ts",
                "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.scss"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxIconModule, IgxRippleModule,
                    SortingSampleComponent, IgxInputGroupModule, GridContextmenuComponent],
                ngDeclarations: [SortingSampleComponent, GridContextmenuComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridRemoteVirtualizationSampleComponent,
            additionalFiles: ["/src/app/grid/services/remoteService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRemoteVirtualizationSampleComponent, IgxGridModule, IgxToastModule,
                    IgxBadgeModule, HttpClientModule, RemoteServiceVirt],
                ngDeclarations: [GridRemoteVirtualizationSampleComponent],
                ngImports: [IgxGridModule, IgxToastModule, IgxBadgeModule, HttpClientModule],
                ngProviders: [RemoteServiceVirt]
            })
        }));

        configs.push(new Config({
            component: RemoteFilteringSampleComponent,
            additionalFiles: ["/src/app/grid/services/remoteFilteringService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemoteFilteringSampleComponent, IgxGridModule,
                    IgxBadgeModule, HttpClientModule, RemoteFilteringService, IgxToastModule],
                ngDeclarations: [RemoteFilteringSampleComponent],
                ngImports: [IgxGridModule, IgxBadgeModule, HttpClientModule, IgxToastModule],
                ngProviders: [RemoteFilteringService]
            })
        }));

        configs.push(new Config({
            component: PinningSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-pinning/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [PinningSampleComponent, IgxGridModule, IgxIconModule],
                ngDeclarations: [PinningSampleComponent],
                ngImports: [IgxGridModule, IgxIconModule],
                ngProviders: []
            })
        }));

        // column-moving sample
        configs.push(new Config({
            component: GridMovingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-selection/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMovingSampleComponent, IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngDeclarations: [GridMovingSampleComponent],
                ngImports: [IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample1Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample1Component, IgxAvatarModule, IgxGridModule],
                ngDeclarations: [GridToolbarSample1Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample2Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample2Component, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample2Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample3Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample3Component, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample3Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample4Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample4Component, IgxAvatarModule, IgxGridModule],
                ngDeclarations: [GridToolbarSample4Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridEditingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-editing-sample/data.ts",
                "/src/app/grid/grid-editing-sample/product.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxComboModule,
                    IgxRippleModule, GridEditingSampleComponent],
                ngDeclarations: [GridEditingSampleComponent],
                ngImports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxComboModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiColumnHeadersComponent,
            additionalFiles: ["/src/app/grid/multi-column-headers/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiColumnHeadersComponent, IgxGridModule, IgxButtonModule],
                ngDeclarations: [GridMultiColumnHeadersComponent],
                ngImports: [IgxGridModule, IgxButtonModule]
            })
        }));

        configs.push(new Config({
            component: RemotePagingGridSample,
            additionalFiles: ["/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemotePagingGridSample, IgxGridModule, RouterModule, HttpClientModule, RemotePagingService],
                ngDeclarations: [RemotePagingGridSample],
                ngImports: ["RouterModule.forRoot([])", IgxGridModule, HttpClientModule],
                ngProviders: [RemotePagingService]
            })
        }));

        configs.push(new Config({
            component: GridDisplayDensitySampleComponent,
            additionalFiles: ["/src/app/grid/grid-displaydensity-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule,
                    IgxGridModule, GridDisplayDensitySampleComponent],
                ngDeclarations: [GridDisplayDensitySampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule,
                    IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridConditionalCellStyleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridConditionalCellStyleComponent],
                ngDeclarations: [GridConditionalCellStyleComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridBatchEditingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-batch-editing/data.ts",
                "/src/app/grid/grid-batch-editing/grid-transaction.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridBatchEditingSampleComponent, IgxGridModule, IgxDialogModule, IgxButtonModule,
                    IgxFocusModule, GridWithTransactionsComponent],
                ngDeclarations: [GridBatchEditingSampleComponent, GridWithTransactionsComponent],
                ngImports: [IgxGridModule, IgxDialogModule, IgxButtonModule,
                    IgxFocusModule]
            })
        }));

        configs.push(new Config({
            component: GridRowEditSampleComponent,
            additionalFiles: ["src/app/grid/grid-row-editing-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRowEditSampleComponent, IgxGridModule, IgxFocusModule],
                ngDeclarations: [GridRowEditSampleComponent],
                ngImports: [IgxGridModule, IgxFocusModule]
            })
        }));

        configs.push(new Config({
            component: GridCustomFilteringComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCustomFilteringComponent, IgxGridModule],
                ngDeclarations: [GridCustomFilteringComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringSample1Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringSample1Component, IgxGridModule, IgxButtonGroupModule],
                ngDeclarations: [ExcelStyleFilteringSample1Component],
                ngImports: [IgxGridModule, IgxButtonGroupModule]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringSample2Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringSample2Component, IgxGridModule],
                ngDeclarations: [ExcelStyleFilteringSample2Component],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringSample3Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringSample3Component, IgxGridModule],
                ngDeclarations: [ExcelStyleFilteringSample3Component],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiCellSelectionComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiCellSelectionComponent, IgxGridModule, IgxToastModule],
                ngDeclarations: [GridMultiCellSelectionComponent],
                ngImports: [IgxGridModule, IgxToastModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiCellSelectionComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiCellSelectionComponent, IgxGridModule, IgxToastModule],
                ngDeclarations: [GridMultiCellSelectionComponent],
                ngImports: [IgxGridModule, IgxToastModule]
            })
        }));
        configs.push(new Config({
            component: GridMultiRowLayoutComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiRowLayoutComponent, IgxGridModule],
                ngDeclarations: [GridMultiRowLayoutComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridSaveStateComponent,
            additionalFiles: ["/src/app/grid/grid-save-state/localData.ts",
            "/src/app/grid/grid-save-state/state.directive.ts",
            "/src/app/grid/grid-save-state/about.component.ts",
            "/src/app/grid/grid-save-state/about.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridSaveStateComponent, IgxGridModule, IgxTooltipModule,
                    IgxToastModule, IgxSwitchModule, AboutComponent, Router, RouterModule, IgxGridStateDirective],
                ngDeclarations: [GridSaveStateComponent, AboutComponent, IgxGridStateDirective],
                ngImports: [IgxGridModule.forRoot(), IgxTooltipModule,
                    // tslint:disable-next-line:max-line-length
                    "RouterModule.forRoot([\{component: AboutComponent, path: 'grid-about'},\{component: GridSaveStateComponent, path: 'grid-state'}])",
                    IgxToastModule, IgxSwitchModule]
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/grid/grid-row-drag-to-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridDragToGridSampleComponent, IgxDragDropModule,
                    IgxIconModule, IgxButtonModule],
                ngDeclarations: [GridDragToGridSampleComponent],
                ngImports: [IgxGridModule, IgxDragDropModule, IgxIconModule, IgxButtonModule]
            }),
            component: GridDragToGridSampleComponent
        }));

        return configs;
    }
}
