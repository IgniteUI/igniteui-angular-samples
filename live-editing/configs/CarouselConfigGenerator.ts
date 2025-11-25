import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxCarouselModule } from 'igniteui-angular/carousel';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxListModule } from 'igniteui-angular/list';
import { IgxSelectModule } from 'igniteui-angular/select';
import { IgxSliderModule } from 'igniteui-angular/slider';
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
