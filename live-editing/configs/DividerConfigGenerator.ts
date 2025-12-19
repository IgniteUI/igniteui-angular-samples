import { IgxDividerModule } from 'igniteui-angular/directives';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DividerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'DividerDefaultComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: 'DividerDashedComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: 'DividerVerticalComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: 'DividerInsetComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/divider/"
        }));

        return configs;
    }
}
