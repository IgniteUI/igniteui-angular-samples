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
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class PivotGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
        PivotDataService: '../../src/app/services/pivotRemoteData.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data.ts'],
            appConfig: BaseAppConfig,
            component: 'PivotGridBasicSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/dataToAnalyze.ts'],
            appConfig: BaseAppConfig,
            component: 'PivotExportComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/dataToAnalyze.ts'],
            appConfig: BaseAppConfig,
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
            appConfig: BaseAppConfig,
            component: 'PivotGridStatePersistenceSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data-noop.ts', '/src/app/services/pivotRemoteData.service.ts'],
            appConfig: BaseAppConfig,
            component: 'PivotGridNoopSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/pivot-data-noop.ts', '/src/app/services/pivotRemoteData.service.ts'],
            appConfig: BaseAppConfig,
            component: 'PivotGridNoopPersistenceSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/salesDataNew.ts'],
            appConfig: BaseAppConfig,
            component: 'PivotDataSelectorSampleComponent'
        }));

        return configs;
    }
}
