import {IgxHierarchicalGridModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';

export class DVHierarchicalGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        'IgxPreventDocumentScrollModule': '../../../src/app/directives/prevent-scroll.directive'
};

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/hierarchical-grid/data.ts",
                "/projects/app-lob/src/_app-layout.scss", "/projects/app-lob/src/_variables.scss"],
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
