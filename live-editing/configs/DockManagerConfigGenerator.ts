import { Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DockManagerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        const dockManagerImport = "import { defineCustomElements } from 'igniteui-dockmanager/loader';";
        const defineCustomElements = "defineCustomElements();";

        configs.push(new Config({
            component: 'DockManagerComponent',
            additionalDependencies: ["igniteui-dockmanager"],
            appConfig: { ...BaseAppConfig,
                additionalAdjustments: [dockManagerImport, defineCustomElements]
            },
            shortenComponentPathBy: "/layouts/dock-manager/"
        }));

        return configs;
    }
}
