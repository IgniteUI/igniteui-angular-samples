import {IgxAvatarModule,
IgxButtonModule,
IgxIconModule,
IgxListModule,
IgxRippleModule,
IgxSnackbarModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class SnackbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'SnackbarSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarStyleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        return configs;
    }
}
