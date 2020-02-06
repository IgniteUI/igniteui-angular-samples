// tslint:disable: max-line-length
import { IgxButtonGroupModule, IgxButtonModule, IgxCsvExporterService, IgxExcelExporterService, IgxIconModule, IgxRippleModule, IgxSliderModule, IgxSwitchModule, IgxToggleModule, IgxTreeGridModule } from "igniteui-angular";
import { IgxSparklineCoreModule, IgxSparklineModule } from "igniteui-angular-charts";
import { LocalDataService } from "../../../projects/app-lob/src/app/grid-finjs/localData.service";
import { TreeGridChilddatakeySampleComponent } from "../../../projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridPrimaryforeignkeySampleComponent } from "../../../projects/app-lob/src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { TreeGridFinJSComponent } from "../../../projects/app-lob/src/app/treegrid-finjs/tree-grid-finjs-sample.component";
import { TreeGridGroupingPipe } from "../../../projects/app-lob/src/app/treegrid-finjs/tree-grid-grouping.pipe";
import { AppModuleConfig } from "../core/AppModuleConfig";
import { Config } from "../core/Config";
import { IConfigGenerator } from "../core/IConfigGenerator";

export class DVTreeGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

                // TreeGrid ChildDataKey Sample
        configs.push(new Config({
                    additionalFiles: ["/projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
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
            additionalFiles: ["/projects/app-lob/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPrimaryforeignkeySampleComponent, IgxSparklineCoreModule, IgxSparklineModule],
                ngDeclarations: [TreeGridPrimaryforeignkeySampleComponent],
                ngImports: [IgxTreeGridModule, IgxSparklineCoreModule, IgxSparklineModule]
            }),
            component: TreeGridPrimaryforeignkeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/projects/app-lob/src/app/grid-finjs/localData.service.ts",
                "/projects/app-lob/src/app/services/financialData.ts",
                "/projects/app-lob/src/app/treegrid-finjs/tree-grid-grouping.pipe.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxSwitchModule, IgxRippleModule, TreeGridFinJSComponent,
                    LocalDataService, TreeGridGroupingPipe],
                ngDeclarations: [TreeGridFinJSComponent, TreeGridGroupingPipe],
                ngImports: [IgxTreeGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule],
                ngProviders: [LocalDataService, IgxExcelExporterService]
            }),
            component: TreeGridFinJSComponent
        }));

        return configs;
    }
}
