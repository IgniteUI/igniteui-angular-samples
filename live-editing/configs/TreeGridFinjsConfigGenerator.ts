/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxExcelExporterService,
    IgxIconModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxTreeGridModule
} from "igniteui-angular";
import { LocalDataService } from "../../src/app/grid-finjs/localData.service";
import { TreeGridFinJSComponent } from "../../src/app/treegrid-finjs/tree-grid-finjs-sample.component";
import { TreeGridGroupingPipe } from "../../src/app/treegrid-finjs/tree-grid-grouping.pipe";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TreeGridFinjsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/grid-finjs/localData.service.ts",
                "/src/app/grid/services/financialData.ts",
                "/src/app/treegrid-finjs/tree-grid-grouping.pipe.ts"],
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
