import { DockManagerComponent } from "./../../src/app/layouts/dock-manager/dock-manager.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DockManagerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DockManagerComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [DockManagerComponent],
                ngDeclarations: [DockManagerComponent],
                ngImports: []
            }),
            shortenComponentPathBy: "/layouts/dock-manager/"
        }));

        return configs;
    }
}
