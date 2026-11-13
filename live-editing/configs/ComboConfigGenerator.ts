/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxComboModule } from 'igniteui-angular/combo';
import { IgxSelectModule } from 'igniteui-angular/select';
import { IgxSwitchModule } from 'igniteui-angular/switch';
import { IgxToastModule } from 'igniteui-angular/toast';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxSimpleComboModule } from 'igniteui-angular/simple-combo';
import { IgxProgressBarModule } from 'igniteui-angular/progressbar';
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

        // combo overview
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboOverviewComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo type
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboTypeComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo disabled
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboDisabledComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo size
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboSizeComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo states
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboStatesComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo validation
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboValidationComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo dropdown size
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboDropdownSizeComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo search input
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboSearchInputComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo styling
        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'ComboStylingComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        // combo tailwind styling
        configs.push(new Config({
            additionalDependencies: ['tailwindcss', '@tailwindcss/postcss'],
            additionalFiles: ['.postcssrc.json'],
            appConfig: BaseAppConfig,
            component: 'ComboTailwindStylingComponent',
            shortenComponentPathBy: '/lists/combo/'
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
            appConfig: BaseAppConfig,
            component: 'SimpleComboStylingComponent'
        }));

        return configs;
    }
}
