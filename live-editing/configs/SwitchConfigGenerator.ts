/* tslint:disable:object-literal-sort-keys */
import { IgxSwitchModule } from "igniteui-angular";
import { SwitchSample1Component
} from "../../src/app/data-entries/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component
} from "../../src/app/data-entries/switch/switch-sample-2/switch-sample-2.component";
import { SwitchStylingComponent
} from "../../src/app/data-entries/switch/switch-styling/switch-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SwitchConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // switch sample 1
        configs.push(new Config({
            component: SwitchSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSwitchModule, SwitchSample1Component],
                ngDeclarations: [SwitchSample1Component],
                ngImports: [IgxSwitchModule]
            }),
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch sample 2
        configs.push(new Config({
            component: SwitchSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSwitchModule, SwitchSample2Component],
                ngDeclarations: [SwitchSample2Component],
                ngImports: [IgxSwitchModule]
            }),
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch styling
        configs.push(new Config({
            component: SwitchStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSwitchModule, SwitchStylingComponent],
                ngDeclarations: [SwitchStylingComponent],
                ngImports: [IgxSwitchModule]
            }),
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        return configs;
    }
}
