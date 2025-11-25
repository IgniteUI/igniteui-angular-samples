import { IgxButtonModule, IgxRippleModule, IgxTextHighlightModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
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
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        return configs;
    }
}
