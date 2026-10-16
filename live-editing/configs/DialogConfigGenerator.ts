import { IgxButtonModule, IgxRippleModule, IgxToggleModule } from 'igniteui-angular/directives';
import { IgxDialogModule } from 'igniteui-angular/dialog';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DialogConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // dialog overview
        configs.push(new Config({
            component: 'DialogOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog types
        configs.push(new Config({
            component: 'DialogTypesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog styling
        configs.push(new Config({
            component: 'DialogStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog tailwind styling
        configs.push(new Config({
            component: 'DialogTailwindStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        return configs;
    }
}
