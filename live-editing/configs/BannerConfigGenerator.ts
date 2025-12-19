import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxBannerModule } from 'igniteui-angular/banner';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxNavbarModule } from 'igniteui-angular/navbar';
import { IgxSwitchModule } from 'igniteui-angular/switch';
import { IgxToastModule } from 'igniteui-angular/toast';
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
