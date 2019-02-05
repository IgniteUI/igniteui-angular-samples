// tslint:disable:max-line-length
import { IgxTreeGridModule, IgxButtonModule, IgxDialogModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxChipsModule, IgxRadioModule, IgxColumnHidingModule, IgxSwitchModule } from "igniteui-angular";
import { TreeGridBatchEditingSampleComponent } from "../../src/app/tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import { TreeGridChilddatakeySampleComponent } from "../../src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridColumnHidingSampleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";
import { TreeGridColumnHidingToolbarSampleComponent } from "../../src/app/tree-grid/tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component";
import { TreeGridConditionalCellStyleComponent } from "../../src/app/tree-grid/tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component";
import { TreeGridContextmenuComponent } from "../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component";
import { TreeGridPrimaryforeignkeySampleComponent } from "../../src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRowEditSampleComponent } from "../../src/app/tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridSearchSampleComponent } from "../../src/app/tree-grid/tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "../../src/app/tree-grid/tree-grid-selection-sample/tree-grid-selection-sample.component";
import { TreeGridSortingSampleComponent } from "../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-sorting-sample.component";
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
                imports: [IgxTreeGridModule, TreeGridChilddatakeySampleComponent],
                ngDeclarations: [TreeGridChilddatakeySampleComponent],
                ngImports: [IgxTreeGridModule]
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
                imports: [IgxTreeGridModule, TreeGridVirtualizationSampleComponent],
                ngDeclarations: [TreeGridVirtualizationSampleComponent],
                ngImports: [IgxTreeGridModule]
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

        return configs;
    }
}
