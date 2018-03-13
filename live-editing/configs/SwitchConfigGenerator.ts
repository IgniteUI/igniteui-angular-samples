import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { SwitchSample2Component } from "../../src/app/form-elements/switch/switch-sample-2/switch-sample-2.component";
import { IgxSwitchModule } from "igniteui-angular/main";
import { AppModuleConfig } from "./core/AppModuleConfig";

export class SwitchConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

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
