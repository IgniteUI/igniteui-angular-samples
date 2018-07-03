/* tslint:disable:object-literal-sort-keys */

import { IgxDropDownModule} from "igniteui-angular";
import { DropDownSample1Component } from "../../src/app/dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "../../src/app/dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "../../src/app/dropdown/dropdown-sample-3/dropdown-sample-3.component";

import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DropDownConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DropDownSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample1Component],
                ngDeclarations: [DropDownSample1Component],
                ngImports: [IgxDropDownModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample2Component],
                ngDeclarations: [DropDownSample2Component],
                ngImports: [IgxDropDownModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample3Component],
                ngDeclarations: [DropDownSample3Component],
                ngImports: [IgxDropDownModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        return configs;
    }
}
