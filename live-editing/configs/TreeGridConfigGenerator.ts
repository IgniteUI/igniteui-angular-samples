// tslint:disable:max-line-length
import { IgxTreeGridModule } from "igniteui-angular";
import { TreeGridChilddatakeySampleComponent } from "../../src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridPrimaryforeignkeySampleComponent } from "../../src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRowEditSampleComponent } from "../../src/app/tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridVirtualizationSampleComponent } from "../../src/app/tree-grid/tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";
import { TreeGridConditionalCellStyleComponent } from "../../src/app/tree-grid/tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component";
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
            additionalFiles: ["/src/app/tree-grid/data/food.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridConditionalCellStyleComponent],
                ngDeclarations: [TreeGridConditionalCellStyleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridConditionalCellStyleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        return configs;
    }
}
