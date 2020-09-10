/* tslint:disable:object-literal-sort-keys */
import { IgxSplitterModule } from "igniteui-angular";
import {
    SplitterHorizontalSampleComponent
} from "../../src/app/layouts/splitter/splitter-horizontal-sample/splitter-horizontal-sample.component";
import {
    SplitterNestedSampleComponent
} from "../../src/app/layouts/splitter/splitter-nested-sample/splitter-nested-sample.component";
import {
    SplitterStylingSampleComponent
} from "../../src/app/layouts/splitter/splitter-styling-sample/splitter-styling-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

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
