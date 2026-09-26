import { IgxCheckboxModule } from 'igniteui-angular/checkbox';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CheckboxConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // checkbox overview
        configs.push(new Config({
            component: 'CheckboxOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox states
        configs.push(new Config({
            component: 'CheckboxStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox styling
        configs.push(new Config({
            component: 'CheckboxStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox tailwind styling
        configs.push(new Config({
            component: 'CheckboxTailwindStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        return configs;
    }
}
