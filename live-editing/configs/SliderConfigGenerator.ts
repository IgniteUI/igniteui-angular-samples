import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxSliderModule} from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class SliderConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // slider sample 1
        configs.push(new Config({
            component: 'SliderSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 2
        configs.push(new Config({
            component: 'SliderSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 3
        configs.push(new Config({
            component: 'SliderSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 4
        configs.push(new Config({
            component: 'SliderSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 5
        configs.push(new Config({
            component: 'SliderSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 6
        configs.push(new Config({
            component: 'SliderSample6Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderSecondaryTicksMirrorComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderDiscreteTicksBottomComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderTicksBottomtotopLabelsComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderPrimaryTicksTopComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderTimeframeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'TickLabelsTemplateComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'AppSliderStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/slider/"
        }));
        return configs;
    }
}
