// tslint:disable:max-line-length
import { IgxButtonGroupModule, IgxButtonModule, IgxDialogModule, IgxExcelExporterService, IgxGridModule, IgxIconModule, IgxRippleModule,
    IgxSliderModule, IgxSwitchModule, IgxToggleModule, IgxTransactionService, IgxTreeGridModule } from "igniteui-angular";
import { TreeGridChilddatakeySampleComponent } from "../../src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridFinJSComponent } from "../../src/app/tree-grid/tree-grid-finjs/tree-grid-finjs-sample.component";
import { TreeLocalDataService } from "../../src/app/tree-grid/tree-grid-finjs/treeLocalData.service";
import { TreeGridPrimaryforeignkeySampleComponent } from "../../src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridRowEditSampleComponent } from "../../src/app/tree-grid/tree-grid-row-edit/tree-grid-row-editing-sample.component";
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

        // TreeGrid FInJS demo component sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-finjs/treeLocalData.service.ts",
                "/src/app/tree-grid/tree-grid-finjs/hierFinancialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxSwitchModule, IgxRippleModule, TreeGridFinJSComponent,
                    TreeLocalDataService],
                ngDeclarations: [TreeGridFinJSComponent],
                ngImports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule, IgxGridModule],
                ngProviders: [TreeLocalDataService, IgxExcelExporterService]
            }),
            component: TreeGridFinJSComponent
        }));

        return configs;
    }
}
