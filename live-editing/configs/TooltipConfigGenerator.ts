import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxToggleModule, IgxTooltipModule } from 'igniteui-angular/directives';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class TooltipConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // tooltip overview
        configs.push(new Config({
            component: 'TooltipOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // tooltip variants
        configs.push(new Config({
            component: 'TooltipVariantsComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // tooltip position
        configs.push(new Config({
            component: 'TooltipPositionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // tooltip arrow position
        configs.push(new Config({
            component: 'TooltipArrowPositionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // tooltip custom
        configs.push(new Config({
            component: 'TooltipCustomComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            additionalFiles: ['/src/app/interactions/tooltip/tooltip-custom/IncomeTaxes.ts'],
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // tooltip styling
        configs.push(new Config({
            component: 'TooltipStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // tooltip tailwind styling
        configs.push(new Config({
            component: 'TooltipTailwindStylingComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core', 'tailwindcss', '@tailwindcss/postcss'],
            additionalFiles: ['.postcssrc.json'],
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        return configs;
    }
}
