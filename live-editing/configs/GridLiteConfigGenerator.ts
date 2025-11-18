import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';

export class GridLiteConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        //GridLiteDataService: '../../src/app/grid-lite/grid-lite-data.service.ts'
    };

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'GridLiteOverviewComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteColumnConfigSimpleComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteColumnConfigDynamicComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteColumnConfigHeadersComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteDataBindingDynamicComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteFilteringSimpleComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteFilteringEventsComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteFilteringPipelineComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteSortingSimpleComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteSortingEventsComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteSortingGridConfigComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteSortingPipelineComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteStylingCustomComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridLiteStylingThemesComponent',
            additionalDependencies: ['igniteui-grid-lite'],
            additionalFiles: [
                '/src/app/grid-lite/grid-lite-data.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        return configs;
    };
}