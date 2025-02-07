import {IgxSwitchModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class SwitchConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // switch sample 1
        configs.push(new Config({
            component: 'SwitchSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch sample 2
        configs.push(new Config({
            component: 'SwitchSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch styling
        configs.push(new Config({
            component: 'SwitchStylingComponent',
            additionalFiles: ["/src/app/data-entries/switch/switch-styling/layout.scss"],
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/data-entries/switch/switch-styling/layout.scss"],
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        return configs;
    }
}
