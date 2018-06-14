/* tslint:disable:object-literal-sort-keys */
import { IgxSwitchModule } from "igniteui-angular";
import { SwitchSample2Component } from "../../src/app/form-elements/switch/switch-sample-2/switch-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SwitchConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // switch sample 2
        configs.push(new Config({
            component: SwitchSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSwitchModule, SwitchSample2Component],
                ngDeclarations: [SwitchSample2Component],
                ngImports: [IgxSwitchModule]
            }),
            shortenComponentPathBy: "/form-elements/switch/"
        }));

        return configs;
    }
}
