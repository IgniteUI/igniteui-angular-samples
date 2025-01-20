import {
    IgxAvatarModule,
    IgxButtonModule,
    IgxCardModule,
    IgxChipsModule,
    IgxDividerModule,
    IgxExpansionPanelModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxListModule,
    IgxRippleModule,
    IgxSliderModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CardConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // card sample
        configs.push(new Config({
            component: 'CardComponent',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 1
        configs.push(new Config({
            component: 'CardSample1Component',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 2
        configs.push(new Config({
            component: 'CardSample2Component',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 3
        configs.push(new Config({
            component: 'CardSample3Component',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 4
        configs.push(new Config({
            component: 'CardSample4Component',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card styling sample
        configs.push(new Config({
            component: 'CardStylingSampleComponent',
            appConfig: BaseAppConfig,
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts",
                "/src/app/layouts/card/card-styling-sample/layout.scss"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        return configs;
    }
}
