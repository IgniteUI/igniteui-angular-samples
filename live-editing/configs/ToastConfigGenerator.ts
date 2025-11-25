import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxToastModule } from 'igniteui-angular/toast';
import { IgxIconModule } from 'igniteui-angular/icon';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ToastConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // toast sample 1
        configs.push(new Config({
            component: 'ToastSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast sample 2
        configs.push(new Config({
            component: 'ToastSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast sample 3
        configs.push(new Config({
            component: 'ToastSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast sample 5
        configs.push(new Config({
            component: 'ToastSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast style
        configs.push(new Config({
            component: 'ToastStyleComponent',
            additionalFiles: ["/src/app/notifications/toast/toast-style/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/toast/"
        }));

        return configs;
    }
}
