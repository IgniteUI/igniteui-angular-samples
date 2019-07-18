// tslint:disable:max-line-length
import { HttpClientModule } from "@angular/common/http";
import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxGridModule,
    IgxHierarchicalGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxSwitchModule
} from "igniteui-angular";
import { HGridBatchEditingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HierarchicalGridWithTransactionsComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-transactions.component";
import { HGridCostumHidingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component";
import { HGridColumnHidingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";
import { HGridColumnMovingSampleComponentStyled } from "../../src/app/hierarchical-grid/hierarchical-grid-column-moving-styled/hierarchical-grid-moving-styled.component";
import { HGridColumnMovingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-moving/hierarchical-grid-moving.component";
import { HGridPinningSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";
import { HGridColumnResizingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { HGridCustomKBNavigationComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-custom-kb-navigation/hierarchical-grid-custom-kb-navigation-sample.component";
import { HGridDisplayDensitySampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-display-density/hierarchical-grid-density.component";
import { HGridEditingStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-editing-style/hierarchical-grid-editing-style.component";
import { HGridEditingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-editing/hierarchical-grid-editing.component";
import {
    HGridExcelStyleFilteringSample1Component
} from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-1/hierarchical-grid-excel-style-filtering-sample-1.component";
import {
    HGridExcelStyleFilteringSample2Component
} from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-2/hierarchical-grid-excel-style-filtering-sample-2.component";
import {
    HGridExcelStyleFilteringSample3Component
} from "../../src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-3/hierarchical-grid-excel-style-filtering-sample-3.component";
import {
    HGridFilteringTemplateSampleComponent
} from "../../src/app/hierarchical-grid/hierarchical-grid-filtering-template/hierarchical-grid-filtering-template.component";
import { HGridCustomFilteringSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component";
import { HGridFilteringSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HierarchicalGridLoDSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HGridMultiCellStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-cell-style/hierarchical-grid-multi-cell-style.component";
import { HGridMultiHeaderTemplateSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-column-header-template/hierarchical-grid-multi-column-template.component";
import { HGridMultiHeadersSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component";
import { HGridPagingStyleSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-paging-style/hierarchical-grid-paging-style.component";
import { HGridPagingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-paging.component";
import { HGridRemotePagingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import {
    HGridResizeLineStylingComponent
} from "../../src/app/hierarchical-grid/hierarchical-grid-resize-line-styling/hierarchical-grid-resize-line-styling.component";
import { HGridRowDragBaseComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-drag-base/hierarchical-row-drag-base.component";
import { HGridDragSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-drag/hierarchical-grid-row-drag.component";
import { HGridRowEditStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-edit-style/hierarchical-grid-row-edit-style.component";
import { HGridRowEditingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-editing/hierarchical-grid-row-editing.component";
import { HGridRowReorderComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-row-reorder/hierarchical-grid-row-reorder.component";
import { HGridSelectionSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridContextmenuComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component";
import { HGridSortingSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridSummarySampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-summary/hierarchical-grid-summary.component";
import { HierarchicalGridToolbarStyleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar-style/hierarchical-grid-toolbar-style.component";
import { HGridToolbarCustomSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component";
import { HGridToolbarOptionsSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { HGridToolbarTitleSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component";
import { RemoteLoDService } from "../../src/app/hierarchical-grid/services/remote-lod.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class HierarchicalGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/models.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridEditingSampleComponent, IgxDialogModule,
                    IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule],
                ngDeclarations: [HGridEditingSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxDialogModule, IgxButtonModule, IgxCheckboxModule,
                    IgxDatePickerModule]
            }),
            component: HGridEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowEditingSampleComponent],
                ngDeclarations: [HGridRowEditingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridRowEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowEditStyleComponent, IgxIconModule],
                ngDeclarations: [HGridRowEditStyleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxIconModule]
            }),
            component: HGridRowEditStyleComponent

        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridEditingStyleComponent],
                ngDeclarations: [HGridEditingStyleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridEditingStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/models.ts",
                "/src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-transactions.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridBatchEditingSampleComponent,
                    HierarchicalGridWithTransactionsComponent, IgxButtonModule, IgxCheckboxModule,
                    IgxDatePickerModule, IgxGridModule, IgxDialogModule],
                ngDeclarations: [HGridBatchEditingSampleComponent, HierarchicalGridWithTransactionsComponent],
                ngImports: [IgxHierarchicalGridModule, IgxButtonModule, IgxCheckboxModule,
                    IgxDatePickerModule, IgxGridModule, IgxDialogModule]
            }),
            component: HGridBatchEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridFilteringSampleComponent],
                ngDeclarations: [HGridFilteringSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridFilteringSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridFilteringTemplateSampleComponent, IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [HGridFilteringTemplateSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxInputGroupModule, IgxDatePickerModule]
            }),
            component: HGridFilteringTemplateSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringSample1Component, IgxButtonGroupModule],
                ngDeclarations: [HGridExcelStyleFilteringSample1Component],
                ngImports: [IgxHierarchicalGridModule, IgxButtonGroupModule]
            }),
            component: HGridExcelStyleFilteringSample1Component
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringSample2Component],
                ngDeclarations: [HGridExcelStyleFilteringSample2Component],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridExcelStyleFilteringSample2Component
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridExcelStyleFilteringSample3Component],
                ngDeclarations: [HGridExcelStyleFilteringSample3Component],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridExcelStyleFilteringSample3Component
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridCustomFilteringSampleComponent],
                ngDeclarations: [HGridCustomFilteringSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridCustomFilteringSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts",
                "/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.ts",
                "/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.scss",
                "/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSortingSampleComponent, HGridContextmenuComponent],
                ngDeclarations: [HGridSortingSampleComponent, HGridContextmenuComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridSortingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSelectionSampleComponent, IgxSwitchModule],
                ngDeclarations: [HGridSelectionSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxSwitchModule]
            }),
            component: HGridSelectionSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridSummarySampleComponent],
                ngDeclarations: [HGridSummarySampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridSummarySampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridPagingSampleComponent],
                ngDeclarations: [HGridPagingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridPagingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/hierarchical-grid-paging/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRemotePagingSampleComponent, HttpClientModule],
                ngDeclarations: [HGridRemotePagingSampleComponent],
                ngImports: [IgxHierarchicalGridModule, HttpClientModule]
            }),
            component: HGridRemotePagingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridDisplayDensitySampleComponent],
                ngDeclarations: [HGridDisplayDensitySampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridDisplayDensitySampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnMovingSampleComponentStyled],
                ngDeclarations: [HGridColumnMovingSampleComponentStyled],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridColumnMovingSampleComponentStyled
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnMovingSampleComponent],
                ngDeclarations: [HGridColumnMovingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridColumnMovingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridPinningSampleComponent],
                ngDeclarations: [HGridPinningSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridPinningSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnResizingSampleComponent],
                ngDeclarations: [HGridColumnResizingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridColumnResizingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridResizeLineStylingComponent],
                ngDeclarations: [HGridResizeLineStylingComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridResizeLineStylingComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnHidingSampleComponent],
                ngDeclarations: [HGridColumnHidingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridColumnHidingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridCostumHidingSampleComponent],
                ngDeclarations: [HGridCostumHidingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridCostumHidingSampleComponent
        }));

        // HGrid Multi Cell Selection Styling
        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiCellStyleComponent],
                ngDeclarations: [HGridMultiCellStyleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridMultiCellStyleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiHeadersSampleComponent],
                ngDeclarations: [HGridMultiHeadersSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridMultiHeadersSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarTitleSampleComponent],
                ngDeclarations: [HGridToolbarTitleSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridToolbarTitleSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarOptionsSampleComponent],
                ngDeclarations: [HGridToolbarOptionsSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridToolbarOptionsSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridToolbarCustomSampleComponent, IgxButtonModule],
                ngDeclarations: [HGridToolbarCustomSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxButtonModule]
            }),
            component: HGridToolbarCustomSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridToolbarStyleComponent],
                ngDeclarations: [HierarchicalGridToolbarStyleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HierarchicalGridToolbarStyleComponent
        }));

        // Hierarchical Grid Load on Demand Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/services/remote-lod.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridLoDSampleComponent, RemoteLoDService],
                ngDeclarations: [HierarchicalGridLoDSampleComponent],
                ngImports: [IgxHierarchicalGridModule],
                ngProviders: [RemoteLoDService]
            }),
            component: HierarchicalGridLoDSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridDragSampleComponent, IgxDragDropModule, IgxIconModule, IgxButtonModule],
                ngDeclarations: [HGridDragSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxDragDropModule, IgxIconModule, IgxButtonModule]
            }),
            component: HGridDragSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowDragBaseComponent, IgxDragDropModule, IgxButtonModule],
                ngDeclarations: [HGridRowDragBaseComponent],
                ngImports: [IgxHierarchicalGridModule, IgxDragDropModule, IgxButtonModule]
            }),
            component: HGridRowDragBaseComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridCustomKBNavigationComponent],
                ngDeclarations: [HGridCustomKBNavigationComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridCustomKBNavigationComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/files.data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, IgxDragDropModule, HGridRowReorderComponent],
                ngDeclarations: [HGridRowReorderComponent],
                ngImports: [IgxHierarchicalGridModule, IgxDragDropModule]
            }),
            component: HGridRowReorderComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridPagingStyleSampleComponent],
                ngDeclarations: [HGridPagingStyleSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridPagingStyleSampleComponent,
            shortenComponentPathBy: "/hierarchical-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridMultiHeaderTemplateSampleComponent],
                ngDeclarations: [HGridMultiHeaderTemplateSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
            }),
            component: HGridMultiHeaderTemplateSampleComponent
        }));

        return configs;
    }
}
