import { Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DockManagerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        const dockManagerImport = "import { defineComponents, IgcDockManagerComponent } from 'igniteui-dockmanager';";
        const defineDockManagerComponents = 'defineComponents(IgcDockManagerComponent);';

        configs.push(new Config({
            component: 'DockManagerComponent',
            additionalDependencies: ["igniteui-dockmanager"],
            appConfig: { ...BaseAppConfig,
                additionalAdjustments: [dockManagerImport, defineDockManagerComponents]
            },
            shortenComponentPathBy: "/layouts/dock-manager/"
        }));

        return configs;
    }
}
