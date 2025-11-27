import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxListModule } from 'igniteui-angular/list';
import { IgxSnackbarModule } from 'igniteui-angular/snackbar';
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
