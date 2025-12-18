import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxProgressBarModule } from 'igniteui-angular/progressbar';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CircularProgressbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CircularProgressbarComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'CircularIndeterminateProgressbarComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/circular-progressbar/"
        }));

        configs.push(new Config({
            component: 'CircularDynamicSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'CircularStylingSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/circular-progressbar/"
        }));

        return configs;
    }
}
