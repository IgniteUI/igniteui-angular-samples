import {
    IgxIconModule,
    IgxTreeModule,
    IgxListModule
} from 'igniteui-angular';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
export class TreeConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TreeBasicSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTreeModule', 'IgxIconModule', 'TreeBasicSampleComponent'],
                ngDeclarations: ['TreeBasicSampleComponent'],
                ngImports: ['IgxTreeModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: '/lists/tree/'
        }));

        return configs;
    }
}
