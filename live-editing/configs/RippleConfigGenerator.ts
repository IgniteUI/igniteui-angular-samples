import {IgxAvatarModule,
IgxButtonModule,
IgxIconModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class RippleConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RippleStylingSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/ripple/"
        }));

        return configs;
    }
}
