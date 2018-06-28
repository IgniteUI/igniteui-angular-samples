/* tslint:disable:object-literal-sort-keys */
import {
    IgxIconModule, IgxOverlayService, IgxSwitchModule
} from "igniteui-angular";
import { OverlaySampleComponent } from "../../src/app/overlay/overlay-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class OverlayConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // overlay sample 1
        configs.push(new Config({
            component: OverlaySampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleComponent],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));

        return configs;
    }
}
