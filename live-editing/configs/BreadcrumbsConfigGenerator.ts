import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class BreadcrumbsConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'BreadcrumbsOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsSizesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsPrefixSuffixComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsDropdownComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsCustomSeparatorComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsWrappingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        configs.push(new Config({
            component: 'BreadcrumbsTailwindStylingComponent',
            additionalDependencies: ["tailwindcss", "@tailwindcss/postcss"],
            additionalFiles: [".postcssrc.json"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/breadcrumbs/"
        }));

        return configs;
    }
}
