import {IgxIconModule,
IgxNavbarModule,
IgxButtonModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class NavbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'NavbarComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/"
        }));

        configs.push(new Config({
            component: 'NavbarSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarStyleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarCustomTitleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navbar/"
        }));

        return configs;
    }
}
