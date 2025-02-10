import {IgxButtonModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ToggleConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // toggle sample
        configs.push(new Config({
            component: 'ToggleComponent',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));

        // toggle sample 1
        configs.push(new Config({
            component: 'ToggleSample1Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        // toggle sample 2
        configs.push(new Config({
            component: 'ToggleSample2Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        // toggle sample 3
        configs.push(new Config({
            component: 'ToggleSample3Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        // toggle sample 4
        configs.push(new Config({
            component: 'ToggleSample4Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        return configs;
    }
}
