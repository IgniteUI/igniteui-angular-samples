import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ButtonConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // button overview
        configs.push(new Config({
            component: 'ButtonOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // flat button
        configs.push(new Config({
            component: 'ButtonFlatComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // button interaction states
        configs.push(new Config({
            component: 'ButtonInteractionStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // button layout
        configs.push(new Config({
            component: 'ButtonLayoutComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // contained button
        configs.push(new Config({
            component: 'ButtonContainedComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // floating action button
        configs.push(new Config({
            component: 'ButtonFabComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // outlined button
        configs.push(new Config({
            component: 'ButtonOutlinedComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // button states
        configs.push(new Config({
            component: 'ButtonStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // button size
        configs.push(new Config({
            component: 'ButtonSizeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // download button
        configs.push(new Config({
            component: 'ButtonDownloadComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // button styling
        configs.push(new Config({
            component: 'ButtonStylingComponent',
            additionalFiles: ["/src/app/data-entries/button/button-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        // button tailwind styling
        configs.push(new Config({
            component: 'ButtonTailwindStylingComponent',
            additionalFiles: ["/src/app/data-entries/button/button-tailwind-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/button/"
        }));

        return configs;
    }
}
