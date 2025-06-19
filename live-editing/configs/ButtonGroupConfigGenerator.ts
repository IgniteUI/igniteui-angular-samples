import {IgxButtonGroupModule,
IgxButtonModule,
IgxIconModule,
IgxRippleModule,
IgxRadioModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ButtonGroupConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // button group 1
        configs.push(new Config({
            component: 'ButtonGroupSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 2
        configs.push(new Config({
            component: 'ButtonGroupSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 3
        configs.push(new Config({
            component: 'ButtonGroupSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 4
        configs.push(new Config({
            component: 'ButtonGroupSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 5
        configs.push(new Config({
            component: 'ButtonGroupSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group style
        configs.push(new Config({
            component: 'ButtonGroupStyleComponent',
            additionalFiles: ["/src/app/data-entries/buttonGroup/button-group-style/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        return configs;
    }
}
