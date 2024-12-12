/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import {IgxHierarchicalGridModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;

export class DVHierarchicalGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../../src/app/directives/prevent-scroll.directive',
        RemoteValuesService: '../../../projects/app-lob/src/app/services/remoteValues.service'
    };

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts', '/src/app/hierarchical-grid/models.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss', '/src/app/services/remoteValues.service.ts'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appConfig: BaseAppConfig,
            component: 'HGridColumnResizingSampleComponent'
        }));

        return configs;
    }
}
