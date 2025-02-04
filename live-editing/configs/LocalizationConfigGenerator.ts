import {
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxTimePickerModule,
    IgxSelectModule
} from 'igniteui-angular';
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
