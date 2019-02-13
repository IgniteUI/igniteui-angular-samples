/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToggleModule
} from "igniteui-angular";
import { TreeGridFinJSComponent } from "../../src/app/treegrid-finjs/tree-grid-finjs-sample.component";
import { TreeLocalDataService } from "../../src/app/treegrid-finjs/treeLocalData.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TreeGridFinjsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/treegrid-finjs/treeLocalData.service.ts",
                "/src/app/treegrid-finjs/hierFinancialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxCsvExporterService, IgxSwitchModule,
                    IgxRippleModule, TreeGridFinJSComponent, TreeLocalDataService],
                ngDeclarations: [TreeGridFinJSComponent],
                ngImports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule, IgxGridModule.forRoot()],
                ngProviders: [TreeLocalDataService, IgxExcelExporterService]
            }),
            component: TreeGridFinJSComponent
        }));

        return configs;
    }
}