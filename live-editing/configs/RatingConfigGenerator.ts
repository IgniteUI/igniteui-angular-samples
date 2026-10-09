import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class RatingConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // rating overview
        configs.push(new Config({
            component: 'RatingOverviewComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        // rating layout
        configs.push(new Config({
            component: 'RatingLayoutComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        // rating interaction states
        configs.push(new Config({
            component: 'RatingInteractionStatesComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        // rating states
        configs.push(new Config({
            component: 'RatingStatesComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        // rating size
        configs.push(new Config({
            component: 'RatingSizeComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        // rating styling
        configs.push(new Config({
            component: 'RatingStylingComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        // rating tailwind styling
        configs.push(new Config({
            component: 'RatingTailwindStylingComponent',
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/rating/"
        }));

        return configs;
    }
}
