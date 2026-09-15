import { IgxSwitchModule } from 'igniteui-angular/switch';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class SwitchConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // switch overview
        configs.push(new Config({
            component: 'SwitchOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch enabled
        configs.push(new Config({
            component: 'SwitchEnabledComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch disabled
        configs.push(new Config({
            component: 'SwitchDisabledComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch selected
        configs.push(new Config({
            component: 'SwitchSelectedComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch layout
        configs.push(new Config({
            component: 'SwitchLayoutComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch styling
        configs.push(new Config({
            component: 'SwitchStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        return configs;
    }
}
