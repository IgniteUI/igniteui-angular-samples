import {
    IgxButtonModule,
    IgxCardModule,
    IgxCarouselModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxPrefixDirective,
    IgxSelectModule,
    IgxSliderModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CarouselConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CarouselComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/"
        }));

        configs.push(new Config({
            component: 'CarouselNoNavigationSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: 'CarouselWithComponentsSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: 'CarouselAnimationsSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: 'CarouselStylingSampleComponent',
            additionalFiles: ["/src/app/layouts/carousel/carousel-styling-sample/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/carousel/"
        }));
        
        return configs;
    }
}
