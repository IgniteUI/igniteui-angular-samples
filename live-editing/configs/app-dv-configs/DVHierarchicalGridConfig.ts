import {IgxHierarchicalGridModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import {AppModuleConfig} from '../core/AppModuleConfig';
import {Config} from '../core/Config';
import {IConfigGenerator} from '../core/IConfigGenerator';
export class DVHierarchicalGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        'IgxPreventDocumentScrollModule': '../../../src/app/directives/prevent-scroll.directive'
};

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'HGridColumnResizingSampleComponent', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                ngDeclarations: ['HGridColumnResizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
            }),
            component: 'HGridColumnResizingSampleComponent'
        }));

        return configs;
    }
}
