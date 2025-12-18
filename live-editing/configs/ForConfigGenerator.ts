import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxFilterModule, IgxForOfModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxListModule } from 'igniteui-angular/list';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ForConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'IgxForComponent',
            additionalFiles: ["/src/app/data-display/igxFor/names.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'IgxForHorizontalComponent',
            additionalFiles: ["/src/app/data-display/igxFor/names.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
