import {
    IgxButtonModule,
    IgxDialogModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxToggleModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DialogConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // dialog sample 1
        configs.push(new Config({
            component: 'DialogSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog sample 2
        configs.push(new Config({
            component: 'DialogSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog sample 3
        configs.push(new Config({
            component: 'DialogSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        configs.push(new Config({
            component: 'DialogStylingSampleComponent',
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/interactions/dialog/dialog-styling-sample/layout.scss"],
            shortenComponentPathBy: "/interactions/"
        }));

        return configs;
    }
}
