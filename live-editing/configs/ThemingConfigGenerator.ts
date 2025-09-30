import {
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxChipComponent,
    IgxIconComponent,
    IgxPrefixDirective,
} from "igniteui-angular";
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class ThemingConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'DefaultThemeSampleComponent',
            additionalFiles: ['/src/app/theming/data/data.ts', '/src/app/theming/data/record.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/'
        }));

        configs.push(new Config({
            component: 'ShadowsSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/shadows/'
        }));

        configs.push(new Config({
            component: 'ShadowsSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/shadows/'
        }));

        configs.push(new Config({
            component: 'CardSampleShadowComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/shadows/'
        }));

        configs.push(new Config({
            component: 'DisplayDensityComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/'
        }));

        configs.push(new Config({
            component: 'RoundnessComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/roundness/'
        }));

        configs.push(new Config({
            component: 'AnimationsSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/animations/'
        }));

        configs.push(new Config({
            component: 'AnimationsSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/animations/'
        }));

        configs.push(new Config({
            component: 'BootstrapComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['bootstrap', '@ng-bootstrap/ng-bootstrap'],
            shortenComponentPathBy: '/theming/bootstrap/'
        }));

        configs.push(new Config({
            component: 'AngularMaterialComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['@angular/cdk', '@angular/material'],
            shortenComponentPathBy: '/theming/angular/'
        }));

        configs.push(new Config({
            component: 'TailwindSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/theming/tailwind/',
            additionalDependencies: ['tailwindcss', '@tailwindcss/postcss'],
            additionalFiles: [".postcssrc.json"],
        }));

        return configs;
    }
}
