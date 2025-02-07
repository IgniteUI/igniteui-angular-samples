import {
    IgxAvatarModule,
    IgxChipsModule,
    IgxIconModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ChipConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ChipSimpleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'ChipAreaSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'ChipStylingSampleComponent',
            additionalFiles: ["/src/app/data-display/chip/chip-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
