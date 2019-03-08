// tslint:disable:max-line-length
import { IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule, IgxColumnHidingModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule, IgxExcelExporterService, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxRadioModule, IgxRippleModule, IgxSwitchModule, IgxTreeGridModule } from "igniteui-angular";
import { TreeGridBatchEditingSampleComponent } from "../../src/app/tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import { TreeGridChilddatakeySampleComponent } from "../../src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridColumnHidingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";
import { TreeGridColumnHidingToolbarSampleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component";
import { TreeGridColumnMovingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-moving-sample/tree-grid-column-moving-sample.component";
import { TreeGridColumnPinningSampleComponent } from "../../src/app/tree-grid/tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component";
import { TreeGridColumnResizingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component";
import { TreeGridConditionalCellStyleComponent } from "../../src/app/tree-grid/tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component";
import { TreeGridDisplaydensitySampleComponent } from "../../src/app/tree-grid/tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component";
import { TreeGridEditingSampleComponent } from "../../src/app/tree-grid/tree-grid-editing-sample/tree-grid-editing-sample.component";
import {
    TreeGridExcelStyleFilteringSample1Component
} from "../../src/app/tree-grid/tree-grid-excel-style-filtering-sample-1/tree-grid-excel-style-filtering-sample-1.component";
import {
    TreeGridExcelStyleFilteringSample2Component
} from "../../src/app/tree-grid/tree-grid-excel-style-filtering-sample-2/tree-grid-excel-style-filtering-sample-2.component";
import { TreeGridFilteringCustomSampleComponent } from "../../src/app/tree-grid/tree-grid-filtering-custom-sample/tree-grid-filtering-custom-sample.component";
import { TreeGridFilteringSampleComponent } from "../../src/app/tree-grid/tree-grid-filtering-sample/tree-grid-filtering-sample.component";
import { TreeGridMultiColumnHeadersSampleComponent } from "../../src/app/tree-grid/tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component";
import { TreeGridPagingSampleComponent } from "../../src/app/tree-grid/tree-grid-paging-sample/tree-grid-paging-sample.component";
import { TreeGridPrimaryforeignkeySampleComponent } from "../../src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRowEditSampleComponent } from "../../src/app/tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridSearchSampleComponent } from "../../src/app/tree-grid/tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "../../src/app/tree-grid/tree-grid-selection-sample/tree-grid-selection-sample.component";
import { TreeGridContextmenuComponent } from "../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component";
import { TreeGridSortingSampleComponent } from "../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-sorting-sample.component";
import { TreeGridSummarySampleComponent } from "../../src/app/tree-grid/tree-grid-summary-sample/tree-grid-summary-sample.component";
import { TreeGridSummary2SampleComponent } from "../../src/app/tree-grid/tree-grid-summary2-sample/tree-grid-summary2-sample.component";
import { TreeGridToolbarSample1Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component";
import { TreeGridToolbarSample2Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-2/tree-grid-toolbar-sample-2.component";
import { TreeGridToolbarSample3Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-3/tree-grid-toolbar-sample-3.component";
import { TreeGridToolbarSample4Component } from "../../src/app/tree-grid/tree-grid-toolbar-sample-4/tree-grid-toolbar-sample-4.component";
import { TreeGridVirtualizationSampleComponent } from "../../src/app/tree-grid/tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TreeGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TreeGrid ChildDataKey Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridChilddatakeySampleComponent, IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [TreeGridChilddatakeySampleComponent],
                ngImports: [IgxTreeGridModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            }),
            component: TreeGridChilddatakeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPrimaryforeignkeySampleComponent],
                ngDeclarations: [TreeGridPrimaryforeignkeySampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridPrimaryforeignkeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Row Edit Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-row-edit/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridRowEditSampleComponent],
                ngDeclarations: [TreeGridRowEditSampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridRowEditSampleComponent,
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
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridBatchEditingSampleComponent, IgxButtonModule, IgxDialogModule, IgxGridModule],
                ngDeclarations: [TreeGridBatchEditingSampleComponent],
                ngImports: [IgxTreeGridModule, IgxButtonModule, IgxDialogModule, IgxGridModule]
            }),
            component: TreeGridBatchEditingSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
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

        // TreeGrid Selection sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/employees-flat.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSelectionSampleComponent, IgxSwitchModule],
                ngDeclarations: [TreeGridSelectionSampleComponent],
                ngImports: [IgxTreeGridModule, IgxSwitchModule]
            }),
            component: TreeGridSelectionSampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Sorting sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/data/foods.ts",
                "/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.html",
                "/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.ts",
                "/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.scss"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridSortingSampleComponent, TreeGridContextmenuComponent, IgxIconModule],
                ngDeclarations: [TreeGridSortingSampleComponent, TreeGridContextmenuComponent],
                ngImports: [IgxTreeGridModule, IgxIconModule]
            }),
            component: TreeGridSortingSampleComponent,
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
                imports: [IgxTreeGridModule, TreeGridExcelStyleFilteringSample1Component, IgxInputGroupModule],
                ngDeclarations: [TreeGridExcelStyleFilteringSample1Component],
                ngImports: [IgxTreeGridModule, IgxInputGroupModule]
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

        return configs;
    }
}
