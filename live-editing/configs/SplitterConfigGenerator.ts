import {IgxSplitterModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class SplitterConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // splitter horizontal sample
        configs.push(new Config({
            component: 'SplitterHorizontalSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSplitterModule', 'SplitterHorizontalSampleComponent'],
                ngDeclarations: ['SplitterHorizontalSampleComponent'],
                ngImports: ['IgxSplitterModule']
            }),
            shortenComponentPathBy: "/layouts/splitter/"
        }));

        // splitter nested sample
        configs.push(new Config({
            component: 'SplitterNestedSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSplitterModule', 'SplitterNestedSampleComponent'],
                ngDeclarations: ['SplitterNestedSampleComponent'],
                ngImports: ['IgxSplitterModule']
            }),
            shortenComponentPathBy: "/layouts/splitter/"
        }));

        // splitter styling sample
        configs.push(new Config({
            component: 'SplitterStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSplitterModule', 'SplitterStylingSampleComponent'],
                ngDeclarations: ['SplitterStylingSampleComponent'],
                ngImports: ['IgxSplitterModule']
            }),
            shortenComponentPathBy: "/layouts/splitter/"
        }));

        return configs;
    }
}
