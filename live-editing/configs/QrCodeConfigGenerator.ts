import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class QrCodeConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'QrCodeOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeSizeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeErrorCorrectionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeDotShapesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeCornerShapesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeLogoComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        configs.push(new Config({
            component: 'QrCodeTailwindStylingComponent',
            additionalDependencies: ["tailwindcss", "@tailwindcss/postcss"],
            additionalFiles: [".postcssrc.json"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/qr-code/"
        }));

        return configs;
    }
}
