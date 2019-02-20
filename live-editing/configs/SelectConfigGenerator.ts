import { IgxButtonModule, IgxDropDownModule, IgxInputGroupModule, IgxSelectModule } from "igniteui-angular";
import { SelectSample1Component } from "../../src/app/data-entries/select/select-sample-1/select-sample-1.component";
import { SelectSample2Component } from "../../src/app/data-entries/select/select-sample-2/select-sample-2.component";
import { SelectSample3Component } from "../../src/app/data-entries/select/select-sample-3/select-sample-3.component";
import { SelectSample4Component } from "../../src/app/data-entries/select/select-sample-4/select-sample-4.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SelectConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample1Component, IgxInputGroupModule, IgxDropDownModule],
                ngDeclarations: [SelectSample1Component],
                ngImports: [IgxSelectModule, IgxInputGroupModule, IgxDropDownModule]
            }),
            component: SelectSample1Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample2Component, IgxInputGroupModule, IgxDropDownModule],
                ngDeclarations: [SelectSample2Component],
                ngImports: [IgxSelectModule, IgxInputGroupModule, IgxDropDownModule]
            }),
            component: SelectSample2Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample3Component, IgxButtonModule, IgxDropDownModule],
                ngDeclarations: [SelectSample3Component],
                ngImports: [IgxSelectModule, IgxButtonModule, IgxDropDownModule]
            }),
            component: SelectSample3Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample4Component, IgxInputGroupModule, IgxDropDownModule],
                ngDeclarations: [SelectSample4Component],
                ngImports: [IgxSelectModule, IgxInputGroupModule, IgxDropDownModule]
            }),
            component: SelectSample4Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        return configs;
    }
}
