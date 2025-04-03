import { Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class TileManagerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TileManagerComponent',
            additionalDependencies: ["igniteui-webcomponents"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tile-manager/"
        }));

        return configs;
    }
}
