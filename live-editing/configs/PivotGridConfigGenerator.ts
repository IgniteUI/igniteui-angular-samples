/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import {
    IgxPivotGridModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class PivotGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive'
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

        return configs;
    }
}
