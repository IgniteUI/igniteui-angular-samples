import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxTextHighlightModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class TextHighlightConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TextHighlightSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        configs.push(new Config({
            component: 'TextHighlightSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        configs.push(new Config({
            component: 'TextHighlightStyleComponent',
            additionalFiles: ["/src/app/data-display/text-highlight/text-highlight-style/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxInputGroupModule',
                    'IgxIconModule', 'IgxRippleModule', 'IgxTextHighlightModule', 'TextHighlightStyleComponent'],
                ngDeclarations: ['TextHighlightStyleComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxTextHighlightModule']
            }),
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        return configs;
    }
}
