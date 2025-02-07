import {IgxButtonModule,
IgxIconModule,
IgxProgressBarModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class LinearProgressbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'LinearProgressbarComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'LinearDynamicSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: 'LinearProgressbarSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: 'LinearProgressbarSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: 'LinearProgressbarStylingComponent',
            additionalFiles: ["/src/app/data-display/linear-progressbar/linear-progressbar-styling-sample/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        return configs;
    }
}
