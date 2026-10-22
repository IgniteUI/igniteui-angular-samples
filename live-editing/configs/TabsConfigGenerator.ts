import {RouterModule} from '@angular/router';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxNavbarModule } from 'igniteui-angular/navbar';
import { IgxTabsModule } from 'igniteui-angular/tabs';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class TabsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // tabs overview
        configs.push(new Config({
            component: 'TabsOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        // tabs type
        configs.push(new Config({
            component: 'TabsTypeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        // tabs responsiveness
        configs.push(new Config({
            component: 'TabsResponsivenessComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        // tabs amount
        configs.push(new Config({
            component: 'TabsAmountComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        // tabs states
        configs.push(new Config({
            component: 'TabsStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        // tabs styling
        configs.push(new Config({
            component: 'TabsStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        // tabs tailwind styling
        configs.push(new Config({
            component: 'TabsTailwindStylingComponent',
            additionalDependencies: ["tailwindcss", "@tailwindcss/postcss"],
            additionalFiles: [".postcssrc.json"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        return configs;
    }
}
