import {IgxSplitterModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class SplitterConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // splitter horizontal sample
        configs.push(new Config({
            component: 'SplitterHorizontalSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/splitter/"
        }));

        // splitter nested sample
        configs.push(new Config({
            component: 'SplitterNestedSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/splitter/"
        }));

        // splitter styling sample
        configs.push(new Config({
            component: 'SplitterStylingSampleComponent',
            additionalFiles: ["/src/app/layouts/splitter/splitter-styling-sample/layout.scss"],
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
