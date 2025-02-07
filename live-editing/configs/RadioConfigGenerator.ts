import {ReactiveFormsModule} from '@angular/forms';
import {IgxButtonModule,
IgxInputGroupModule,
IgxRadioModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class RadioConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RadioSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioGroupSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioGroupVerticalComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioStylingSampleComponent',
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/data-entries/radio/radio-styling-sample/layout.scss"],
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        return configs;
    }
}
