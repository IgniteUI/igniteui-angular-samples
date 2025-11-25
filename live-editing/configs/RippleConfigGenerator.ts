import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class RippleConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RippleStylingSampleComponent',
            additionalFiles: ["/src/app/interactions/ripple/ripple-stying/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/ripple/"
        }));

        return configs;
    }
}
