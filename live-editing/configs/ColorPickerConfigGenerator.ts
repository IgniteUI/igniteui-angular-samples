import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ColorPickerConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ColorPickerOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerValueComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerFormatComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerAlphaComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerSwatchesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerInputComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerSizesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerInputSizesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerReactiveFormComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerStylingComponent',
            additionalFiles: ["src/app/data-entries/color-picker/styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        configs.push(new Config({
            component: 'ColorPickerTailwindStylingComponent',
            additionalDependencies: ["tailwindcss", "@tailwindcss/postcss"],
            additionalFiles: [".postcssrc.json"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/color-picker/"
        }));

        return configs;
    }
}
