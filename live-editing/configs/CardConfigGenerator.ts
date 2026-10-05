import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxButtonModule, IgxDividerModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxChipsModule } from 'igniteui-angular/chips';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxSwitchModule } from 'igniteui-angular/switch';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CardConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // card overview
        configs.push(new Config({
            component: 'CardOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card actions
        configs.push(new Config({
            component: 'CardActionsComponent',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card-actions/icons.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card media
        configs.push(new Config({
            component: 'CardMediaComponent',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card-media/icons.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card media position
        configs.push(new Config({
            component: 'CardPositionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card styling
        configs.push(new Config({
            component: 'CardStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card tailwind styling
        configs.push(new Config({
            component: 'CardTailwindStylingComponent',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card-tailwind-styling/icons.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        return configs;
    }
}
