/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToggleModule
} from "igniteui-angular";
import { FinJSDemoComponent } from "../../src/app/grid-finjs/grid-finjs-demo.component";
import { LocalDataService } from "../../src/app/grid-finjs/localData.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GridFinjsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: FinJSDemoComponent,
            additionalFiles: ["/src/app/grid-finjs/localData.service.ts",
                "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxCsvExporterService, IgxSwitchModule,
                    IgxRippleModule, FinJSDemoComponent,
                    LocalDataService],
                ngDeclarations: [FinJSDemoComponent],
                ngImports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule, IgxGridModule],
                ngProviders: [LocalDataService, IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        return configs;
    }
}
