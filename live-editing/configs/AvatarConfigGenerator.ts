import { IgxAvatarModule } from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class AvatarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AvatarSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarStylingSampleComponent',
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/layouts/avatar/avatar-styling/layout.scss"],
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarCSSVariablesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        return configs;
    }
}
