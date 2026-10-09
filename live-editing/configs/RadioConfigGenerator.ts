import {ReactiveFormsModule} from '@angular/forms';
import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxRadioModule } from 'igniteui-angular/radio';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class RadioConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RadioOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioLayoutComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioOrientationComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioInteractionStateComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioDisabledComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioOnOffStateComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/radio/"
        }));

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

        return configs;
    }
}
