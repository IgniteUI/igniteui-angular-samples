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
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        return configs;
    }
}
