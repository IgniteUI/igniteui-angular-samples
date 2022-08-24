/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import {Router,
    RouterModule} from '@angular/router';
import {
    IgxPivotGridModule,
    IgxTooltipModule,
    IgxToastModule,
    IgxSwitchModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class PivotGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
        PivotDataService: '../../src/app/services/pivotRemoteData.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridBasicSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PivotGridBasicSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxPivotGridModule']
            }),
            component: 'PivotGridBasicSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/dataToAnalyze.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotFeaturesComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PivotFeaturesComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxPivotGridModule']
            }),
            component: 'PivotFeaturesComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/dataToAnalyze.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridStatePersistanceSampleComponent', 'PivotGridAboutComponent', 'IgxPreventDocumentScrollModule', 'IgxTooltipModule',
                    'IgxToastModule', 'IgxSwitchModule', 'Router', 'RouterModule'],
                ngDeclarations: ['PivotGridStatePersistanceSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxPivotGridModule', 'IgxTooltipModule', 'PivotGridAboutComponent',
                'RouterModule.forRoot([\{component: PivotGridAboutComponent, path: \'pivot-grid-about\'},\{component: PivotGridStatePersistanceSampleComponent, path: \'pivot-grid-state-persistance\'},\{ path: \'\', redirectTo: \'/pivot-grid-state-persistance\', pathMatch: \'full\' }])',
                    'IgxToastModule', 'IgxSwitchModule']
            }),
            component: 'PivotGridStatePersistanceSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data-noop.ts', '/src/app/services/pivotRemoteData.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridNoopSampleComponent', 'IgxPreventDocumentScrollModule', 'PivotDataService'],
                ngDeclarations: ['PivotGridNoopSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxPivotGridModule'],
                ngProviders: ['PivotDataService']
            }),
            component: 'PivotGridNoopSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/salesDataNew.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotDataSelectorSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PivotDataSelectorSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxPivotGridModule']
            }),
            component: 'PivotDataSelectorSampleComponent'
        }));

        return configs;
    }
}
