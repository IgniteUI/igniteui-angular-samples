import { IgxGridModule } from 'igniteui-angular/grids/grid';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxTimePickerModule } from 'igniteui-angular/time-picker';
import { IgxSelectModule } from 'igniteui-angular/select';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class LocalizationConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // localization sample 1
        configs.push(new Config({
            component: 'LocalizationSample1Component',
            additionalFiles: ['/src/app/data/nwindData.ts'],
            additionalDependencies: ['igniteui-angular-i18n'],
            appConfig: BaseAppConfig
        }));

        // localization sample 2
        configs.push(new Config({
            component: 'LocalizationSample2Component',
            additionalFiles: ['/src/app/data/nwindData.ts'],
            additionalDependencies: ['igniteui-angular-i18n'],
            appConfig: BaseAppConfig
        }));

        // localization sample 3
        configs.push(new Config({
            component: 'LocalizationSample3Component',
            additionalFiles: ['/src/app/data/nwindData.ts'],
            additionalDependencies: ['igniteui-angular-i18n'],
            appConfig: BaseAppConfig
        }));

        // localization all resources
        configs.push(new Config({
            component: 'LocalizationAllResourcesComponent',
            additionalFiles: ['/src/app/data/nwindData.ts'],
            additionalDependencies: ['igniteui-angular-i18n'],
            appConfig: BaseAppConfig
        }));

        return configs;
    }
}
