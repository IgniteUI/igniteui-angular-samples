import {
    IgxAvatarModule,
    IgxBannerModule,
    IgxButtonModule,
    IgxCardModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxNavbarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToastModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class BannerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'BannerAdvancedSampleComponent',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample1Component',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample2Component',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample3Component',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerStylingComponent',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/notifications/banner/"
        }));

        return configs;
    }
}
