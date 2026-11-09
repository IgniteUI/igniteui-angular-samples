import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class AvatarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AvatarOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarVariantsComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarShapeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarSizeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarStylingSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        return configs;
    }
}
