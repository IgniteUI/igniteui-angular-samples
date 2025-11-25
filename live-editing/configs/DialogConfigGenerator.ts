import { IgxButtonModule, IgxRippleModule, IgxToggleModule } from 'igniteui-angular/directives';
import { IgxDialogModule } from 'igniteui-angular/dialog';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
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
            additionalFiles: ["/src/app/interactions/dialog/dialog-styling-sample/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));

        return configs;
    }
}
