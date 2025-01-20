/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import {
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxCardModule,
    IgxComboModule,
    IgxSelectModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxIconModule,
    IgxSimpleComboModule,
    IgxProgressBarModule
} from 'igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
import { BaseAppConfig } from './BaseConfig';
export class ComboConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        RemoteNWindService: '../../src/app/services/remoteNwind.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-features/local-data.ts'],
            appConfig: BaseAppConfig,
            component: 'ComboFeaturesComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/heroData.ts', '/src/app/lists/combo/combo-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxToastModule', 'ComboStylingComponent'],
                ngDeclarations: ['ComboStylingComponent'],
                ngImports: ['IgxComboModule', 'IgxToastModule']
            }),
            component: 'ComboStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-main/local-data.ts'],
            appConfig: BaseAppConfig,
            component: 'ComboMainComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-template/local-data.ts'],
            appConfig: BaseAppConfig,
            component: 'ComboTemplateComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/services/remoteNwind.service.ts'],
            appConfig: BaseAppConfig,
            component: 'ComboRemoteComponent'
        }));

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboOverlayComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-binding/cities.ts'],
            appConfig: BaseAppConfig,
            component: 'ComboBindingComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-valuekey/cities.ts'],
            appConfig: BaseAppConfig,
            component: 'ComboValueKeyComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/stocks-data.ts'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appConfig: BaseAppConfig,
            component: 'SimpleComboMainComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/cities15000-regions-countries.ts'],
            appConfig: BaseAppConfig,
            component: 'SimpleComboUsageComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/cities15000-regions-countries.ts'],
            appConfig: BaseAppConfig,
            component: 'SimpleComboCascadingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/services/remoteNwind.service.ts'],
            appConfig: BaseAppConfig,
            component: 'SimpleComboRemoteComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/cities15000-regions-countries.ts', '/src/app/lists/combo/simple-combo-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxSimpleComboModule', 'SimpleComboStylingComponent'],
                ngDeclarations: ['SimpleComboStylingComponent'],
                ngImports: ['IgxComboModule', 'IgxSimpleComboModule']
            }),
            component: 'SimpleComboStylingComponent'
        }));

        return configs;
    }
}
