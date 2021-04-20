import {
    IgxIconModule,
    IgxTreeModule,
    IgxTooltipModule
} from 'igniteui-angular';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
export class TreeConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TreeBasicSampleComponent',
            additionalFiles: ['/src/app/lists/tree/tree-basic-sample/local-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTreeModule', 'IgxIconModule', 'TreeBasicSampleComponent'],
                ngDeclarations: ['TreeBasicSampleComponent'],
                ngImports: ['IgxTreeModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: '/lists/tree/'
        }));

        configs.push(new Config({
            component: 'TreeAdvancedSampleComponent',
            additionalFiles: ['/src/app/lists/tree/tree-advanced-sample/local-data.ts',
            '/src/app/lists/tree/tree-advanced-sample/services/data.service.ts',
            '/src/app/lists/tree/tree-advanced-sample/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTreeModule', 'IgxIconModule', 'IgxTooltipModule', 'TreeAdvancedSampleComponent'],
                ngDeclarations: ['TreeAdvancedSampleComponent'],
                ngImports: ['IgxTreeModule', 'IgxIconModule', 'IgxTooltipModule']
            }),
            shortenComponentPathBy: '/lists/tree/'
        }));

        return configs;
    }
}
