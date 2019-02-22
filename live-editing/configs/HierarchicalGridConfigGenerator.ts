// tslint:disable:max-line-length
import { IgxHierarchicalGridModule,
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxColumnHidingModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxGridModule,
    IgxIconModule,
    IgxSwitchModule,
    IgxInputGroupModule } from "igniteui-angular";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { HGridEditingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-editing/hierarchical-grid-editing.component';
import { HGridRowEditingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-row-editing/hierarchical-grid-row-editing.component';
import { HGridBatchEditingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component';
import { HierarchicalGridWithTransactionsComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-transactions.component';
import { HGridFilteringSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-filtering/hierarchical-grid-filtering.component';
import { HGridCustomFilteringSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component';
import { HGridSortingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-sorting/hierarchical-grid-sorting.component';
import { HGridContextmenuComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component';
import { HGridSelectionSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-selection/hierarchical-grid-selection.component';
import { HGridSummarySampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-summary/hierarchical-grid-summary.component';
import { HGridPagingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-paging.component';
import { HGridRemotePagingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-remote-paging.component';
import { HGridDisplayDensitySampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-display-density/hierarchical-grid-density.component';
import { HGridColumnMovingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-column-moving/hierarchical-grid-moving.component';
import { HGridPinningSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-pinning.component';
import { HGridColumnResizingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-column-resizing/hierarchical-grid-resizing.component';
import { HGridColumnHidingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-hiding.component';
import { HGridCostumHidingSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component';
import { HGridMultiHeadersSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component';
import { HGridToolbarTitleSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component';
import { HGridToolbarOptionsSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component';
import { HGridToolbarCustomSampleComponent } from '../../src/app/hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component';

export class HierarchicalGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/hierarchical-grid-editing/data.ts",
            "/src/app/hierarchical-grid/hierarchical-grid-editing/singer.ts"],
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
            additionalFiles: ["/src/app/hierarchical-grid/hierarchical-grid-row-editing/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridRowEditingSampleComponent, IgxDatePickerModule],
                ngDeclarations: [HGridRowEditingSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxDatePickerModule]
            }),
            component: HGridRowEditingSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/hierarchical-grid-batch-editing/data.ts",
            "/src/app/hierarchical-grid/hierarchical-grid-batch-editing/singer.ts",
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
            additionalFiles: ["/src/app/hierarchical-grid/hierarchical-grid-filtering/data.ts"],
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
                imports: [IgxHierarchicalGridModule, HGridRemotePagingSampleComponent],
                ngDeclarations: [HGridRemotePagingSampleComponent],
                ngImports: [IgxHierarchicalGridModule]
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

        return configs;
    }
}
