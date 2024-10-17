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
    IgxPrefixModule,
    IgxSimpleComboModule
} from 'igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class ComboConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        RemoteNWindService: '../../src/app/services/remoteNwind.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-features/local-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxSwitchModule', 'ComboFeaturesComponent'],
                ngDeclarations: ['ComboFeaturesComponent'],
                ngImports: ['IgxComboModule', 'IgxSwitchModule']
            }),
            component: 'ComboFeaturesComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/heroData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxToastModule', 'ComboStylingComponent'],
                ngDeclarations: ['ComboStylingComponent'],
                ngImports: ['IgxComboModule', 'IgxToastModule']
            }),
            component: 'ComboStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-main/local-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'ComboMainComponent'],
                ngDeclarations: ['ComboMainComponent'],
                ngImports: ['IgxComboModule']
            }),
            component: 'ComboMainComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-template/local-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxIconModule', 'IgxPrefixModule', 'ComboTemplateComponent'],
                ngDeclarations: ['ComboTemplateComponent'],
                ngImports: ['IgxComboModule', 'IgxIconModule', 'IgxPrefixModule']
            }),
            component: 'ComboTemplateComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/services/remoteNwind.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxToastModule', 'ComboRemoteComponent',
                    'HttpClientModule', 'RemoteNWindService'],
                ngDeclarations: ['ComboRemoteComponent'],
                ngImports: ['IgxComboModule', 'IgxToastModule', 'HttpClientModule'],
                ngProviders: ['RemoteNWindService']
            }),
            component: 'ComboRemoteComponent'
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'ComboOverlayComponent'],
                ngDeclarations: ['ComboOverlayComponent'],
                ngImports: ['IgxComboModule']
            }),
            component: 'ComboOverlayComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-binding/cities.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxButtonModule', 'IgxCardModule', 'ComboBindingComponent'],
                ngDeclarations: ['ComboBindingComponent'],
                ngImports: ['IgxComboModule', 'IgxButtonModule', 'IgxCardModule']
            }),
            component: 'ComboBindingComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/lists/combo/combo-valuekey/cities.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxButtonModule', 'ComboValueKeyComponent'],
                ngDeclarations: ['ComboValueKeyComponent'],
                ngImports: ['IgxComboModule', 'IgxButtonModule']
            }),
            component: 'ComboValueKeyComponent',
            shortenComponentPathBy: '/lists/combo/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/stocks-data.ts'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'IgxComboModule', 'IgxFinancialChartModule', 'IgxSimpleComboModule', 'SimpleComboMainComponent'],
                ngDeclarations: ['SimpleComboMainComponent'],
                ngImports: ['IgxButtonGroupModule', 'IgxComboModule', 'IgxFinancialChartModule', 'IgxSimpleComboModule']
            }),
            component: 'SimpleComboMainComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/cities15000-regions-countries.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'SimpleComboUsageComponent', 'IgxSimpleComboModule'],
                ngDeclarations: ['SimpleComboUsageComponent'],
                ngImports: ['IgxComboModule', 'IgxSimpleComboModule']
            }),
            component: 'SimpleComboUsageComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/cities15000-regions-countries.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxSimpleComboModule', 'IgxProgressBarModule', 'SimpleComboCascadingComponent'],
                ngDeclarations: ['SimpleComboCascadingComponent'],
                ngImports: ['IgxComboModule', 'IgxSimpleComboModule', 'IgxProgressBarModule']
            }),
            component: 'SimpleComboCascadingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/services/remoteNwind.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxSimpleComboModule', 'IgxToastModule',
                    'HttpClientModule', 'RemoteNWindService', 'SimpleComboRemoteComponent'],
                ngDeclarations: ['SimpleComboRemoteComponent'],
                ngImports: ['IgxComboModule', 'IgxSimpleComboModule', 'IgxToastModule', 'HttpClientModule'],
                ngProviders: ['RemoteNWindService']
            }),
            component: 'SimpleComboRemoteComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/cities15000-regions-countries.ts'],
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
