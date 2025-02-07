import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
import { ButtonsRoundnessComponent } from '../../src/app/data-entries/buttons/buttons-roundness-sample/buttons-roundness-sample';
export class ButtonConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // buttons sample 1
        configs.push(new Config({
            component: 'ButtonsSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // buttons roundness
        configs.push(new Config({
            component: 'ButtonsDisabledComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // buttons display density
        configs.push(new Config({
            component: 'ButtonsDisplayDensityComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        configs.push(new Config({
            component: 'ButtonsRoundnessComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // button style
        configs.push(new Config({
            component: 'ButtonsStyleComponent',
            additionalFiles: ["/src/app/data-entries/buttons/buttons-style/layout.scss"],
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/data-entries/buttons/buttons-style/layout.scss"],
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        return configs;
    }
}
