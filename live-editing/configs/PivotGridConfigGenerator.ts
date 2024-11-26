/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import {
    Router,
    RouterModule
} from '@angular/router';
import {
    IgxPivotGridModule,
    IgxTooltipModule,
    IgxToastModule,
    IgxSwitchModule,
    IgxExcelExporterService,
    IgxIconModule,
    IgxCheckboxModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class PivotGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollDirective: '../../src/app/directives/prevent-scroll.directive',
        PivotDataService: '../../src/app/services/pivotRemoteData.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridBasicSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['PivotGridBasicSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule']
            }),
            component: 'PivotGridBasicSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/dataToAnalyze.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotExportComponent', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['PivotExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule'],
                ngProviders: ['IgxExcelExporterService']
            }),
            component: 'PivotExportComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/dataToAnalyze.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotFeaturesComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['PivotFeaturesComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule']
            }),
            component: 'PivotFeaturesComponent'
        }));

        configs.push(new Config({
            additionalFiles: 
            [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/dataToAnalyze.ts',
                '/src/app/pivot-grid/pivot-state-persistence/about.component.ts',
                '/src/app/pivot-grid/pivot-state-persistence/about.component.html',
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridStatePersistenceSampleComponent', 'PivotGridAboutComponent', 'IgxPreventDocumentScrollDirective', 'IgxTooltipModule',
                    'IgxToastModule', 'IgxSwitchModule', 'IgxCheckboxModule', 'IgxIconModule', 'Router', 'RouterModule'],
                ngDeclarations: ['PivotGridStatePersistenceSampleComponent', 'PivotGridAboutComponent',],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule', 'IgxTooltipModule', 'IgxCheckboxModule', 'IgxIconModule', 
                    'RouterModule.forRoot([\{component: PivotGridAboutComponent, path: \'pivot-grid-about\'},\{component: PivotGridStatePersistenceSampleComponent, path: \'pivot-grid-state-persistance\'},\{ path: \'\', redirectTo: \'/pivot-grid-state-persistance\', pathMatch: \'full\' }])',
                    'IgxToastModule', 'IgxSwitchModule']
            }),
            component: 'PivotGridStatePersistenceSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data-noop.ts', '/src/app/services/pivotRemoteData.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridNoopSampleComponent', 'IgxPreventDocumentScrollDirective', 'PivotDataService'],
                ngDeclarations: ['PivotGridNoopSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule'],
                ngProviders: ['PivotDataService']
            }),
            component: 'PivotGridNoopSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data-noop.ts', '/src/app/services/pivotRemoteData.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotGridNoopPersistenceSampleComponent', 'IgxPreventDocumentScrollDirective', 'PivotDataService', 'IgxIconModule'],
                ngDeclarations: ['PivotGridNoopPersistenceSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule', 'IgxIconModule'],
                ngProviders: ['PivotDataService']
            }),
            component: 'PivotGridNoopPersistenceSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/salesDataNew.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPivotGridModule', 'PivotDataSelectorSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['PivotDataSelectorSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxPivotGridModule']
            }),
            component: 'PivotDataSelectorSampleComponent'
        }));

        return configs;
    }
}
